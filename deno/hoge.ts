type A = {
  a: string;
};

type AA = {
  a: string;
  aa: number;
};

const func = <T extends A>(hoge: T) => {
  console.log(hoge);
}

const v: AA = {
  a: "aaa",
  aa: 10
};
func(v);

const a: A = { a: "hoge" };
const aa: AA = { a: "hoge", aa: 5 };

const po: A = aa;
console.log(po.aa);
console.log(typeof po);
