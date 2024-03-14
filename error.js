// const sellPrice = 200;
// const discount = 50;

// const finalPrice = sellPrice - discount
// console.log(finalPrice);

//   try {
//     console.log('abc');

//   } catch (error) {
//     console.log(error);

//   }

function fetchDataFromApi(apiUrl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { result: "some data" };
      const isError = Math.random() < 0.5;

      if (isError) {
        reject(new Error(`Faild to fetch data from ${apiUrl}`));
      } else {
        resolve(data);
      }
    }, 1000);
  });
}

Promise.all([
  fetchDataFromApi("https://api.example.com/data1"),
  fetchDataFromApi("https://api.example.com/data2"),
])
  .then(([data1, data2]) => {
    console.log("Data from API 1:", data1.result);
    console.log("Data from API 2:", data2.result);
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });
