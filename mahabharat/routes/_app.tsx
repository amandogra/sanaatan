import { type PageProps } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mahabharat</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Nav />
        <Component />
      </body>
    </html>
  );
}
