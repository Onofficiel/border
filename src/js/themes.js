fetch("../src/data/themes.json")
  .then((r) => {
    return r.json();
  })
  .then((data) => {
    console.log(data);
  });
