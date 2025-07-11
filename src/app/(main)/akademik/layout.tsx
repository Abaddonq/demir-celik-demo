import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Layout</title>
      </head>
      <body>
        <header>
          <h1>Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
