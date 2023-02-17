function sleep(callback, val) {
  setTimeout(function() {
    console.log(val++);
    callback(val);
  }, 1000);
}

// 以下のように、callback関数を使って非同期処理の複数実行をしようとすると、可読性の悪い形になる。
sleep(function(val) {
  sleep(function(val) {
    sleep(function(val) {
      sleep(function(val) {

      }, val);
    }, val);
  }, val);
}, 0);
