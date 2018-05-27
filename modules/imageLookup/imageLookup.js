// I wrote the image search api myself which can be found here

const fetch = require("node-fetch");

exports.showImage = query => {
  return new Promise((resolve, reject) => {
    fetch(`https://imagelookup.herokuapp.com/api/imagesearch/${query}`)
      .then(response => response.json())
      .then(json => resolve(json.results[0].image))
      .catch(err => reject(err));
  });
};
