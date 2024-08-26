const cart = ["shoes", "pant", "shirt"];

const createOrderApi = (cart) => {
  return new Promise(function (resolve, reject) {
    if (!validCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = 12345;
    if (orderId) {
      setTimeout(() => {
        resolve(`This is order id ${orderId}`);
      }, 5000);
    }
  });
};

const paymentInfoApi = (orderId) => {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      const err = new Error("This is the error");
      reject(err);
    }

    if (orderId) {
      resolve(orderId);
    }
  });
};

const orderSummary = (orderId) => {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      const err = new Error("This is the error");
      reject(err);
    }

    if (orderId) {
      resolve(`Successfully summary order ${orderId}`);
    }
  });
};

const validCart = (cart) => {
  return true;
};

createOrderApi(cart)
  .then((data) => {
    console.log(data);
    return paymentInfoApi(data);
  })
  .then((payment) => {
    console.log(payment);
    return orderSummary(payment);
  })
  .then((res) => {
    console.log(res);
  });
