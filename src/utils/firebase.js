function getDatabase () {
  return firebase.database();
}

export function getReceipts () {
  const target = getDatabase();

  return new Promise((resolve, reject) => {
    target.ref('/receipts').once('value').then((snapshot) => {
      resolve(snapshot);
    }).catch((err) => {
      reject(err);
    });
  });
}

export function getReceipt (key) {
  const target = getDatabase();

  return new Promise((resolve, reject) => {
    target.ref('/receipts').child(key).once('value').then((snapshot) => {
      resolve(snapshot);
    }).catch((err) => {
      reject(err);
    });
  });
}

export function writeReceipt (spendingDetail, price, description) {
  const target = getDatabase();
  const postData = {
    spendingDetail: spendingDetail, 
    price: price,
    description: description,
    great: 0,
    stupid: 0
  };

  // 입력할 데이터의 key를 얻는다. 
  const key = target.ref().child('receipts').push().key;
  const updates = {};
  updates['/receipts/' + key] = postData;

  return new Promise((resolve, reject) => {
    target.ref().update(updates).then(() => {
      resolve(key);
    }).catch((err) =>  {
      reject(err);
    })
  })
}

export function updateReceipt (key, status, evaluation, receipt) {
  const target = getDatabase();

  receipt[status] += 1;

  return new Promise((resolve, reject) => {
    target.ref().update(receipt).then(() => {
      writeReceiptEvaluation (key, status, evaluation);
    }).catch((err) => {
      reject(err);
    });
  });


}

export function writeReceiptEvaluation (key, status, evaluation) {
  const target = getDatabase();
  const postData = {
    key: key,
    status: status,
    evaluation: evaluation
  }

  const evaluationKey = target.ref().child('receiptsEvaluation').push().key;
  const updates = {};
  updates['/receiptsEvaluation/' + evaluationKey] = postData;

  return new Promise((resolve, reject) => {
    target.ref().update(updates).then(() => {
      resolve(evaluationKey);
    }).catch((err) =>  {
      reject(err);
    })
  }) 
}

export function getReceiptEvaluation (key) {
  const target = getDatabase();

  return new Promise((resolve, reject) => {
    target.ref('/receiptsEvaluation').orderByChild("key").equalTo(key).once("value").then((snapshot) => {
      resolve(snapshot);
    }).catch((err) => {
      reject(err);
    });
  });
}
