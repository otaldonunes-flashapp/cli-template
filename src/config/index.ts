import type { Clerc } from "clerc";

export default function configureCli(cliInstance: Clerc<{}, {}>) {
    const settings = {
        CLI_NAME: process.env.CLI_NAME ?? "",
        CLI_DESCRIPTION: process.env.CLI_DESCRIPTION ?? "",
        CLI_VERSION: process.env.CLI_VERSION ?? "",
      };
      return cliInstance
        .name(settings.CLI_NAME)
        .scriptName(settings.CLI_NAME)
        .description(settings.CLI_DESCRIPTION)
        .version(settings.CLI_VERSION);
  }