import { LitElement, css, html } from 'lit';

export class HelloWorld extends LitElement {
  static override styles = css`
    h1 {
      font-size: 3rem;
    }
  `;

  static override properties = {
    name: { type: String },
  };

  declare name?: string;

  override render() {
    return html`
      <div>
        <h1>Hello, world~ ${this.name ?? 'unknown'}</h1>
        <p>This is Lit SSR.</p>
      </div>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
