const pool = require("../db_config/postgres");

const getDataType = (req, res) => {
  const text =
    "SELECT column_name, data_type, ordinal_position FROM information_schema.columns WHERE table_name = 'factories'";
  pool
    .query(text)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((e) =>
      res.status(500).send("An error occured while getting factory data types")
    );
};

const getAll = (req, res) => {
  const text = "SELECT * FROM factories ORDER BY id ASC";
  pool
    .query(text)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((e) =>
      res.status(500).send("An error occured while getting the factory list")
    );
};

const create = (req, res) => {
  let keys = Object.keys(req.body);
  let placeholders = keys.map((item, index) => `$${index + 1}`);

  const text = `INSERT INTO factories (${keys}) VALUES (${placeholders})`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(201).send("Factory created"))
    .catch((err) =>
      res.status(500).send("An error occured while creating the new factory")
    );
};

const updateById = (req, res) => {
  const id = parseInt(req.params.id);
  let keys = Object.keys(req.body);
  let keysWithPlaceholders = keys
    .map((item, index) => `${item} = $${index + 1}`)
    .join(",");

  const text = `UPDATE factories SET ${keysWithPlaceholders} WHERE id = ${id}`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(200).send(`Factory with ${id} updated`))
    .catch((e) =>
      res.status(500).send("An error occured while updating the factory data")
    );
};

const deleteById = (req, res) => {
  const id = parseInt(req.params.id);

  const text = "DELETE FROM factories WHERE id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) =>
      res.status(500).send("An error occured while deleting the factory data")
    );
};

const createNewColumn = (req, res) => {
  const { name, dataType } = req.body;

  const text = `ALTER TABLE factories ADD COLUMN ${name} ${dataType}`;

  pool
    .query(text)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) =>
      res.status(500).send("An error occured while creating the new column")
    );
};

const deleteColumn = (req, res) => {
  const name = req.params.name;
  const text = `ALTER TABLE factories DROP COLUMN ${name}`;

  pool
    .query(text)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) =>
      res.status(500).send("An error occured while deleting the column")
    );
};

module.exports = {
  getDataType,
  getAll,
  create,
  updateById,
  deleteById,
  createNewColumn,
  deleteColumn,
};
