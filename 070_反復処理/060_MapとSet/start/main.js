// ES6で導入された
// Map, Setは、データを管理する為の入れ物
  // コレクションという

// object
  // キー: 文字列
  // for_in: できる
  // for_of: できない
// Map
  // キー: 制限なし
  // for_in: できない
  // for_of: できる
const map = new Map();

const key1 = {};
// 以下により、mapの中に「key1(={}): 'value1'」が格納される(オブジェクトではなく、Entriesと呼ばれる、配列のようなものに、キーと値が保持されている)。
map.set(key1, 'value1');
console.log(map.get(key1));
console.log(map.get({})); // オブジェクトの場合は参照値を持ってきているので、これは不可

const key2 = function() {};
// 以下により、mapの中に「key2(=「function() {}」): 'value2'」が格納される(オブジェクトではなく、Entriesと呼ばれる、配列のようなものに、キーと値が保持されている)。
map.set(key2, 'value2');
console.log(map.get(key2));

let key3;
// 以下により、mapの中に「key3(=0): 'value3'」が格納される(オブジェクトではなく、Entriesと呼ばれる、配列のようなものに、キーと値が保持されている)。
map.set(key3 = 0, 'value3');
console.log(map.get(key3));
console.log(map.get(0)); // これでもいける

// 削除する場合は、以下
map.delete(key3);
console.log(map.get(key3));

// for(const m of map) {
// 	console.log(m)
// }
// 以下、配列の分割代入の方法
  // for(const [k, v] of map) {
  // 	console.log(k, v)
  // }

console.log(map);
// Map(2) {{…} => 'value1', ƒ => 'value2'}
  // [[Entries]]
    // 0: {Object => "value1"}
    // 1: {function() {} => "value2"}

// ---- ここからSet ----

// Array
  // 重複値: できる
  // for_in: できる
  // for_of: できる
// Set
  // 重複値: できない
  // for_in: できない
  // for_of: できる
console.log('---- ここからSet ----')

const value1 = 'value1';
const value2 = 'value2';
const value3 = 'value3';

const s = new Set();
s.add(value1); // 追加
s.add(value1);
s.add(value2);
s.add(value3);
s.delete(value3); // 削除

// 指定されたキーが含まれているものがあるかを確認
console.log(s.has(value2));

// 重複値はaddされない
for(let v of s) {
  console.log(v);
}

// indexは持てないので、持たせる為には、以下のように配列下する
// const arry = Array.from(s);
const arry = [...s];
console.log(arry);

for(let index in arry) {
  console.log(index, arry[index]);
}

console.log(s);
// Set(2) {'value1', 'value2'}
  // [[Entries]]
    // 0: "value1"
    // 1: "value2"

// まとめると、MapとSetの違いは、以下
  // 重複値を持たせたくないなら、Set
    // ただ、indexを持たせることができない(配列化すれば良い)
    // ただ、keyとvalueを同時に持つことができず、valueしか持てない
  // keyとvalueを同時に持たせたいなら、Map
    // ただ、indexを持たせることができない(keyがあるので、持たせる必要なし??)
