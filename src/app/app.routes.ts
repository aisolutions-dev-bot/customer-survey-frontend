import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'survey/:customer_id/project/:project_id',
    loadComponent: () =>
      import('./survey-form/survey-form.component').then(
        (m) => m.SurveyFormComponent
      ),      
  },

  // New internal staff evaluation survey
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type',
    loadComponent: () => import('./evaluation-form/evaluation-form.component').then(
      m => m.EvaluationFormComponent),
  },

  //// keep this last as a catch-all or root route
  // path: '', loadComponent: () => import('./survey-form/survey-form.component').then(m => m.SurveyFormComponent) }
];
