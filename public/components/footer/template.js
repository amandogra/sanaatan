export default {
  render(footer) {
    return `${this.css(footer)}
                ${this.html(footer)}`;
  },

  html(footer) {
    return ` 
    <footer>
      <p>
        &copy; ${footer.copyrightYear} All rights reserved with
        <a href="https://amandogra.com">Aman Dogra</a>
      </p>
    </footer>
`;
  },

  css() {
    return `
      <style>
        footer p {
          color: var(--secondary-color);
          margin: 0;
          padding: 1rem;
        }
      </style>
    `;
  }
};
