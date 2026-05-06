import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Carpenters Evaluation Form.
 *
 * Encapsulates all interactions with the carpenter evaluation form,
 * providing a clean, reusable interface for E2E tests.
 *
 * Selectors are based on semantic CSS classes from
 * carpenters-eval-form.component.html to remain resilient to structural changes.
 */
export class CarpentersEvaluationPage {
  readonly page: Page;

  // Core elements
  readonly submitButton: Locator;
  readonly successScreen: Locator;
  readonly errorMessage: Locator;
  readonly remarkTextarea: Locator;
  readonly progressFill: Locator;

  // Level selection
  readonly levelSection: Locator;

  // Question cards
  readonly questionCards: Locator;

  constructor(page: Page) {
    this.page = page;

    // Core elements
    this.submitButton = page.locator('.submit-button');
    this.successScreen = page.locator('.success-screen');
    this.errorMessage = page.locator('.error-message').first();
    this.remarkTextarea = page.locator('textarea[name="remark"]');
    this.progressFill = page.locator('.progress-fill');

    // Level selection
    this.levelSection = page.locator('.carpenter-level-section');

    // Question cards
    this.questionCards = page.locator('.question-card');
  }

  /**
   * Navigate to the carpenters evaluation form.
   * @param groupId - Optional group_id query parameter for group evaluation mode.
   */
  async navigate(groupId?: number): Promise<void> {
    const url = groupId
      ? `/carpenters-evaluation?group_id=${groupId}`
      : '/carpenters-evaluation';
    await this.page.goto(url);
    // Wait for the form container to be rendered
    await this.page.locator('.evaluation-container').waitFor({ state: 'visible' });
  }

  /**
   * Select the carpenter level (junior, journeyman, or senior).
   * If level is pre-selected and locked (group evaluation mode), this is a no-op.
   * @param level - The carpenter level to select.
   */
  async selectCarpenterLevel(level: 'junior' | 'journeyman' | 'senior'): Promise<void> {
    // Check if level is already locked (group evaluation mode)
    const isLocked = await this.isLevelLocked();
    if (isLocked) {
      // Level is pre-selected — just wait for questions to load
      await this.questionCards.first().waitFor({ state: 'visible', timeout: 10000 });
      return;
    }

    // Normal mode: click the level card by matching the title text
    const levelOption = this.page.locator('.level-option').filter({
      has: this.page.locator('.level-title'),
      hasText: new RegExp(level, 'i'),
    });
    await levelOption.locator('.level-card').click();

    // Wait for questions to appear
    await this.questionCards.first().waitFor({ state: 'visible', timeout: 10000 });
  }

  /**
   * Check if the carpenter level is pre-selected and locked (group evaluation mode).
   * @returns true if level selection is locked.
   */
  async isLevelLocked(): Promise<boolean> {
    const lockNotice = this.page.locator('.lock-notice');
    return lockNotice.isVisible().catch(() => false);
  }

  /**
   * Get the pre-selected carpenter level from the page (group evaluation mode).
   * Falls back to checking the lock notice heading if level is locked.
   */
  async getSelectedLevel(): Promise<string> {
    // Check for selected level via the .selected class on .level-option
    const selectedOption = this.page.locator('.level-option.selected .level-title');
    const text = await selectedOption.textContent().catch(() => '');
    const lower = text.toLowerCase();
    if (lower.includes('junior')) return 'junior';
    if (lower.includes('journeyman')) return 'journeyman';
    if (lower.includes('senior')) return 'senior';

    // Fallback: check lock notice text
    const lockNotice = this.page.locator('.lock-notice');
    if (await lockNotice.isVisible().catch(() => false)) {
      // Level is locked — try to read from heading
      const heading = this.page.locator('.carpenter-level-section h3, .carpenter-level-section h4').first();
      const headingText = await heading.textContent().catch(() => '');
      if (headingText.toLowerCase().includes('junior')) return 'junior';
      if (headingText.toLowerCase().includes('journeyman')) return 'journeyman';
      if (headingText.toLowerCase().includes('senior')) return 'senior';
    }

    return 'unknown';
  }

  /**
   * Select a staff member from the staff ID dropdown.
   * Targets the first .info-item select (staff ID field).
   * @param staffId - The staff ID value to select.
   */
  async selectStaff(staffId: string): Promise<void> {
    const staffSelect = this.page.locator('.info-item').first().locator('select.info-select');
    await staffSelect.selectOption({ value: staffId });
  }

  /**
   * Select a project from the project dropdown.
   * Targets the second .info-item select (project ID field).
   * @param projectId - The project ID value to select.
   */
  async selectProject(projectId: string): Promise<void> {
    const projectSelect = this.page.locator('.info-item').nth(1).locator('select.info-select');
    await projectSelect.selectOption({ value: projectId });
  }

  /**
   * Select a department from the department/role dropdown.
   * Targets the third .info-item select (department field).
   * @param departmentId - The department ID value to select.
   */
  async selectDepartment(departmentId: string): Promise<void> {
    const deptSelect = this.page.locator('.info-item').nth(2).locator('select.info-select');
    await deptSelect.selectOption({ value: departmentId });
  }

  /**
   * Select an evaluator from the evaluator ID dropdown.
   * @param evaluatorId - The evaluator ID value to select.
   */
  async selectEvaluator(evaluatorId: string): Promise<void> {
    const evaluatorSelect = this.page.locator('.evaluator-select');
    await evaluatorSelect.selectOption({ value: evaluatorId });
  }

  /**
   * Rate a specific question with the given rating (1-5).
   * Clicks the smiley button with class .smiley-button-{rating} within the Nth question card.
   * @param questionIndex - Zero-based index of the question card.
   * @param rating - Rating value from 1 to 5.
   */
  async rateQuestion(questionIndex: number, rating: 1 | 2 | 3 | 4 | 5): Promise<void> {
    const questionCard = this.questionCards.nth(questionIndex);
    const smileyButton = questionCard.locator(`.smiley-button-${rating}`);
    await smileyButton.click();
  }

  /**
   * Rate all visible questions with the same rating.
   * Iterates through each question card and clicks the smiley button for the given rating.
   * @param rating - Rating value from 1 to 5.
   */
  async rateAllQuestions(rating: 1 | 2 | 3 | 4 | 5): Promise<void> {
    const count = await this.questionCards.count();
    for (let i = 0; i < count; i++) {
      await this.rateQuestion(i, rating);
    }
  }

  /**
   * Fill the remarks textarea with the given text.
   * @param text - The remark text to enter.
   */
  async fillRemarks(text: string): Promise<void> {
    await this.remarkTextarea.fill(text);
  }

  /**
   * Click the submit button to submit the evaluation.
   * Waits for the button to be enabled before clicking.
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Wait for the success screen to become visible after submission.
   * @returns A promise that resolves when .success-screen is visible.
   */
  async waitForSuccess(): Promise<void> {
    await this.successScreen.waitFor({ state: 'visible' });
  }

  /**
   * Get the number of visible question cards on the page.
   * @returns The count of .question-card elements.
   */
  async getQuestionCount(): Promise<number> {
    return this.questionCards.count();
  }

  /**
   * Get the error message text if the error message element is visible.
   * @returns The error message text, or empty string if not visible.
   */
  async getErrorMessage(): Promise<string> {
    const isVisible = await this.errorMessage.isVisible().catch(() => false);
    if (isVisible) {
      return this.errorMessage.textContent().then((t) => t?.trim() ?? '');
    }
    return '';
  }

  /**
   * Check if the submit button is disabled.
   * @returns true if the submit button has the disabled attribute, false otherwise.
   */
  async isSubmitDisabled(): Promise<boolean> {
    return this.submitButton.isDisabled();
  }
}
