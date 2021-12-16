const pool = require("../db_config/postgres");

const getByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM units WHERE factory_id = $1",
    [id],
    (err, result) => {
      if (err) console.log(err);
      res.status(200).send(result.rows);
    }
  );
};

const deleteUnitById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM units WHERE unit_id = $1", [id], (err, result) => {
    if (err) console.log(err);
    res.status(200).send(`Unit with ID: ${id} deleted`);
  });
};

const deleteUnitsByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM units WHERE factory_id = $1", [id], (err, result) => {
    if (err) console.log(err);
    res.status(200).send(`Units with factory_id: ${id} deleted`);
  });
};

module.exports = {
  getByFactoryId,
  deleteUnitById,
  deleteUnitsByFactoryId,
};
