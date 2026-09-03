// Version registry for the BS-Project scorecard. This is the audit trail.
//
// To publish a new version:
//   1. Copy the current active question file to bs-proj-eval-questions.vN.ts,
//      rename its export to BS_PROJECT_STANDARD_QUESTIONS_VN, and add a frozen
//      header comment (see bs-proj-eval-questions.v1.ts for the pattern).
//   2. Put the new question content into bs-proj-eval-questions.ts (the file the
//      live form imports) and bump BS_PROJECT_ACTIVE_VERSION below.
//   3. Set effectiveTo on the previous entry, add a new entry with effectiveFrom
//      = today and changeNotes describing exactly what changed and why.
// Never edit a frozen vN file or a past registry entry after it ships — insert a
// new version instead, mirroring the insert-only audit pattern used elsewhere in
// this codebase (see UserAuditTrail / WhatsappAuditLog in ai-solutions-organization-api).
//
// `version` here must match the `questionSetVersion` value the backend stamps on
// m17EvaluationRatings (EvaluationRating.java) at submission time, so a historical
// rating can always be resolved back to the exact question wording it was scored
// against, even after the live form moves on.
import { QuestionDefinition } from './bs-proj-eval-questions';
import { BS_PROJECT_STANDARD_QUESTIONS as BS_PROJECT_STANDARD_QUESTIONS_V2 } from './bs-proj-eval-questions';
import { BS_PROJECT_STANDARD_QUESTIONS_V1 } from './bs-proj-eval-questions.v1';

export interface QuestionSetVersionMeta {
  version: string;
  formType: 'BS-PROJECT';
  effectiveFrom: string | 'UNKNOWN'; // ISO date (YYYY-MM-DD) this version went live
  effectiveTo: string | null; // ISO date superseded; null = currently active
  changeNotes: string;
  questions: QuestionDefinition[];
}

export const BS_PROJECT_QUESTION_VERSIONS: QuestionSetVersionMeta[] = [
  {
    version: 'v1',
    formType: 'BS-PROJECT',
    effectiveFrom: 'UNKNOWN', // original go-live date not recorded anywhere in this repo — fill in if known, otherwise leave as UNKNOWN rather than guessing
    effectiveTo: '2026-09-03',
    changeNotes:
      'Original 7-question scorecard. Documental control was 2 questions ' +
      '(Internal 10% + External 10%). Customer Service/Relations was 1 question ' +
      '(Responsive to Enquiries).',
    questions: BS_PROJECT_STANDARD_QUESTIONS_V1
  },
  {
    version: 'v2',
    formType: 'BS-PROJECT',
    effectiveFrom: '2026-09-03',
    effectiveTo: null,
    changeNotes:
      'Documental control combined into 1 question (10%), dropping the Internal/' +
      'External split. Customer Service/Relations gained a new second question: ' +
      '"Collaboration with Other Teams (Internal)" (10%). Per-slot weights unchanged ' +
      '(15/35/10/10/10/10/10) so historical weighted scores remain numerically ' +
      'comparable across versions — only question wording/meaning changed for the ' +
      'last 3 slots.',
    questions: BS_PROJECT_STANDARD_QUESTIONS_V2
  }
];

export const BS_PROJECT_ACTIVE_VERSION = 'v2';

export function getBsProjectQuestionSet(version: string): QuestionSetVersionMeta | undefined {
  return BS_PROJECT_QUESTION_VERSIONS.find(v => v.version === version);
}

export function getActiveBsProjectQuestionSet(): QuestionSetVersionMeta {
  const active = getBsProjectQuestionSet(BS_PROJECT_ACTIVE_VERSION);
  if (!active) {
    throw new Error(`BS_PROJECT_ACTIVE_VERSION "${BS_PROJECT_ACTIVE_VERSION}" not found in BS_PROJECT_QUESTION_VERSIONS`);
  }
  return active;
}
