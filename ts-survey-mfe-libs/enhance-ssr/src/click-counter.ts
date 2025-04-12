import enhance from '@enhance/ssr';
import type { EnhanceHtmlFn } from '@enhance/types';

export const ClickCounter = {
  init(el: HTMLElement) {
    el.addEventListener('click', el.click);
  },
  render({ html }: { html: EnhanceHtmlFn }) {
    return html`
      <div>
        <p>Clicked: </p>
        <button type="button">+1</button>
      </div>
    `;
  },
  click() {
    console.log('clicked');
  },
};

const html = enhance({
  bodyContent: true,
  elements: {
    'click-counter': ClickCounter,
  },
});

export const makeClickCounter = () => {
  return html`<click-counter></click-counter>`;
};
