import type { Clerc } from "clerc";

import { registerTestCommand } from "./test";

export default function registerCommands(cliInstance: Clerc<{}, {}>) {
  registerTestCommand(cliInstance);
}
