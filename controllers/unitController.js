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
  let columnNames = [...Object.keys(req.body)];
  let columnNum = Object.keys(req.body).length;
  let placeholders = [];
  let createIdentifiers = (num) => {
    for (let i = 1; i <= num; i++) {
      placeholders.push(`$${i}`);
    }
  };
  createIdentifiers(columnNum);

  pool.query(
    `INSERT INTO units (${columnNames}) VALUES (${placeholders.join(",")})`,
    Object.values(req.body),
    (err, result) => {
      if (err) res.status(400).send("Please fill all fields");
      else res.status(201).send(`Factory created.`);
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
