import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/config";

const config: Config = {
  content: [
    "./app/**/*.tsx", 
    "../../packages/ui/src/**/*.tsx"
  ],
  presets: [sharedConfig],
};

export default config;
