//4 type of promise api's

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved p1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am resolved p2");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am rejected p3");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .err((err) => {
//     console.log(err);
//   });
