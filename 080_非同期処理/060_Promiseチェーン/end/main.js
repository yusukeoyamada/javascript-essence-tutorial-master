// Promiseチェーンとは、Promiseを使って非同期処理を順次実行すること。

// 以下は、callback関数で行っていた非同期処理のチェーンをPromiseで実装したもの
  // 参考: 080_非同期処理/040_非同期処理のチェーン/end/main.js
function sleep(val) {
  // 以下では、rejectは使わないので、省略可能
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0).then(function(val) {
  // 必ず、Promiseのインスタンスを返すようにする
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
