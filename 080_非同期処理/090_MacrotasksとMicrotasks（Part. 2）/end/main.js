new Promise(function promise(resolve) {
  // 1. 同期的処理
  console.log('promise');

  setTimeout(function task1() {
    // 3. 非同期的処理
      // 「resolve」しているので
    console.log('task1');
    resolve();
  });

  // 以下は、「resolve」してないので、マクロタスクになる。
  setTimeout(function task1() {
    // 7. 非同期的処理(下記Promiseのチェーン実行後に、ここに来る)
    console.log('task2');

    // 8. 非同期的処理(上記7後、改めて、下記resolveと、「.then」がなされる)
    const p = Promise.resolve();
    p.then(function job4() {
      console.log('job4')
    })

    // 8. 非同期的処理(下記は、上記と同じ意味)
    // queueMicrotask(function job4() {
    //   console.log('job4')
    // })
  });
})
// 4. 非同期的処理(Promiseの中のsetTimeoutの中で、「resolve」しているので)
.then(function job1() {
  console.log('job1');
})
// 5. 非同期的処理(Promiseのチェーンがなされているので、上記4の「.then」後に、順に以下が実行される)
.then(function job2() {
  console.log('job2');
})
// 6. 非同期的処理
.then(function job3() {
  console.log('job3');
})

// 2. 同期的処理
console.log('global end');
