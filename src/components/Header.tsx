import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const leftNav = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "AMENITIES", href: "#amenities" },
  { label: "OFFERINGS", href: "#offerings" },
  // { label: "EXPERIENCES", href: "#"},
];

const rightNav = [
  { label: "BOOKINGS", href: "#accommodations" },
  { label: "OFFERS", href: "#accommodations" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-transparent pointer-events-none" />
      <nav className="relative flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Left nav */}
        <ul className="hidden lg:flex items-center gap-5 text-primary-foreground text-xs font-body tracking-widest">
          {leftNav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo center */}
        <a href="#home" className="flex-shrink-0 mx-4 text-primary-foreground font-heading text-2xl tracking-widest">
          PALESSA
        </a>

        {/* Right nav */}
        <div className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-5 text-primary-foreground text-xs font-body tracking-widest">
            {rightNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-palessa-charcoal/95 backdrop-blur-sm px-6 py-6">
          <ul className="flex flex-col gap-4 text-primary-foreground text-sm font-body tracking-widest">
            {[...leftNav, ...rightNav].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#accommodations"
                className="inline-block border border-primary-foreground px-6 py-2 text-xs tracking-widest mt-2"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
