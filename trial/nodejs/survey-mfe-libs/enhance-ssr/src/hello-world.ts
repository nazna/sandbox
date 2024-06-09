import type { EnhanceElemFn } from '@enhance/types';

export const HelloWorld: EnhanceElemFn = ({ html, state }) => {
  const { name } = state.attrs;

  return html`
    <style scope="component">
      h1 {
        font-size: 3rem;
      }
    </style>
    <div>
      <h1>Hello, world~ ${name ?? 'unknown'}</h1>
    </div>
  `;
};
