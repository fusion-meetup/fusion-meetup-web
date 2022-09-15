import { SanityDocumentBase } from "./Sanity";

export interface SanityCodeOfConduct extends SanityDocumentBase {
  title?: string;
  content?: any;
  linkText?: string;
}

export interface CodeOfConduct {
  key: string;
  title: string;
  content: any;
  linkText: string;
}
