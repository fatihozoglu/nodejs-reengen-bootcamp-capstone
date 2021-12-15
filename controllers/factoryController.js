const pool = require("../db_config/postgres");

const getAll = (req, res) => {
  pool.query("SELECT * FROM factories ORDER BY id ASC", (err, result) => {
    if (err) console.log(err);
    res.status(200).send(result.rows);
  });
};

const getById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM factories WHERE id = $1", [id], (err, result) => {
    if (err) console.log(err);
    res.status(200).send(result.rows);
  });
};

const createNew = (req, res) => {
  const { name, membership_start, membership_end, population, vip } = req.body;
  pool.query(
    "INSERT INTO factories (name, membership_start, membership_end, population, vip) VALUES ($1, $2, $3, $4, $5)",
    [name, membership_start, membership_end, population, vip],
    (err, result) => {
      if (err) console.log(err);
      res.status(201).send(`Factory created.`);
    }
  );
};

const updateById = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, membership_start, membership_end, population, vip } =
    request.body;

  pool.query(
    "UPDATE factories SET name = $1, membership_start = $2, membership_end = $3, population = $4, vip = $5 WHERE id = $6",
    [name, membership_start, membership_end, population, vip, id],
    (error, results) => {
      if (err) console.log(err);
      response.status(200).send(`Factory with ID: ${id} updated`);
    }
  );
};

const deleteById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM factories WHERE id = $1", [id], (error, results) => {
    if (err) console.log(err);
    response.status(200).send(`Factory with ID: ${id} deleted`);
  });
};

module.exports = {
  getAll,
  createNew,
  getById,
  updateById,
  deleteById,
};
