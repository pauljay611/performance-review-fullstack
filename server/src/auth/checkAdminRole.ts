export default (req, res, next) => {
  try {
    if (!req.user.get("is_admin")) {
      return res.status(403).send("forbidden");
    }
    next();
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
