'use client';

import React, { useEffect, useMemo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ContactField } from "@/types/content";
import "./ContactForm.css";

type Props = {
  fields: ContactField[];
};

type FormState = Record<string, string>;

const ContactForm: React.FC<Props> = ({ fields }) => {
  const [formState, setFormState] = useState<FormState>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaField = useMemo(
    () => fields.find((field) => field.type === "recaptcha"),
    [fields]
  );
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    setMessage("");
  }, [formState]);

  const handleChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: fields.map((field) => ({
            ...field,
            value:
              field.type === "recaptcha"
                ? recaptchaToken
                : formState[field.name] ?? "",
          })),
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.message || "Failed to send message");
      }

      setStatus("success");
      setMessage("Message sent. We will get back to you soon.");
      setFormState({});
      setRecaptchaToken(null);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Unable to send the message right now. Please try again or email us directly."
      );
    }
  };

  return (
    <form className="contact-form space-y-4" onSubmit={handleSubmit}>
      {fields
        .filter((field) => field.type !== "recaptcha")
        .map((field) => (
          <div key={field.name} className="form-field">
            <label className="form-label" htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-red-300">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                className="form-control"
                value={formState[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "choice" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="form-control"
                value={formState[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">Select...</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type === "email" ? "email" : "text"}
                required={field.required}
                className="form-control"
                value={formState[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}

      {recaptchaField && siteKey && (
        <div className="form-field">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={(token: string | null) => setRecaptchaToken(token)}
          />
        </div>
      )}

      <button
        type="submit"
        className="submit-btn"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
