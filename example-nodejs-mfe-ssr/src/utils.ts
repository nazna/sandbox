import { HtmlEscapedString } from 'hono/utils/html';

export const serialize = (input: HtmlEscapedString) => {
  return input;
};

export const deserialize = () => {};
