export type NodeEnvironment = "test" | "development" | "production";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: NodeEnvironment;
      OPEN_AI_API_KEY?: string;
      OPEN_AI_ORGANIZATION_ID?: string;
      PORT?: string;
      PWD: string;
    }
  }
}

export { };
