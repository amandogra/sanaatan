import { JSX } from "preact";
import { MainLogo } from "../components/MainLogo.tsx";

export default function Nav(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
  <nav>
    <div class="container nav-bar">
      <MainLogo />
      <div class="nav-bar__spacer">&nbsp;</div>
      <div class="nav-bar__left">
        <search-trigger class="opacity-on-scroll"></search-trigger>
        <toggle-theme dark-color="black" light-color="white" />
      </div>
    </div>
  </nav>
  );
}

