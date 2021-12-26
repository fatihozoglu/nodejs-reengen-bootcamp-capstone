const checkRole = (req, res, next) => {
  if (req.user.role === "admin") next();
  else res.status(403).send("You are not authorized for this action");
};

module.exports = checkRole;
