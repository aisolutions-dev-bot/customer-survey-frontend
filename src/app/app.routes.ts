import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'survey/:customer_id/project/:project_id',
    loadComponent: () =>
      import('./survey-form/survey-form.component').then((m) => m.SurveyFormComponent),
  },

  // Staff evaluation with all parameters including evaluator
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator',
    loadComponent: () =>
      import('./evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent),
  },

  // Staff evaluation without evaluator parameters
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type',
    loadComponent: () =>
      import('./evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent),
  },

  // Staff evaluation without parameters (all fields editable)
  {
    path: 'evaluation',
    loadComponent: () =>
      import('./evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent),
  },

  // Carpenters evaluation with all parameters
  {
    //path: 'carpenters-evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator',
    path: 'carpenters-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent),
  },
  // Carpenters evaluation without parameters (all fields editable)
  {
    path: 'carpenters-evaluation',
    loadComponent: () =>
      import('./carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent),
  },
  // Business Support - Project evaluation with all parameters
  {
   path: 'bs-project-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./bs-project-evaluation-form/bs-proj-eval-form.component').then((m) => m.BSProjectEvaluationFormComponent),
  },
  // Business Support - Project evaluation without parameters (all fields editable)
  {
   path: 'bs-project-evaluation',
    loadComponent: () =>
      import('./bs-project-evaluation-form/bs-proj-eval-form.component').then((m) => m.BSProjectEvaluationFormComponent),
  },
  // Business Support - Tender evaluation with all parameters
  {
   path: 'bs-tender-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./bs-tender-evaluation-form/bs-tender-eval-form.component').then((m) => m.BSTenderEvaluationFormComponent),
  },
  // Business Support - Tender evaluation without parameters (all fields editable)
  {
   path: 'bs-tender-evaluation',
    loadComponent: () =>
      import('./bs-tender-evaluation-form/bs-tender-eval-form.component').then((m) => m.BSTenderEvaluationFormComponent),
  },
  // Business Support - Drafter evaluation with all parameters
  {
   path: 'drafter-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./drafter-evaluation-form/drafter-eval-form.component').then((m) => m.DrafterEvaluationFormComponent),
  },
  // Business Support - Drafter evaluation without parameters (all fields editable)
  {
   path: 'drafter-evaluation',
    loadComponent: () =>
      import('./drafter-evaluation-form/drafter-eval-form.component').then((m) => m.DrafterEvaluationFormComponent),
  },
// Business Support - Operation evaluation with all parameters
  {
   path: 'operation-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    loadComponent: () =>
      import('./operation-evaluation-form/operation-eval-form.component').then((m) => m.OperationEvaluationFormComponent),
  },
  // Business Support - Operation evaluation without parameters (all fields editable)
  {
   path: 'operation-evaluation',
    loadComponent: () =>
      import('./operation-evaluation-form/operation-eval-form.component').then((m) => m.OperationEvaluationFormComponent),
  },

  // keep this last as a catch-all or root route
  {
    path: '',
    loadComponent: () =>
      import('./carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent),
  },
];
