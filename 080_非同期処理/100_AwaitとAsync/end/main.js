// asyncとawaitは、Promiseを更に直感的に記述できるようにしたもの
  // asyncを使って宣言された関数は、Promiseを返却する関数になる。
  // awaitが付いた処理は、Promiseを返却する関数内の非同期処理が完了するまで待つ。

function sleep(val) {
  return new Promise(function(resolve) {
    // ここは、同期処理

    // 以下は、非同期処理
    setTimeout(function() {
      console.log(val++);
      resolve(val);
      console.log(`--- resolveの後 ---`);
    }, 1000);
  });
}

// awaitが付いている処理が中に記述されている時は、関数にasyncをつける。
async function init() {
  // 上記「resolve(val)」処理が含まれている「setTimeout」の処理がなされた後に、ここに戻り、valが返ってくる(「.then」の時と挙動は同じ)
    // awaitが付いている処理は、非同期で処理されることに
  let val = await sleep(0);
  console.log(`await後: ${val}`);

  // 以下は、「.then」のPromiseチェーンと挙動は同じ
  val = await sleep(val);
  console.log(`await後: ${val}`);
  val = await sleep(val);
  console.log(`await後: ${val}`);
  val = await sleep(val);
  console.log(`await後: ${val}`);
  val = await sleep(val);
  console.log(`await後: ${val}`);

  // throw new Error();

  return val;
}

// init();
// console.log(init());

// 「init()」後に、Promiseが返ってくるので、以下のように処理を続けることができる。
  // 「init()」の戻り値を「return val」としているので、引数として「val」を受け取り使うことができる。
init().then(function(val) {
  console.log('hello' + val)
// 「init()」中に、Errorがthrowされたら、以下catch文に入る。
}).catch(function(e) {
  console.error(e);
});

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
