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
    path: 'carpenters-evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator',
    loadComponent: () =>
      import('./carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent),
  },

  // Carpenters evaluation without parameters (all fields editable)
  {
    path: 'carpenters-evaluation',
    loadComponent: () =>
      import('./carpenters-evaluation-form/carpenters-eval-form.component').then((m) => m.CarpentersEvaluationFormComponent),
  },

  // keep this last as a catch-all or root route
  {
    path: '',
    loadComponent: () =>
      import('./evaluation-form/evaluation-form.component').then((m) => m.EvaluationFormComponent),
  },
];
