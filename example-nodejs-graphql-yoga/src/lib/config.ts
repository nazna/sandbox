import { z } from 'zod';

const zschema = z
  .object({
    allowedClientIdentifier: z.string().uuid(),
  })
  .strict();

const json = await import(`../../config/${process.env['NODE_CONFIG_ENV']}.json`, { assert: { type: 'json' } });
const parsed = zschema.parse(json.default);

export default parsed;
