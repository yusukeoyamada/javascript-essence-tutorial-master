// マクロタスクとは、タスクキューと呼ばれるもの
  // 順番が回ってきたら、1つずつジョブを実行する
    // 2個あった場合、1個を実行した後にマイクロタスクのジョブが積まれたら、その実行を待ち、2個目が実行される。
// マイクロタスクとは、タスクキューとは別で存在する非同期処理の待ち行列
  // ジョブキューとも呼ばれる。Promiseで登録した非同期処理が含まれる。
    // 順番が回ってきたら、全てのジョブを実行する

// こちらは、マクロタスクに格納されるもの
  // 第2引数がない為、待ち時間はない
    // 他には、setInterval, requestAnimationFrameがある
setTimeout(function task1() {
  // 4. ここは非同期的に処理される。
  console.log('task1');
});

// こちらは、マイクロタスクに格納されるもの
  // 他には、MutationObserverなどがある
new Promise(function promise(resolve) {
  // 1. ここは同期的に処理される。
  console.log('promise');
  resolve();
}).then(function job1() {
  // 3. ここは非同期的に処理される。
    // マイクロタスクの方が、マクロタスクより、早く実行される。
  console.log('job1');
});

// 2. ここは同期的に処理される。
console.log('global end');
