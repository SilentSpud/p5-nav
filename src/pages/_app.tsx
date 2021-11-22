import "../styles/index.scss";
import Link from "next/link";
import type { AppProps } from "next/app";
import { Nav } from "react-bootstrap";
import Head from "next/head";

// Fix for fontawesome
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const NavLink = ({ href, children, disabled }: { href: string; children: React.ReactNode | React.ReactNode[]; disabled?: boolean }) => (
  <Link href={href} passHref>
    <Nav.Link disabled={disabled ?? false}>{children}</Nav.Link>
  </Link>
);

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="page">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Royal Navigator</title>
      <meta name="theme-color" content="#DC3545" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav variant="tabs" className="bg-dark" navbar justify>
      <NavLink href="/persona">Personas</NavLink>
      <NavLink href="/skill" disabled>
        Skills
      </NavLink>
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
