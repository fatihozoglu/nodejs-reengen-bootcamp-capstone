const pool = require("../db_config/postgres");

const getAll = (req, res) => {
  pool.query(
    "SELECT unit_id, unit_name, consumption_date, consumption_amount, consumption_price, discount, total_price FROM units ORDER BY unit_id ASC",
    (err, result) => {
      if (err) console.log(err);
      res.status(200).send(result.rows);
    }
  );
};

module.exports = {
  getAll,
};
