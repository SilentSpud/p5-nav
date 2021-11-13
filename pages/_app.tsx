import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../styles/index.scss";
import Link from "next/link";

import type { AppProps } from "next/app";
import { Nav } from "react-bootstrap";

const NavLink = ({ href, children }: { to: string; children: React.ReactNode | React.ReactNode[] }) => (
  <Link href={href} passHref>
    <Nav.Link>{children}</Nav.Link>
  </Link>
);

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Nav variant="tabs" className="bg-dark" navbar justify>
      <NavLink to="/personas">Personas</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/confidants">Confidants</NavLink>
      <NavLink to="/negotiations">Negotiation Questions</NavLink>
    </Nav>
    <div className="content">
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
