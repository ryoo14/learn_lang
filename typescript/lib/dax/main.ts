import $ from "https://deno.land/x/dax@0.15.0/mod.ts";

const tmpDir = Deno.makeTempDirSync();
await $`pwd`;
Deno.chdir(tmpDir);
await $`pwd`;
Deno.removeSync(tmpDir, { recursive: true });
