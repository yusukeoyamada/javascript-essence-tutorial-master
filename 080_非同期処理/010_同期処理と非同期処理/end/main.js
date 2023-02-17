// スレッド: 1本の処理
  // メインスレッド: jsの実行と、レンダリング(画面描写)を行っている
    // 重い処理があると、画面が更新されなくなる。

// 同期処理は、メインスレッドでコードが順番に処理される(処理が終わるまで待つ)
// 非同期処理は、一時的にメインスレッドから処理が切り離される
  // 重い処理などは、非同期処理で行う形にすれば、同期処理に負担をかけない

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

// sleep(ms);

// 「2000」分だけ、btnを押す処理が開放される。
  // 「2000」分後に、「sleep(3000)」がなされる。
    // 「2000」分中は、非同期処理がなされ、btnを押す処理が開放される。
// 非同期API
  // setTimeoutや、Promise
setTimeout(function() {
	sleep(3000)
}, 2000)
