import { Routes } from '@angular/router';

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

  // ─── Legacy form routes (deprecated — show banner, still functional) ──────

  {
    path: 'carpenters-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/carpenters-evaluation-form/carpenters-eval-form.component').then(
        (m) => m.CarpentersEvaluationFormComponent,
      ),
  },
  {
    path: 'carpenters-evaluation',
    loadComponent: () =>
      import('./legacy/carpenters-evaluation-form/carpenters-eval-form.component').then(
        (m) => m.CarpentersEvaluationFormComponent,
      ),
  },

  {
    path: 'bs-project-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/bs-project-evaluation-form/bs-proj-eval-form.component').then(
        (m) => m.BSProjectEvaluationFormComponent,
      ),
  },
  {
    path: 'bs-project-evaluation',
    loadComponent: () =>
      import('./legacy/bs-project-evaluation-form/bs-proj-eval-form.component').then(
        (m) => m.BSProjectEvaluationFormComponent,
      ),
  },

  {
    path: 'bs-tender-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/bs-tender-evaluation-form/bs-tender-eval-form.component').then(
        (m) => m.BSTenderEvaluationFormComponent,
      ),
  },
  {
    path: 'bs-tender-evaluation',
    loadComponent: () =>
      import('./legacy/bs-tender-evaluation-form/bs-tender-eval-form.component').then(
        (m) => m.BSTenderEvaluationFormComponent,
      ),
  },

  {
    path: 'drafter-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/drafter-evaluation-form/drafter-eval-form.component').then(
        (m) => m.DrafterEvaluationFormComponent,
      ),
  },
  {
    path: 'drafter-evaluation',
    loadComponent: () =>
      import('./legacy/drafter-evaluation-form/drafter-eval-form.component').then(
        (m) => m.DrafterEvaluationFormComponent,
      ),
  },

  {
    path: 'operation-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/operation-evaluation-form/operation-eval-form.component').then(
        (m) => m.OperationEvaluationFormComponent,
      ),
  },
  {
    path: 'operation-evaluation',
    loadComponent: () =>
      import('./legacy/operation-evaluation-form/operation-eval-form.component').then(
        (m) => m.OperationEvaluationFormComponent,
      ),
  },

  {
    path: 'ceiling-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/ceiling-evaluation-form/ceiling-eval-form.component').then(
        (m) => m.CeilingEvaluationFormComponent,
      ),
  },
  {
    path: 'ceiling-evaluation',
    loadComponent: () =>
      import('./legacy/ceiling-evaluation-form/ceiling-eval-form.component').then(
        (m) => m.CeilingEvaluationFormComponent,
      ),
  },

  {
    path: 'spraypaint-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/spraypaint-evaluation-form/spraypaint-eval-form.component').then(
        (m) => m.SpraypaintEvaluationFormComponent,
      ),
  },
  {
    path: 'spraypaint-evaluation',
    loadComponent: () =>
      import('./legacy/spraypaint-evaluation-form/spraypaint-eval-form.component').then(
        (m) => m.SpraypaintEvaluationFormComponent,
      ),
  },

  {
    path: 'metal-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/metal-evaluation-form/metal-eval-form.component').then(
        (m) => m.MetalEvaluationFormComponent,
      ),
  },
  {
    path: 'metal-evaluation',
    loadComponent: () =>
      import('./legacy/metal-evaluation-form/metal-eval-form.component').then(
        (m) => m.MetalEvaluationFormComponent,
      ),
  },

  {
    path: 'metalcut-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/metalcut-evaluation-form/metalcut-eval-form.component').then(
        (m) => m.MetalCutEvaluationFormComponent,
      ),
  },
  {
    path: 'metalcut-evaluation',
    loadComponent: () =>
      import('./legacy/metalcut-evaluation-form/metalcut-eval-form.component').then(
        (m) => m.MetalCutEvaluationFormComponent,
      ),
  },

  {
    path: 'me-project-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/me-project-evaluation-form/me-project-eval-form.component').then(
        (m) => m.MeProjectEvaluationFormComponent,
      ),
  },
  {
    path: 'me-project-evaluation',
    loadComponent: () =>
      import('./legacy/me-project-evaluation-form/me-project-eval-form.component').then(
        (m) => m.MeProjectEvaluationFormComponent,
      ),
  },

  {
    path: 'team-d-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/team-d-evaluation-form/team-d-eval-form.component').then(
        (m) => m.TeamDEvaluationFormComponent,
      ),
  },
  {
    path: 'team-d-evaluation',
    loadComponent: () =>
      import('./legacy/team-d-evaluation-form/team-d-eval-form.component').then(
        (m) => m.TeamDEvaluationFormComponent,
      ),
  },

  {
    path: 'pm-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/pm-evaluation-form/pm-eval-form.component').then(
        (m) => m.PMEvaluationFormComponent,
      ),
  },
  {
    path: 'pm-evaluation',
    loadComponent: () =>
      import('./legacy/pm-evaluation-form/pm-eval-form.component').then(
        (m) => m.PMEvaluationFormComponent,
      ),
  },

  // Legacy: old evaluation routes with role params (pre-uniq_id era)
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator',
    loadComponent: () =>
      import('./legacy/evaluation-form/evaluation-form.component').then(
        (m) => m.EvaluationFormComponent,
      ),
  },
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type',
    loadComponent: () =>
      import('./legacy/evaluation-form/evaluation-form.component').then(
        (m) => m.EvaluationFormComponent,
      ),
  },

  // Default: redirect to /evaluation
  {
    path: '',
    redirectTo: 'evaluation',
    pathMatch: 'full',
  },
];
