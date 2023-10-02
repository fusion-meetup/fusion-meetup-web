import { SanityDocumentBase } from "./Sanity";

export interface SanityAboutFusionInfo extends SanityDocumentBase {
  title?: string;
  description?: any;
  quote?: any;
  sponsor?: any;
  buttonText?: string;
}

export interface AboutFusionInfo {
  key: string;
  title: string;
  description: any;
  quote: any;
  sponsor: any;
  buttonText: string;
}
