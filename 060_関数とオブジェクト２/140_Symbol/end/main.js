// シンボルとは、プロパティの重複を避ける為に、必ず一意の値を返す関数
  // 基本的に、js内部の開発者が使うもので、jsを使用者は使わない

// new要らない
const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(s === s2);

const str = new String('Tom');
console.log(str);
// String {'Tom'}
// 0: "T"
// 1: "o"
// 2: "m"
// length: 3
// [[Prototype]]: String
  // Symbol(hello)
  // : ƒ ()
  // Symbol(hello)
  // : ƒ ()

// Symbolをキーにしたプロパティが、String.prototypeに追加される
  // Symbolは、1つ1つが固有の値を持つので、名前は重複するも、プロパティ自体は別個のものが作成できる。
String.prototype[s] = function() {
  return 'hello ' + this;
}

String.prototype[s2] = function() {
  return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom.s);
// String.Prototypeの中の、「s」を呼びたい時は、以下のように記述する。
console.log(tom[s]);
console.log(tom[s]());
