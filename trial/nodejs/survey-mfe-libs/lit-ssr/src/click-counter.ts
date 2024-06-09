import { LitElement, css, html } from 'lit';

export class ClickCounter extends LitElement {
  static override styles = css`
    p {
      font-weight: bold;
    }
  `;

  static override properties = {
    count: { type: Number, attribute: false },
  };

  declare count: number;

  constructor() {
    super();
    this.count = 0;
  }

  override render() {
    return html`
      <div>
        <p>Clicked: ${this.count}</p>
        <button type="button" @click="${this.increment}">+1</button>
      </div>
    `;
  }

  private increment() {
    this.count += 1;
  }
}

customElements.define('click-counter', ClickCounter);
