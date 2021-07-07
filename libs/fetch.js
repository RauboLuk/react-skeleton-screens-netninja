const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 5000);
        })
    );

export default fetcher;
