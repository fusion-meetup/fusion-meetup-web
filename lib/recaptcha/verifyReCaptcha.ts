import axios from "axios";

export const verifyReCaptcha = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY as string | undefined;
  if (!secret) {
    console.error("Missing recaptcha secret key");
    return false;
  }

  const params = { secret, response: token };

  const response = await axios.post<{ success: boolean }>(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    { params }
  );

  return response.data.success;
};
