import logo from "@/assets/mahara-logo.png";

const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Mahara" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-primary-foreground/50 font-body leading-relaxed">
            Empowering Tunisia's workforce with technology, trust, and opportunity.
          </p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "API", "Integrations"] },
          { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40 font-body">© 2026 Mahara. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors font-body">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;