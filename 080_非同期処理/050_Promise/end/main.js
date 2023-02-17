// Promiseとは、非同期処理をより簡単に、可読性が上がるように書けるようにしたもの
  // callback関数を使った非同期処理だと可読性が悪くなる
    // 参照: 080_非同期処理/040_非同期処理のチェーン/end/main.js

// 同期処理
new Promise(function(resolve, reject) {
  console.log('promise');

  // a-1. rejectが呼ばれると、エラーが発生したとして、それをPromiseに知らせることができる
  // reject("bye");

  // Promiseの中で、非同期処理を実行
  setTimeout(function() {
    // b-1. resolveが呼ばれると、「.then」に行く
    resolve("hello");
  }, 1000);

// 非同期処理
}).then(function(data) {
  // b-2. ここの「data」には、resolveに渡した引数("hello")が渡される
  console.log('then:' + data);

  // rejectは、上記最初のPromiseのところでしか使えないので、「.then」内でrejectしたい時は、以下記述を行う
    // throw new Error();

  return data;

// 非同期処理
}).then(function(data) {
  console.log('then:' + data);
  return data;

// 非同期処理
}).catch(function(data) {
  // a-2. ここの「data」には、rejectに渡した引数("bye")が渡される
  console.log('catch:' + data);

// 非同期処理
// finallyでのcallback関数には、引数を使用できない
}).finally(function(data) {
  // a-3. 最後にここに来る
  // b-3. 最後にここに来る
  console.log('finally:' + data);
})

console.log('global end');
