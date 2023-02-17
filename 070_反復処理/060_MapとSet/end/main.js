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
// 以下により、mapの中に「{ key1(={}): 'value1' }」が格納される。
map.set(key1, 'value1');
console.log(map);
console.log(map.get(key1));

const key2 = function() {};
// 以下により、mapの中に「{ key2(=「function() {}」): 'value2' }」が格納される。
map.set(key2, 'value2');
console.log(map);
console.log(map.get(key2));

let key3;
map.set(key3 = 0, 'value3');

map.delete(key3);
console.log(map.get(0));

// for(const [k,v] of map) {
// 	console.log(k)
// }

// Array
  // 重複値: できる
  // for_in: できる
  // for_of: できる
// Set
  // 重複値: できない
  // for_in: できない
  // for_of: できる

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key3))

const arry = Array.from(s);

const arry = [...s];
console.log(arry);

const it = s.keys();
console.log(it.next());


for(let k of s) {
	console.log(k)
}
