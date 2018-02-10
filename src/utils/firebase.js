function getDatabase () {
  return firebase.database();
}

export function getReceipts () {
  return firebase.database().ref('/receipts').once('value').then(function(snapshot) {
    snapshot.forEach( function(test) {
      console.log(test.val());
    });
  });
}

export function writeReceipt (spendingDetail, price, description) {
  const target = getDatabase();
  const postData = {
    spendingDetail: spendingDetail, 
    price: price,
    description: description
  };

  // 입력할 데이터의 key를 얻는다. 
  const key = target.ref().child('receipts').push().key;
  const updates = {};
  updates['/receipts/' + key] = postData;

  return target.ref().update(updates);
}
