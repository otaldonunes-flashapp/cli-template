import type { Clerc } from "clerc";

export function registerTestCommand(cliInstance: Clerc<{}, {}>) {
  return cliInstance
    .command("test", "A test command", {
      alias: "bar",
      parameters: ["[optional parameter]", "[optional spread...]"],
    })
    .on("test", (context) => {
      console.log("It works!");
      context.parameters.optionalParameter; // => "b" (string | undefined)
      context.parameters.optionalSpread; // => ["c", "d"] (string[])
      if (context.parameters.optionalParameter) {
        console.log("first param: ", context.parameters.optionalParameter);
      }
      if (context.parameters.optionalSpread) {
        console.log("second param: ", context.parameters.optionalSpread);
      }
    });
}
