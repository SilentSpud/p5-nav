import "../styles/index.scss";
import Link from "next/link";
import type { AppProps } from "next/app";
import { Nav } from "react-bootstrap";

const NavLink = ({ href, children, disabled }: { href: string; children: React.ReactNode | React.ReactNode[]; disabled?: boolean }) => (
  <Link href={href} passHref>
    <Nav.Link disabled={disabled ?? false}>{children}</Nav.Link>
  </Link>
);

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="page">
    <Nav variant="tabs" className="bg-dark" navbar justify>
      <NavLink href="/persona">Personas</NavLink>
      <NavLink href="/skill" disabled>Skills</NavLink>
      <NavLink href="/calendar">Calendar</NavLink>
      <NavLink href="/confidant">Confidants</NavLink>
      <NavLink href="/negotiation">Negotiation Questions</NavLink>
    </Nav>
    <div className="content">
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
