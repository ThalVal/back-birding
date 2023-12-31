const express = require('express');
const cors = require('cors');
const routes = require('./controllers');
const path = require("path")
const {Bird} = require('./models');
const sequelize = require('./config/connection');

//deploying again
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
// force true ONCE to rebuild tables if you change anything in the db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
});
