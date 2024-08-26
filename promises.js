//This code takes us to callback hell as it is increaseing vertically and we don't know
// if apis willl call once or twice. This us also called pyramid of doom

createOrderApi(orderInfo, function (info) {
  paymentInfoApi(info, function (ordersummary) {
    orderSummaryApi(ordersummary, function (wallet) {
      updateWalletApi(wallet);
    });
  });
});

//To avoid callback we use promise chaining.
//both are same if we use function than we have to return back promise

createOrderApi(orderInfo)
  .then((info) => paymentInfoApi(info))
  .then((summary) => orderSummaryApi(summary))
  .then((wallet) => updateWalletApi(wallet));

createOrderApi(orderInfo)
  .then(function (info) {
    return paymentInfoApi(info);
  })
  .then(function (summary) {
    return orderSummaryApi(summary);
  })
  .then(function (wallet) {
    return updateWalletApi(wallet);
  });
