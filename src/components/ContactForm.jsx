import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio-gmail", "template_portfolio", form.current, {
        publicKey: "uYDCRAEZa7g3Xb_Zi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsMessageSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
        }
      );
  };

  return (
    <>
      {isError && (
        <div className="text-lg mb-4 font-bold text-red-500 opacity-80 bg-content-vivid px-6 py-1 rounded-full w-fit">
          Something went wrong. Please try again later.
        </div>
      )}
      {isMessageSent && (
        <div className="text-lg mb-4 font-bold text-bkg-mate opacity-80 bg-content-mate px-6 py-1 rounded-full w-fit">
          Thank you for the message. I will reply shortly.
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="mb-6">
        <div className="mb-6">
          <label htmlFor="user_name" className="block mb-2 text-lg font-light">
            Name
          </label>
          <input
            id="user_name"
            name="user_name"
            className="block w-full lg:w-2/3 xl:w-1/2 p-2.5 text-lg font-light rounded-sm border-2 border-content-mate focus:border-content-vivid bg-bkg-mate focus:outline-none"
            placeholder="Please enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="user_email" className="block mb-2 text-lg font-light">
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            className="block w-full lg:w-2/3 xl:w-1/2 p-2.5 text-lg font-light rounded-sm border-2 border-content-mate focus:border-content-vivid bg-bkg-mate focus:outline-none"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block mb-2 text-lg font-light">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full p-2.5 text-lg font-light rounded-sm border-2 border-content-mate focus:border-content-vivid bg-bkg-mate focus:outline-none"
            placeholder="Let me know what do you want to talk about"
            required
          />
        </div>
        <div className="mb-10">
          <label htmlFor="message" className="block mb-2 text-lg font-light">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block w-full p-2.5 text-lg font-light rounded-sm border-2 border-content-mate focus:border-content-vivid bg-bkg-mate focus:outline-none"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button
          key="submit"
          type="submit"
          value="Send"
          disabled={isMessageSent || isError}
          className={`block rounded-sm py-2.5 w-fit xl:w-1/4 text-xl font-normal border-2 border-content-vivid transition-colors duration-500 ${
            isMessageSent
              ? "bg-accent-2 text-accent-1 hover:bg-content-mate hover:text-bkg-vivid opacity-70"
              : isError
              ? "hover:bg-bkg-vivd hover:text-content-mate opacity-40"
              : "hover:bg-content-vivid hover:text-bkg-mate"
          }`}
        >
          {isMessageSent ? "SUCCESS!" : "SUBMIT"}
        </button>
      </form>
    </>
  );
}
