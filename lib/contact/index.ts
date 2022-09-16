export type ContactFormType =
  | "general"
  | "talkSubmission"
  | "question"
  | "sponsorship";

export interface ContactFormValues {
  name: string;
  email: string;
  type: ContactFormType;
  message: string;
}

export const contactOptions: { value: ContactFormType; label: string }[] = [
  { value: "general", label: "General" },
  { value: "talkSubmission", label: "Talk Submission" },
  { value: "question", label: "Question" },
  { value: "sponsorship", label: "Sponsorship" },
];
