async function fetchUsers() {
  const response = await fetch('users.json');
  if(response.ok) {
    const json = await response.json();

    // 「0」ならfalseになり、その「!」なので
    if(!json.length) {
      // throw new Error('no data found');
      throw new NoDataError('no data found');
    }

    return json;
  }
}

// カスタムエラーを以下のように作成できる。
class NoDataError extends Error {
  constructor(message) {
    super(message);
    // nameには、クラス名「NoDataError」を入れてあげる。
      // 入れないと、「Error」が勝手に入ったままに
    this.name = 'NoDataError';
  }
}

async function init() {
  // try-catch文で囲まないと、その中の処理時にエラーが出た時に、処理が止まってしまう。
  try {
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  } catch(e) {
    if(e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error('Oops, something went wrong');
    }
  } finally {
    console.log('bye');
  }

  console.log('end');
}

init();
