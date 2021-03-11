/// <reference types="next" />
/// <reference types="next/types/global" />
interface Window {
  gtag(type: 'config', GA_TRACKING_ID: string, { page_path: string })
}