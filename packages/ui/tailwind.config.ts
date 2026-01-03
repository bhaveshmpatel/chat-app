import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/config";

const config: Config = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
