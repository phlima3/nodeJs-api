import NotFound from "../errors/notFound.js ";

export default function handler404(req, res, next) {
  const error404 = new NotFound();

  next(error404);
}
