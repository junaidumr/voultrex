import { Logo } from "@/components/ui/Logo";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/voultrex",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/voultrex",
  },
  {
    label: "Email",
    href: "mailto:info@voultrex.com",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="sm" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Engineering scalable digital futures from Islamabad to clients
              worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted/60">
            © {currentYear} Voultrex. Islamabad, Pakistan. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted/60">
            <a href="mailto:info@voultrex.com" className="hover:text-muted">
              Privacy inquiries
            </a>
            <span aria-hidden>·</span>
            <a href="mailto:info@voultrex.com" className="hover:text-muted">
              Terms inquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
