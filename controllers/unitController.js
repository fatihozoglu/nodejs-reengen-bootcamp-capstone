const pool = require("../db_config/postgres");

const getDataType = (req, res) => {
  const text =
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'units'";
  pool
    .query(text)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => res.status(500).send("Couldn't get units data types"));
};

const createNew = (req, res) => {
  let keys = Object.keys(req.body);
  let placeholders = keys.map((item, index) => `$${index + 1}`);

  const text = `INSERT INTO units (${keys}) VALUES (${placeholders})`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(201).send("Unit created"))
    .catch((err) => res.status(500).send("Couldn't create unit"));
};

const getByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);
  const text = "SELECT * FROM units WHERE factory_id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => res.status(500).send("Couldn't get units data"));
};

const deleteUnitById = (req, res) => {
  const id = parseInt(req.params.id);
  const text = "DELETE FROM units WHERE unit_id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => res.status(200).send(`Unit with id ${id} is deleted`))
    .catch((err) => res.status(500).send("Couldn't delete the unit"));
};

const deleteUnitsByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);
  const text = "DELETE FROM units WHERE factory_id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => {
      res.status(200).send(`Units belongs to factory with id ${id} deleted`);
    })
    .catch((err) => res.status(500).send("Couldn't delete units"));
};

module.exports = {
  createNew,
  getDataType,
  getByFactoryId,
  deleteUnitById,
  deleteUnitsByFactoryId,
};
