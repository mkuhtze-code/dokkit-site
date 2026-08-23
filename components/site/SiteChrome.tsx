import Link from 'next/link';
import DokkitMark from './DokkitMark';

const links = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function AppLink({ children, className = 'btn btn-steel' }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <Link href="/app" className={className}>{children}</Link>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label="Dokkit home"><DokkitMark /><span>Dokkit</span></Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav-links">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
        <AppLink className="btn btn-steel site-sign-in">Sign in</AppLink>
      </nav>
      <details className="site-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/faq">FAQ</Link><AppLink>Try Dokkit</AppLink></nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-intro">
          <Link href="/" className="site-footer-brand"><DokkitMark /><span>Dokkit</span></Link>
          <p>A personal thinking tool that adapts around you.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <div><strong>Explore</strong><Link href="/how-it-works">How it works</Link><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link></div>
          <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><AppLink className="footer-app-link">Try Dokkit</AppLink></div>
        </div>
      </div>
      <p className="site-copyright">© {new Date().getFullYear()} Dokkit</p>
    </footer>
  );
}
