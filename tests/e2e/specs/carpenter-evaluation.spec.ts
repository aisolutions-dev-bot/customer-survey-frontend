import { test, expect } from '../fixtures/test-fixtures';
import { getLatestEvaluationByStaffId } from '../../support/db-verify';

test('should submit carpenter evaluation and verify in database @smoke', async ({
  carpentersEvaluationPage,
  page,
}) => {
  // Step 1: Navigate to the carpenter evaluation form
  await carpentersEvaluationPage.navigate(25005);

  // Step 2: Verify form loaded — check for the evaluation container and header
  await expect(page.locator('.evaluation-container')).toBeVisible();
  const header = page.locator('h1, h2, .form-title, .page-title').first();
  await expect(header).toBeVisible();

  // Step 3: Select or detect carpenter level
  // In group evaluation mode, level is pre-selected and locked
  const isLevelLocked = await carpentersEvaluationPage.isLevelLocked();
  let expectedLevel: 'junior' | 'journeyman' | 'senior';

  if (isLevelLocked) {
    expectedLevel = (await carpentersEvaluationPage.getSelectedLevel()) as
      | 'junior'
      | 'journeyman'
      | 'senior';
    // Level is locked — just wait for questions to load
    await carpentersEvaluationPage.selectCarpenterLevel(expectedLevel);
  } else {
    expectedLevel = 'junior';
    await carpentersEvaluationPage.selectCarpenterLevel('junior');
  }

  // Wait for Angular to finish rendering questions after level is set (group mode loads via async API)
  await page.waitForTimeout(1000);

  // Step 4: Verify questions loaded based on detected level
  const questionCount = await carpentersEvaluationPage.getQuestionCount();
  const expectedQuestions = expectedLevel === 'junior' ? 9 : 11;
  expect(questionCount).toBe(expectedQuestions);

  // Step 5: Select staff — capture the first available staff ID for DB lookup
  const staffSelect = page.locator('.info-item').first().locator('select.info-select');
  const staffOptions = await staffSelect.locator('option').allTextContents();
  // Skip the first option if it's a placeholder (e.g., "Select Staff")
  let staffId: string;
  if (staffOptions.length > 1 && staffOptions[0].trim() === '') {
    // First option is placeholder, get value of second option
    const firstRealOption = staffSelect.locator('option').nth(1);
    staffId = (await firstRealOption.getAttribute('value')) || '';
  } else {
    const firstOption = staffSelect.locator('option').first();
    staffId = (await firstOption.getAttribute('value')) || '';
  }
  expect(staffId).toBeTruthy();
  await carpentersEvaluationPage.selectStaff(staffId);

  // Step 6: Select project — pick first available option
  const projectSelect = page.locator('.info-item').nth(1).locator('select.info-select');
  const projectOptions = await projectSelect.locator('option').all();
  let projectValue = '';
  for (const opt of projectOptions) {
    const val = await opt.getAttribute('value');
    if (val && val.trim() !== '') {
      projectValue = val;
      break;
    }
  }
  if (projectValue) {
    await carpentersEvaluationPage.selectProject(projectValue);
  }

  // Step 7: Select department — pick first available option
  const deptSelect = page.locator('.info-item').nth(2).locator('select.info-select');
  const deptOptions = await deptSelect.locator('option').all();
  let deptValue = '';
  for (const opt of deptOptions) {
    const val = await opt.getAttribute('value');
    if (val && val.trim() !== '') {
      deptValue = val;
      break;
    }
  }
  if (deptValue) {
    await carpentersEvaluationPage.selectDepartment(deptValue);
  }

  // Step 8: Select evaluator — pick first available option
  const evaluatorSelect = page.locator('.evaluator-select');
  const evaluatorOptions = await evaluatorSelect.locator('option').all();
  let evaluatorValue = '';
  for (const opt of evaluatorOptions) {
    const val = await opt.getAttribute('value');
    if (val && val.trim() !== '') {
      evaluatorValue = val;
      break;
    }
  }
  if (evaluatorValue) {
    await carpentersEvaluationPage.selectEvaluator(evaluatorValue);
  }

  // Step 9: Rate all questions with rating 3 (Meets Expectations)
  await carpentersEvaluationPage.rateAllQuestions(3);

  // Step 10: Fill remarks
  const remarksText = 'E2E test submission - automated test';
  await carpentersEvaluationPage.fillRemarks(remarksText);

  // Step 11: Verify submit button is enabled
  expect(await carpentersEvaluationPage.isSubmitDisabled()).toBe(false);

  // Step 12: Submit the form
  await carpentersEvaluationPage.submit();

  // Step 13: Wait for success screen
  await carpentersEvaluationPage.waitForSuccess();

  // Step 14: Verify success screen shows weighted score
  await expect(page.locator('.success-screen')).toBeVisible();
  const scoreText = await page.locator('.success-screen').textContent();
  expect(scoreText).toBeTruthy();

  // Step 15: Database verification — wait for server-side processing
  await page.waitForTimeout(2000);

  const evaluation = await getLatestEvaluationByStaffId(staffId);
  expect(evaluation).not.toBeNull();
  expect(evaluation.FormType).toBe('CARPENTER');
  expect(evaluation.SkillSet).toBe(expectedLevel.toUpperCase());
  expect(evaluation.WeightedScore).toBeDefined();
  expect(evaluation.WeightedScore).not.toBeNull();

  // Verify q1-qN are all 3 (the rating we selected)
  for (let i = 1; i <= expectedQuestions; i++) {
    expect(evaluation[`q${i}`]).toBe(3);
  }

  // Verify remarks contains our test text
  expect(evaluation.Remarks).toContain('E2E test submission');

  // Verify SubmittedAt is not null
  expect(evaluation.SubmittedAt).not.toBeNull();
});
