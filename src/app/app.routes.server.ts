import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'survey/:customer_id/project/:project_id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type',
    renderMode: RenderMode.Client,
  },
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type/evaluator/:evaluator',
    renderMode: RenderMode.Client,
  },
  {
    path: 'carpenters-evaluation/:staff_id/project/:project_id/dept_id/:dept_id/evaluator/:evaluator',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
