export default class ToggleThemeComponent extends HTMLElement {
  constructor() {
    super();
    this.body = document.body;
    this.darkThemeClassName = 'dark-theme';
    this.localStorageThemeVariable = 'user-theme';
    this.darkColor = this.getAttribute('dark-color') || 'black';
    this.lightColor = this.getAttribute('light-color') || 'white';
    this.mediaDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.userPreferredTheme = this.getLocalStorageUserPreferenceTheme();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        label {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        #darkModeTrigger {
          appearance: none;
          cursor: pointer;
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          border: 1px solid ${this.darkColor};
          border-radius: 50%;
          background: linear-gradient(90deg, ${this.lightColor} 50%, ${this.darkColor} 50%);;
          padding: 0.02rem;
        }
        #darkModeTrigger:checked {
          background: linear-gradient(90deg, ${this.darkColor} 50%,  ${this.lightColor} 50%);
          border-color: ${this.lightColor};
        }
      </style>
      <input type="checkbox" id="darkModeTrigger" name="darkModeTrigger" />
      <label for="darkModeTrigger" class="sr-only">Dark theme<label>
    `;
    this.toggleTrigger = this.shadowRoot.querySelector('#darkModeTrigger');
  }

  connectedCallback() {
    // if the user has a preference, then use that theme
    this.userPreferredTheme
      ? this.toggleDarkTheme(true)
    // else, set the theme based on the current system prefered color
      : this.toggleDarkTheme(this.mediaDarkColorScheme.matches);
    // set the event listener to track change in the system prefered color scheme 
    this.mediaDarkColorScheme.addListener(event => {
      this.toggleDarkTheme(event.matches);
    });
    // set the event listener to track the user preference
    this.toggleTrigger.addEventListener('change', event => {
      this.toggleDarkTheme(event.target.checked);
      this.setLocalStorageUserPreferenceTheme(event.target.checked);
    })
  }

  toggleDarkTheme(isDarkOn) {
    // Add/Remove the 'theme-dark' class from the body element based on isDarkOn boolean
    isDarkOn 
      ? this.body.classList.add(this.darkThemeClassName)
      : this.body.classList.remove(this.darkThemeClassName);
    // Update the label of the checkbox for accessibility
    this.shadowRoot.querySelector('label').innerText = isDarkOn ? 'Dark theme' : 'Light theme';
    this.toggleTrigger.checked = isDarkOn;
  }

  getLocalStorageUserPreferenceTheme() {
    return window.LocalStorage && window.LocalStorage.getItem(this.localStorageThemeVariable);
  }

  setLocalStorageUserPreferenceTheme(value) {
    window.LocalStorage && window.LocalStorage.setItem(this.localStorageThemeVariable, value);
  }
}

if (!window.customElements.get('toggle-theme')) {
  window.customElements.define('toggle-theme', ToggleThemeComponent);
}
