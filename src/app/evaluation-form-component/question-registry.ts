import { FormQuestion } from '../services/form-questions.service';
import { CARPENTER_LEVELS as CARPENTER_LEVELS_CARPENTER } from '../legacy/models/carpenters-eval-questions';
import { CARPENTER_LEVELS as CEILING_LEVELS } from '../legacy/models/ceiling-eval-questions';
import { CARPENTER_LEVELS as METAL_LEVELS } from '../legacy/models/metal-eval-questions';
import { CARPENTER_LEVELS as METALCUT_LEVELS } from '../legacy/models/metalcut-eval-questions';
import { CARPENTER_LEVELS as SPRAYPAINT_LEVELS } from '../legacy/models/spraypaint-eval-questions';
import { CARPENTER_LEVELS as TEAM_D_LEVELS } from '../legacy/models/team-d-eval-questions';
import { CARPENTER_LEVELS as ME_PROJECT_LEVELS } from '../legacy/models/me-project-eval-questions';
import { BS_PROJECT_STANDARD_QUESTIONS } from '../legacy/models/bs-proj-eval-questions';
import { BS_TENDER_STANDARD_QUESTIONS } from '../legacy/models/bs-tender-eval-questions';
import { DRAFTER_STANDARD_QUESTIONS } from '../legacy/models/drafter-eval-questions';
import { OPERATION_STANDARD_QUESTIONS } from '../legacy/models/operation-eval-questions';
import { PM_STANDARD_QUESTIONS } from '../legacy/models/pm-eval-questions';

interface LegacyQuestion {
  category: { en: string; zh: string };
  weight: number;
  groupCategory?: { en: string; zh: string };
  ratings?: Record<number, { en: string; zh: string }>;
}

function toFormQuestions(defs: LegacyQuestion[]): FormQuestion[] {
  return defs.map((def, idx) => ({
    questionNumber: idx + 1,
    questionnaire: def.category.en,
    questionnaireZh: def.category.zh || null,
    weightedScore: def.weight,
    skillCategory: def.groupCategory?.en ?? '',
    ratings: def.ratings,
  }));
}

function levelsToMap(levels: { id: string; questions: LegacyQuestion[] }[]): Record<string, FormQuestion[]> {
  return Object.fromEntries(
    levels.map(l => [l.id.toUpperCase(), toFormQuestions(l.questions)])
  );
}

export const QUESTION_REGISTRY: Record<string, Record<string, FormQuestion[]>> = {
  'CARPENTER': levelsToMap(CARPENTER_LEVELS_CARPENTER as { id: string; questions: LegacyQuestion[] }[]),
  'CEILING': levelsToMap(CEILING_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'METAL': levelsToMap(METAL_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'METALCUT': levelsToMap(METALCUT_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'SPRAYPAINT': levelsToMap(SPRAYPAINT_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'TEAM-D': levelsToMap(TEAM_D_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'ME-PROJECT': levelsToMap(ME_PROJECT_LEVELS as { id: string; questions: LegacyQuestion[] }[]),
  'BS-PROJECT': { 'STANDARD': toFormQuestions(BS_PROJECT_STANDARD_QUESTIONS as LegacyQuestion[]) },
  'BS-TENDER': { 'STANDARD': toFormQuestions(BS_TENDER_STANDARD_QUESTIONS as LegacyQuestion[]) },
  'DRAFTER': { 'STANDARD': toFormQuestions(DRAFTER_STANDARD_QUESTIONS as LegacyQuestion[]) },
  'OPERATION': { 'STANDARD': toFormQuestions(OPERATION_STANDARD_QUESTIONS as LegacyQuestion[]) },
  'PROJECT-MANAGER': { 'STANDARD': toFormQuestions(PM_STANDARD_QUESTIONS as LegacyQuestion[]) },
};
