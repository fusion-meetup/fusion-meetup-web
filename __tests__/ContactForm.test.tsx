import { render } from "@testing-library/react";
import axios from "axios";

import { ContactForm } from "../components/organisms/ContactForm";

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
  return render(<ContactForm />);
};

describe("ContactForm", () => {
  it("should render", async () => {
    const { asFragment } = renderContactForm();

    expect(asFragment()).toMatchSnapshot();
  });
});
