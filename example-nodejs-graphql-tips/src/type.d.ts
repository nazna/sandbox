declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_CONFIG_ENV?: string;
      }
    }
  }
}
