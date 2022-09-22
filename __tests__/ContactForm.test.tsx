import { render } from "@testing-library/react";
import axios from "axios";

import { ContactForm } from "../components/organisms/ContactForm";
import { ReCaptchaProvider } from "../components/providers/ReCaptchaProvider";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("next/router", () => ({
  useRouter: () => ({
    isReady: true,
    query: { t: "talkSubmission" },
  }),
}));

mockedAxios.get.mockImplementation(() => Promise.resolve(true));

const renderContactForm = () => {
  return render(
    <ReCaptchaProvider>
      <ContactForm />
    </ReCaptchaProvider>
  );
};

describe("ContactForm", () => {
  it("should render", async () => {
    const { findByText } = renderContactForm();

    expect(
      await findByText("This contact form goes directly to the Fusion team")
    ).toBeInTheDocument();
  });
});
