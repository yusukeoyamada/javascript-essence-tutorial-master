// タスクキューとは、実行待ちの非同期処理の行列を指す。
  // 実際に処理を行う際には、タスクキューから、コールスタックの中に含まれる。
    // (注意) 上記は、コールスタックが空にならないと、行われない。
      // コールスタックの中には、同期処理の処理が入っていく
        // 非同期処理には、重い処理を含めると、同期処理の処理に影響が出なくなる。

const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
  console.log('task2 done');
});

function a() {
  setTimeout(function task1() {
    console.log('task1 done');
  }, 4000);

  const startTime = new Date();
  while (new Date() - startTime < 5000);

  console.log('fn a done');
}

a();
