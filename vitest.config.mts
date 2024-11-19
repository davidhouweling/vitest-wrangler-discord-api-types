import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  defineConfig({
    test: {
      typecheck: {
        tsconfig: "tsconfig.test.json",
      },
    },
  }),
  defineWorkersConfig({
    test: {
      poolOptions: {
        workers: {
          wrangler: { configPath: "./wrangler.toml" },
        },
      },
    },
  }),
);
