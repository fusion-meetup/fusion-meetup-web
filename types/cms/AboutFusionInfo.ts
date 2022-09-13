import { SanityDocumentBase } from "./Sanity";

export interface SanityAboutFusionInfo extends SanityDocumentBase {
  title?: string;
  description?: any;
  quote?: any;
  buttonText?: string;
}

export interface AboutFusionInfo {
  key: string;
  title: string;
  description: any;
  quote: any;
  buttonText: string;
}
