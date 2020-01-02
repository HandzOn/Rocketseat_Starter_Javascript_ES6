const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 1000);
});

async function execPromise() {
  const resolve = await myPromise();
  console.log(resolve);
}

const execPromise2 = async () => {
  const resolve = await myPromise();
  console.log(resolve);
};


execPromise();
execPromise2();

