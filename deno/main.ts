export const [str, num, num1, bgi, bgi1, arr, tup] = (
  () => {
    let t: string[] = [];
    let l = "";
    const b = new Uint8Array(1024);
    const d = new TextDecoder("utf-8", { fatal: !0 });
    const r = (): string => {
      for (;;) {
        while (t.length) {
          const v = t.pop();
          if (v) return v;
        }
        const k = Deno.stdin.readSync(b);
        if (k === null) {
          if (!l) throw new Error("No more input");
          const r = l;
          l = "";
          return r;
        }
        const s = d.decode(new Uint8Array(b.buffer, 0, k), { stream: !0 }).split(/\s+/);
        s[0] = l + s[0];
        l = s.pop()!;
        t = s.reverse();
      }
    };
    return [
      r,
      () => Number(r()),
      () => Number(r()) - 1,
      () => BigInt(r()),
      () => BigInt(r()) - 1n,
      <T>(n: number, i: () => T) => () => {
        let m = n;
        const r: T[] = [];
        while (m--) r.push(i());
        return r;
      },
      <T extends unknown[]>(...i: { [K in keyof T]: () => T[K] }) => () => {
        const r: unknown[] = [];
        for (let j = 0; j < i.length; j++) r.push(i[j]());
        return <T> r;
      },
    ];
  }
)();
