import { Routes } from '@angular/router';

function toEvaluation(queryParams: Record<string, string>): string {
  const qs = Object.entries(queryParams)
    .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
    .join('&');
  return qs ? `/evaluation?${qs}` : '/evaluation';
}

export const routes: Routes = [
  // Customer satisfaction survey (unchanged)
  {
    path: 'survey/:customer_id/project/:project_id',
    loadComponent: () =>
      import('./survey-form/survey-form.component').then((m) => m.SurveyFormComponent),
  },

  // Generic evaluation form — handles ?uniq_id= and ?group_id=
  {
    path: 'evaluation',
    loadComponent: () =>
      import('./evaluation-form-component/evaluation-form.component').then(
        (m) => m.EvaluationFormComponent,
      ),
  },

  // ─── Legacy param routes (deprecated, keep functional — cannot redirect without uniq_id) ─────

  { path: 'carpenters-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent) },
  { path: 'bs-project-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/bs-project-evaluation-form/bs-proj-eval-form.component').then((m) => m.BSProjectEvaluationFormComponent) },
  { path: 'bs-tender-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/bs-tender-evaluation-form/bs-tender-eval-form.component').then((m) => m.BSTenderEvaluationFormComponent) },
  { path: 'drafter-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/drafter-evaluation-form/drafter-eval-form.component').then((m) => m.DrafterEvaluationFormComponent) },
  { path: 'operation-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/operation-evaluation-form/operation-eval-form.component').then((m) => m.OperationEvaluationFormComponent) },
  { path: 'ceiling-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/ceiling-evaluation-form/ceiling-eval-form.component').then((m) => m.CeilingEvaluationFormComponent) },
  { path: 'spraypaint-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/spraypaint-evaluation-form/spraypaint-eval-form.component').then((m) => m.SpraypaintEvaluationFormComponent) },
  { path: 'metal-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/metal-evaluation-form/metal-eval-form.component').then((m) => m.MetalEvaluationFormComponent) },
  { path: 'metalcut-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/metalcut-evaluation-form/metalcut-eval-form.component').then((m) => m.MetalCutEvaluationFormComponent) },
  { path: 'me-project-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/me-project-evaluation-form/me-project-eval-form.component').then((m) => m.MeProjectEvaluationFormComponent) },
  { path: 'team-d-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/team-d-evaluation-form/team-d-eval-form.component').then((m) => m.TeamDEvaluationFormComponent) },
  { path: 'pm-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator', loadComponent: () => import('./legacy/pm-evaluation-form/pm-eval-form.component').then((m) => m.PMEvaluationFormComponent) },
  { path: 'evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator', loadComponent: () => import('./legacy/evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent) },
  { path: 'evaluation/:staff_id/project/:project_id/role/:role_type', loadComponent: () => import('./legacy/evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent) },

  // ─── Simple legacy routes — redirect to /evaluation WITH all query params (uniq_id, group_id) ─

  { path: 'carpenters-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'bs-project-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'bs-tender-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'drafter-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'operation-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'ceiling-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'spraypaint-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'metal-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'metalcut-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'me-project-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'team-d-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },
  { path: 'pm-evaluation', redirectTo: ({ queryParams }) => toEvaluation(queryParams) },

  // Default: redirect to /evaluation
  {
    path: '',
    redirectTo: 'evaluation',
    pathMatch: 'full',
  },
];
