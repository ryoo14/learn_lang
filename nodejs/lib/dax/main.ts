import { CommandBuilder } from "https://deno.land/x/dax@0.15.0/mod.ts";

const tmpDir = Deno.makeTempDirSync();

const builder = new CommandBuilder()
  .env("PATTY_ROOT", `${tmpDir}/patty`);

console.log(await builder.command("patty root").text());
await builder.command("patty create test/test/test").text();
console.log(await builder.command("patty list").text());
