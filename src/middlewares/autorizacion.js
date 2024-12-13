const autorizacion = (roles)  => {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
}


export default autorizacion