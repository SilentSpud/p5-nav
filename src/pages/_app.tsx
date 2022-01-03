import "../styles/index.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Nav } from "react-bootstrap";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";

const NavLink = ({ href, children, disabled }: { href: string; children: React.ReactNode | React.ReactNode[]; disabled?: boolean; active?: boolean }) => {
  let { pathname } = useRouter();
  if (pathname.indexOf("/") != pathname.lastIndexOf("/")) {
    pathname = pathname.split("/").slice(0, 2).join("/");
  }
  return (
    <Nav.Item>
      <Link href={href} passHref>
        <Nav.Link disabled={disabled ?? false} active={pathname == href}>
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

export const Main = ({ Component, pageProps }: AppProps) => (
  <CookiesProvider>
    <div className="page">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>royal Navigator</title>
        <meta name="theme-color" content="#DC3545" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav variant="tabs" navbar justify as="header">
        <NavLink href="/persona">Personas</NavLink>
        <NavLink href="/skill">Skills</NavLink>
        <NavLink href="/calendar">Calendar</NavLink>
        <NavLink href="/confidant">Confidants</NavLink>
        <NavLink href="/negotiation">Negotiation</NavLink>
      </Nav>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  </CookiesProvider>
);

export default Main;
