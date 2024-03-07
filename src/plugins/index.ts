import type { Clerc } from "clerc";

import { helpPlugin } from "@clerc/plugin-help";
import { versionPlugin } from "@clerc/plugin-version";
import { completionsPlugin } from "@clerc/plugin-completions";
import { friendlyErrorPlugin } from "@clerc/plugin-friendly-error";
import { notFoundPlugin } from "@clerc/plugin-not-found";
import { strictFlagsPlugin } from "@clerc/plugin-strict-flags";

export default function usePlugins(cliInstance: Clerc<{}, {}>) {
  const activePlugins = [
    helpPlugin,
    versionPlugin,
    completionsPlugin,
    friendlyErrorPlugin,
    notFoundPlugin,
    strictFlagsPlugin,
  ];

  activePlugins.forEach((plugin) => cliInstance.use(plugin()));
}
