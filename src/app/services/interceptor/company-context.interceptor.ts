import { HttpInterceptorFn } from '@angular/common/http';

/** Query parameter the emailed evaluation link uses to name the company. */
const COMPANY_QUERY_PARAMETER = 'c';

/** Header the survey backend reads the company from. */
const COMPANY_HEADER = 'X-Company-Id';

/**
 * Attaches the company named in the page URL to every outgoing API call.
 *
 * The link that opens this app carries the company as a query parameter, and
 * the backend routes each request to that company's database. Links sent before
 * this existed carry no company, and those requests are forwarded untouched so
 * they keep behaving exactly as they did.
 */
export const companyContextInterceptor: HttpInterceptorFn = (request, next) => {
  const companyId = readCompanyIdFromUrl();

  if (!companyId) {
    return next(request);
  }

  return next(request.clone({ setHeaders: { [COMPANY_HEADER]: companyId } }));
};

/** Reads the company from the browser URL, or null when absent. */
function readCompanyIdFromUrl(): string | null {
  // Server-side rendering has no location to read from, and the initial render
  // cannot know which company's link is being opened.
  if (typeof window === 'undefined') {
    return null;
  }

  const companyId = new URLSearchParams(window.location.search).get(COMPANY_QUERY_PARAMETER);
  return companyId && companyId.trim() ? companyId.trim() : null;
}
