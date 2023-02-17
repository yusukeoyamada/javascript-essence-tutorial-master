function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val++);
      // resolve(val);
      reject(val);
    }, val * 500);
  });
}

// 以下のようにすれば、非同期処理を並列に行うことができる
  // 以下だと、配列に格納されたPromiseインスタンスが全て完了されるまで、「.then」が保留状態になる。
Promise.all([sleep(1), sleep(2), sleep(3)])
.then(function (data) {
  console.log(data);
// allだと、rejectされると、catchに処理が移行する。
}).catch(function(e) {
  console.error(e);
});

// 以下のように、「.then」の中で、Promise.all()を実行し、非同期処理の並列処理ができる。
// sleep(0).then(function(val) {
//   return Promise.all([sleep(1), sleep(2), sleep(3)]);
// }).then(function (data) {
//   console.log(data);
// }).catch(function(e) {
//   console.error(e);
// });

// 以下だと、配列に格納されたPromiseインスタンスのどれか一つが完了されるまで、「.then」が保留状態になる。
// Promise.race([sleep(1), sleep(2), sleep(3)])
// .then(function (data) {
//   console.log(data);
// }).catch(function(e) {
//   console.error(e);
// });

Promise.allSettled([sleep(1), sleep(2), sleep(3)])
.then(function (data) {
  console.log(data);
// allSettledだと、rejectされると、catchに処理が移行しない。
}).catch(function(e) {
  console.error(e);
});

// dataには、以下のような情報が格納される。
  // resolveの場合
    // (3) [{…}, {…}, {…}]
      // 0: {status: 'fulfilled', value: 2}
      // 1: {status: 'fulfilled', value: 3}
      // 2: {status: 'fulfilled', value: 4}
  // rejectの場合
    // (3) [{…}, {…}, {…}]
      //   0: {status: 'rejected', reason: 2}
      //   1: {status: 'rejected', reason: 3}
      //   2: {status: 'rejected', reason: 4}
