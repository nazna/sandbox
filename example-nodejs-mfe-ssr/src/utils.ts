import { JSXNode } from 'hono/jsx';

const isTextNode = (input: JSXNode) => {
  return typeof input.tag === 'string' && input.children.every((child) => typeof child === 'string');
};

const isFunctionNode = (input: JSXNode) => {
  if (typeof input.tag === 'function') {
    console.log(input.tag.call(null, { ...input.props, children: input.children }));
  }
  return typeof input.tag === 'function';
};

export const serialize = (input: JSXNode) => {
  if (isTextNode(input)) {
    return input;
  }

  if (isFunctionNode(input)) {
    serialize(input.tag.call(null, { ...input.props, children: input.children }));
  }

  for (const child of input.children) {
    serialize(child);
  }

  return input;
};

export const deserialize = () => {};
