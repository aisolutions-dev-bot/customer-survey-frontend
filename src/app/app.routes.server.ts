import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
 {
    path: 'survey/:customer_id/project/:project_id',
    renderMode: RenderMode.Client, // don’t prerender param routes
  },
  {
    path: 'evaluation/:staff_id/project/:project_id/role/:role_type',
    renderMode: RenderMode.Client, //  don’t prerender param routes
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender //  keep prerender for static routes
  }
];
