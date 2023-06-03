const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  const allCountries = Country.findAll();
  if(!allCountries.length){
    const apiCountryAll = await axios.get('http://localhost:5000/countries')
  }

  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
