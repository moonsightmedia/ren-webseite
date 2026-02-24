import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoFull from "@/assets/logo-full-white.png";

const footerLinks = {
  navigation: [
    { label: "Startseite", href: "/" },
    { label: "Das Konzept", href: "/konzept" },
    { label: "Projekte", href: "/projekte" },
    { label: "Transparenz", href: "/transparenz" },
  ],
  hilfe: [
    { label: "Hilfe anfragen", href: "/hilfe-anfragen" },
    { label: "Spenden", href: "/spenden" },
    { label: "Geschichte", href: "/geschichte" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-ren-teal text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <img 
                src={logoFull} 
                alt="REN" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transparente Hilfe, die ankommt. 98% jeder Spende gehen direkt in Projekte.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-ren-burgundy/30 flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary-foreground/70 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hilfe */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Hilfe & Support</h3>
            <ul className="space-y-3">
              {footerLinks.hilfe.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@ren-org.de</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">+49 1514 1474511</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Musterstraße 123<br />
                  10115 Berlin
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ren-burgundy/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} REN – Gemeinsam helfen. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              {footerLinks.rechtliches.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/50 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
