const axios = require('axios');

module.exports = {
  getResults: (req, res, next) => {
    axios
      .get('http://pokeapi.co/api/v2/pokemon/')
      .then(result => {
        res.status(200).json(result.data.results);
      })

      .catch(err => console.log(err));
  },

  getDetails: (req, res, next) => {
    axios
      .get(`${req.body.url}`)
      .then(result => {
        // console.log('results of poke', result.data.sprites.front_default);
        res.status(200).json(result.data);
      })
      .catch(err => console.log(err));
  }
};
