import { Clerc } from "clerc";

import configureCli from "./config";
import registerCommands from "./commands";
import usePlugins from "./plugins";

const clerc = Clerc.create();

const cli = configureCli(clerc);

registerCommands(cli);
usePlugins(cli);

cli.parse();
