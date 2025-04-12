import assert from 'node:assert';
import { describe, test } from 'node:test';
import { base32encode } from './base32.js';

describe('encode', () => {
  test('empty string', () => {
    // arrange
    const input = '';

    // assert
    assert.equal('', base32encode(input));
  });

  test('basic string', () => {
    // arrange
    const input = 'The quick brown fox jumps over the lazy dog.';

    // assert
    assert.equal('AHM6A83HENMP6TS0C9S6YXVE41K6YY10D9TPTW3K41QQCSBJ41T6GS90DHGQMY90CHQPEBG=', base32encode(input));
  });
});
