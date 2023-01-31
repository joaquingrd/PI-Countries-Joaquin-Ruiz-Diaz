//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { countryDataBase } = require("./src/allCountriesDb");
require("dotenv").config();
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  //alter true - actualiza las tablas de BDD en base a los modelos
  server.listen(PORT, async () => {
    // console.log("listening at port", PORT);
    await countryDataBase(); // eslint-disable-line no-console
  });
});
// .catch((err) => console.log(err.message));
