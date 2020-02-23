module.exports = function errorHandler(err, req, res, next) {
  if (err.name) {
    switch (err.name) {
      case "JsonWebTokenError":
        return res.status(401).json({ error: err.message });
      case "ValidationError":
        return res.status(422).json({ error: err.message });
      case "CastError":
        return res.status(404).json();
      case "MongoError":
        switch (err.codeName) {
          case "ImmutableField":
            return res.status(403).json({ error: err.message });
          case "DuplicateKey":
            return res.status(409).json({ error: err.message });
          default:
            console.error(err.message);
            return res.status(500).json();
        }
      default:
        console.error(err.message);
        return res.status(500).json();
    }
  } else {
    console.error(err.message);
    return res.status(500).json();
  }
};
