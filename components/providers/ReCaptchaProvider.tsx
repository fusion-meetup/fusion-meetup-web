import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const ReCaptchaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!recaptchaSiteKey) return <>{children}</>;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
};
