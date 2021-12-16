const pool = require("../db_config/postgres");

const getByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT unit_name, consumption_date, consumption_amount, consumption_price, discount, total_price FROM units WHERE factory_id = $1",
    [id],
    (err, result) => {
      if (err) console.log(err);
      res.status(200).send(result.rows);
    }
  );
};

module.exports = {
  getByFactoryId,
};
