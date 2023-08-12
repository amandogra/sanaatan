export default {
  render() {
    return `${this.css()}
                ${this.html()}`;
  },

  html() {
    return ` <header>
    <a href="/" class="logo">
      <span class="a11y">Om</span>
      <picture>
        <source srcset='/images/om_red_light.svg' media="(prefers-color-scheme: dark)" />
        <img src='/images/om_red_dark.svg' alt="" />
      </picture>
    </a>
    <nav>
      <ul>
        <li>
          <a href="/book.html">index</a>
        </li>
        <li>
          <a href="/about.html">about</a>
        </li>
      </ul>
    </nav>
  </header>
`;
  },

  css() {
    return `
      <style>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.corner {
  width: 3em;
  height: 3em;
}

.corner a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.corner img {
  width: 2em;
  height: 2em;
  object-fit: contain;
}

nav {
  display: flex;
  justify-content: center;
  /* --background: rgba(255, 255, 255, 0.7); */
}

header .logo img {
  width: 2em;
  height: 2em;
  display: block;
}

nav ul {
  position: relative;
  padding: 0;
  margin: 0;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  /* background: var(--background); */
  /* background-size: contain; */
}

nav ul li {
  position: relative;
  height: 100%;
}

nav ul li.active::before {
  --size: 6px;
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: calc(50% - var(--size));
  border: var(--size) solid transparent;
  border-top: var(--size) solid var(--accent-color);
}

nav a {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 0.8rem;
  font-family: var(--font-sans-serif);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s linear;
}

.a11y {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
}

      </style>
    `;
  }
};
