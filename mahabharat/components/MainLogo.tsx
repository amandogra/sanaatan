
import { JSX } from "preact";

export function MainLogo(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <a href="/" class="main-logo">
      <span class="main-logo_upper">notes from</span>
      <span class="main-logo_lower">Mahabharat</span>
    </a>
  );
}
