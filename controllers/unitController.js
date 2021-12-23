const pool = require("../db_config/postgres");

const getDataType = (req, res) => {
  const text =
    "SELECT column_name, data_type, ordinal_position FROM information_schema.columns WHERE table_name = 'units'";
  pool
    .query(text)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) =>
      res.status(500).send("An error occured while getting units' data types")
    );
};

const create = (req, res) => {
  let keys = Object.keys(req.body);
  let placeholders = keys.map((item, index) => `$${index + 1}`);

  const text = `INSERT INTO units (${keys}) VALUES (${placeholders})`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(201).send("Unit created"))
    .catch((err) =>
      res.status(500).send("An error occured while creating new unit")
    );
};

const getByFactoryId = (req, res) => {
  const id = parseInt(req.params.id);
  const text = "SELECT * FROM units WHERE factory_id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) =>
      res.status(500).send("An error occured while getting units")
    );
};

const deleteById = (req, res) => {
  const id = parseInt(req.params.id);
  const text = "DELETE FROM units WHERE unit_id = $1";
  const values = [id];

  pool
    .query(text, values)
    .then((result) => res.status(200).send(`Unit with id ${id} is deleted`))
    .catch((err) =>
      res.status(500).send("An error occured while deleting the unit")
    );
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
    .catch((err) =>
      res.status(500).send("An error occured while deleting units")
    );
};

const createNewColumn = (req, res) => {
  const { name, dataType } = req.body;

  const text = `ALTER TABLE units ADD COLUMN ${name} ${dataType}`;

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
  const { name } = req.body;
  const text = `ALTER TABLE units DROP COLUMN ${name}`;

  pool
    .query(text)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) =>
      res.status(500).send("An error occured while deleting the column")
    );
};

const updateById = (req, res) => {
  const id = parseInt(req.params.id);
  let keys = Object.keys(req.body);
  let keysWithPlaceholders = keys
    .map((item, index) => `${item} = $${index + 1}`)
    .join(",");

  const text = `UPDATE units SET ${keysWithPlaceholders} WHERE unit_id = ${id}`;
  const values = Object.values(req.body);

  pool
    .query(text, values)
    .then((result) => res.status(200).send(`Factory with ${id} updated`))
    .catch((e) =>
      res.status(500).send("An error occured while updating the unit data")
    );
};

module.exports = {
  create,
  getDataType,
  getByFactoryId,
  deleteById,
  deleteUnitsByFactoryId,
  createNewColumn,
  deleteColumn,
  updateById,
};
