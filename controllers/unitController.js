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

const getDataType = (req, res) => {
  pool.query(
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'units'",
    (err, result) => {
      if (err) console.log(err);
      res.status(200).send(result.rows);
    }
  );
};

const createNew = (req, res) => {
  pool.query(
    `INSERT INTO units (${[
      ...Object.keys(req.body),
    ]}) VALUES ($1, $2, $3, $4, $5, $6)`,
    Object.values(req.body),
    (err, result) => {
      if (err) console.log(err);
      else res.status(201).send(`Unit created.`);
    }
  );
};

module.exports = {
  getByFactoryId,
  deleteUnitById,
  deleteUnitsByFactoryId,
  getDataType,
  createNew,
};
