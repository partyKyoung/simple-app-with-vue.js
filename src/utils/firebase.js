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

export function getReceipt (id) {
  const target = getDatabase();

  return new Promise((resolve, reject) => {
    target.ref('/receipts').child(id).once('value').then((snapshot) => {
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

export function updateReceipt (id, status, evaluation, receipt) {
  const target = getDatabase();
  const updates = {};

  receipt[status] += 1;
  updates['/receipts/' + id] = receipt;

  return new Promise((resolve, reject) => {
    target.ref().update(updates).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });


}

export function writeReceiptEvaluation (id, status, evaluation) {
  const target = getDatabase();
  const postData = {
    id: id,
    status: status,
    evaluation: evaluation
  }

  const evaluationKey = target.ref().child('receiptsEvaluation').push().key;
  const updates = {};
  updates['/receiptsEvaluation/' + evaluationKey] = postData;

  return new Promise((resolve, reject) => {
    target.ref().update(updates).then((data) => {
      resolve(data);
    }).catch((err) =>  {
      reject(err);
    })
  }) 
}

export function getReceiptEvaluation (id) {
  const target = getDatabase();

  return new Promise((resolve, reject) => {
    target.ref('/receiptsEvaluation').orderByChild("id").equalTo(id).once("value").then((snapshot) => {
      resolve(snapshot);
    }).catch((err) => {
      reject(err);
    });
  });
}
