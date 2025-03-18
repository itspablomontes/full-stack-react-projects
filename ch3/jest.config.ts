import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  globalSetup: "<rootDir>/src/test/globalSetup.ts",
  globalTeardown: "<rootDir>/src/test/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupFileAfterEnv.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
