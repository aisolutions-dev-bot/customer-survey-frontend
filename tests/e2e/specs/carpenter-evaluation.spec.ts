import { test, expect } from '../fixtures/test-fixtures';
import { getLatestEvaluationByStaffId } from '../../support/db-verify';

test('should submit carpenter evaluation and verify in database @smoke', async ({
  carpentersEvaluationPage,
  page,
}) => {
  // Step 1: Navigate to the carpenter evaluation form
  await carpentersEvaluationPage.navigate(28001);

  // Step 2: Verify form loaded — check for the evaluation container and header
  await expect(page.locator('.evaluation-container')).toBeVisible();
  const header = page.locator('h1, h2, .form-title, .page-title').first();
  await expect(header).toBeVisible();

  // Step 3: Select junior carpenter level
  await carpentersEvaluationPage.selectCarpenterLevel('junior');

  // Step 4: Verify 9 questions loaded for junior level
  const questionCount = await carpentersEvaluationPage.getQuestionCount();
  expect(questionCount).toBe(9);

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
  expect(evaluation.SkillSet).toBe('JUNIOR');
  expect(evaluation.WeightedScore).toBeDefined();
  expect(evaluation.WeightedScore).not.toBeNull();

  // Verify q1-q9 are all 3 (the rating we selected)
  expect(evaluation.q1).toBe(3);
  expect(evaluation.q2).toBe(3);
  expect(evaluation.q3).toBe(3);
  expect(evaluation.q4).toBe(3);
  expect(evaluation.q5).toBe(3);
  expect(evaluation.q6).toBe(3);
  expect(evaluation.q7).toBe(3);
  expect(evaluation.q8).toBe(3);
  expect(evaluation.q9).toBe(3);

  // Verify remarks contains our test text
  expect(evaluation.Remarks).toContain('E2E test submission');

  // Verify SubmittedAt is not null
  expect(evaluation.SubmittedAt).not.toBeNull();
});
