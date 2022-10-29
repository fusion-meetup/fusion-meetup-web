import { SanityDocumentBase } from "./Sanity";

export interface SanityHomepageContent extends SanityDocumentBase {
  showAlert?: boolean;
  alertContent?: any;
}

export interface HomepageContent {
  key: string;
  showAlert: boolean;
  alertContent: any;
}
