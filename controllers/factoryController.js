const pool = require("../db_config/postgres");

const getDataType = (req, res) => {
  const text =
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'factories'";
  pool
    .query(text)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((e) => res.status(500).send("Couldn't get factory data types"));
};

const getAll = (req, res) => {
  const text = "SELECT * FROM factories ORDER BY id ASC";
  pool
    .query(text)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((e) => res.status(500).send("Couldn't get the factory list"));
};

const createNew = (req, res) => {
  let keys = Object.keys(req.body);
  let placeholders = keys.map((item, index) => `$${index + 1}`);

  const text = `INSERT INTO factories (${keys}) VALUES (${placeholders})`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(201).send("Factory created"))
    .catch((err) => res.status(500).send("Couldn't create factory"));
};

const updateFactoryById = (req, res) => {
  const id = parseInt(req.params.id);
  let keys = Object.keys(req.body);
  let keysWithPlaceholders = keys
    .map((item, index) => `${item} = $${index + 1}`)
    .join(",");

  const text = `UPDATE factories SET ${keysWithPlaceholders} WHERE id = $6`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(200).send(`Factory with ${id} updated`))
    .catch((e) => res.status(500).send("Couldn't update the factory data"));
};

const deleteFactoryById = (req, res) => {
  const id = parseInt(req.params.id);

  const text = "DELETE FROM factories WHERE id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => res.status(500).send("Couldn't delete the factory data"));
};

module.exports = {
  getDataType,
  getAll,
  createNew,
  updateFactoryById,
  deleteFactoryById,
};
