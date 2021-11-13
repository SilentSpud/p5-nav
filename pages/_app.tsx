import "../styles/index.scss";
import Link from "next/link";
import type { AppProps } from "next/app";
import { Nav } from "react-bootstrap";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode | React.ReactNode[] }) => (
  <Link href={href} passHref>
    <Nav.Link>{children}</Nav.Link>
  </Link>
);

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="page">
    <Nav variant="tabs" className="bg-dark" navbar justify>
      <NavLink href="/personas">Personas</NavLink>
      <NavLink href="/skills">Skills</NavLink>
      <NavLink href="/calendar">Calendar</NavLink>
      <NavLink href="/confidants">Confidants</NavLink>
      <NavLink href="/negotiations">Negotiation Questions</NavLink>
    </Nav>
    <div className="content">
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
