// jsonファイルだと、最後に「,」は付けない

// 「window.fetch」と書くが、「window.」は省略可能
  // サーバー上からデータを取得できたりする。
    // 以下は、Promiseが返ってくる
// fetch('users.json')
// .then(function(response) {
//   // 以下は、jsonのオブジェクトを格納している、responseオブジェクト
//   console.log(response);
//   // 以下により、Promiseが返ってくる
//   console.log(response.json());

//   return response.json();
// })
// .then(function(json) {
//   console.log(json);

//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// })

// 上記をasync, awitを使って実装
async function fetchUsers() {
  // 上記.then」の部分と同様
  const response = await fetch('users.json');
  // 上記「.then」の部分と同様
  const json = await response.json();
  for(const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`)
  }
}

fetchUsers();
