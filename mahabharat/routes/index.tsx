import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
  <header>
    <h1 id="siteTitle" class="site-title">
      <span class="site-title_caps">notes from</span>
      <span class="site-title_normal">Mahabharat</span>
    </h1>
    <search-bar class="search-bar-container"></search-bar>
  </header>
  <main>
    <div class="container">

      <ul class="canto-list">
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">01</p>
            <div class="canto-list_item__link___text">
              <h2>Adi Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">02</p>
            <div class="canto-list_item__link___text">
              <h2>Sabha Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">03</p>
            <div class="canto-list_item__link___text">
              <h2>Adi Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">04</p>
            <div class="canto-list_item__link___text">
              <h2>Sabha Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">05</p>
            <div class="canto-list_item__link___text">
              <h2>Adi Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
        <li class="canto-list_item">
          <a href="toc.html" class="canto-list_item__link">
            <p class="canto-list_item__link___number">06</p>
            <div class="canto-list_item__link___text">
              <h2>Sabha Parv</h2>
              <p>Covers the setup for King Janamejay's snake sacrifice.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </main>
  <footer>
    <div class="container">
      <p class="copyright">
        &copy; 2023. All copyrights reserved with
        <a href="https://amandogra.com/">Aman Dogra</a>
      </p>
    </div>
  </footer>
</>
  );
}
