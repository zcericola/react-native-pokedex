const axios = require('axios');

module.exports = {
   getResults: async (req, res, next) => {
    try {
      let result = await axios
        .get('http://pokeapi.co/api/v2/pokemon/');
        res.status(200).json(result.data.results);
      } catch(err) {
        console.log(err);
      }   
  },

  getDetails: async (req, res, next) => {
   try{
    let result = await axios
    .get(`${req.body.url}`);
    res.status(200).json(result.data);
  } catch(err){
    console.log(err);

  } 

  }
};
