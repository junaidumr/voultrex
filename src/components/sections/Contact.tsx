"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setSubmitError(data.error ?? "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please email us at info@voultrex.com.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-accent-cyan/30 focus:outline-none";

  return (
    <section id="contact" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Contact"
              title="Let's build something extraordinary"
              description="Ready to start your next project? Reach out and let's discuss how we can help you scale."
            />

            <div className="mt-10 space-y-6">
              <a
                href="mailto:info@voultrex.com"
                className="group flex items-center gap-4"
              >
                <div className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:border-accent-cyan/30">
                  <svg className="h-5 w-5 text-accent-cyan/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted">Email</div>
                  <div className="text-sm font-medium text-foreground">
                    info@voultrex.com
                  </div>
                </div>
              </a>

              <a href="tel:+925112345678" className="group flex items-center gap-4">
                <div className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:border-accent-cyan/30">
                  <svg className="h-5 w-5 text-accent-cyan/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted">Phone · Islamabad</div>
                  <div className="text-sm font-medium text-foreground">
                    +92 51 234 5678
                  </div>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/voultrex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/company/voultrex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  aria-live="polite"
                  className="glass-strong flex min-h-[400px] flex-col items-center justify-center rounded-3xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2,
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-emerald/20"
                  >
                    <svg
                      className="h-8 w-8 text-accent-emerald"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;ll get back to you within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="glass-strong space-y-4 rounded-3xl p-8"
                  noValidate
                >
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputClasses}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputClasses}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <label htmlFor="contact-company" className="sr-only">
                    Company (optional)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className={inputClasses}
                    autoComplete="organization"
                  />

                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Tell us about your project
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your project"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClasses} resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-400" role="alert">
                      {submitError}
                    </p>
                  )}

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {loading ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      "Send Message"
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
