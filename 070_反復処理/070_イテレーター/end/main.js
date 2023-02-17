// 反復操作を行う際に、使用するオブジェクトのことをイテレーター(Iterator)という

function genIterator(max = 10) {
  // ループの状態を保持する
  let i = 0;

  // 以下の部分をイテレーターという
  return {
    // 必須条件1: nextメソッドを持つ
    next: function() {
      if(i >= max) {
        // 必須条件2: オブジェクトを返却する
        return {
          // 必須条件3: ループを継続するかどうかの指標になるプロパティ(done)を持つ
            // trueなら、ループを終了
              // ここは最後に来る
          done: true
        }
      } else {
        return {
          // falseなら、ループを継続
          done: false,
          // 任意条件4??: ループ時に渡ってくる値を格納するプロパティ(value)を持つ
            // ここは、初回にくる
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
  // 「.bind(null, 10)」や、「max = 10」のデフォルト値を設定すれば、無限ループから回避できる
    // 「.bind(null, 10)」
      // 第1引数: thisの参照先のオプジェクト
        // この場合は不要なのでnull
      // 第2引数: 関数(genIterator)の引数
  [Symbol.iterator]: genIterator.bind(null, 10)
}
for(const iterator of obj) {
  console.log(iterator);
}

// 反復可能オブジェクトの渡すと、objで初期化される
const s = new Set(obj);
console.log(s);
