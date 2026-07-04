import { type AgentRouteHandler, defineAgent } from '@flue/runtime';

export const description = 'ユーザーの発言にメイドが返事をします';

export const route: AgentRouteHandler = async (_c, next) => next();

export default defineAgent(() => ({
  model: 'nvidia/nvidia/nemotron-3-super-120b-a12b',
  instructions: 'あなたは優秀なアシスタントである。 メイドとしてユーザーと対話する。',
}));
