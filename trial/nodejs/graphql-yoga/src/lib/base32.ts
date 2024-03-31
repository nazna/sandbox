// clockwork base32
const BASE32_CLOCKWORK_DIC = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

export function base32encode(target: string): string {
  const input = new TextEncoder().encode(target);

  let output = '';

  let value = 0;
  let offset = 0;

  [...input].forEach((c) => {
    value = (value << 8) | c;
    offset += 8;

    while (offset >= 5) {
      if (offset >= 5) {
        output += BASE32_CLOCKWORK_DIC[(value >>> (offset - 5)) & 31];
        offset -= 5;
      }
    }
  });

  if (offset > 0) {
    output += BASE32_CLOCKWORK_DIC[(value << (5 - offset)) & 31];
  }

  if (output.length % 8 !== 0) {
    output += '='.repeat(8 - (output.length % 8));
  }

  return output;
}

export function base32decode(target: string): string {
  const input = target.toUpperCase().replace(/\s|=/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');

  if (!/^[A-TV-Z0-9]+$/.test(input)) {
    throw new Error('Invalid input');
  }

  const length = input.length;
  const output = new Uint8Array((length * 5) / 8);

  let value = 0;
  let index = 0;
  let offset = 0;

  [...input].forEach((c) => {
    value = (value << 5) | BASE32_CLOCKWORK_DIC.indexOf(c);
    offset += 5;

    if (offset >= 8) {
      output[index++] = (value >>> (offset - 8)) & 255;
      offset -= 8;
    }
  });

  return new TextDecoder().decode(output.buffer);
}
