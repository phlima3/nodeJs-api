import NotFound from "../errors/notFound.js";
import autores from "../models/Autor.js";
class AutorController {
  static getAuthors = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      res.json(autoresResultado);
    } catch (err) {
      next(err);
    }
  };
  static createAuthor = async (req, res, next) => {
    try {
      let author = new autores(req.body);
      await author.save();
      res.status(201).json(author.toJSON());
    } catch (err) {
      next(err);
    }
  };
  static updateAuthor = async (req, res, next) => {
    try {
      const { id } = req.params;

      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (err) {
      next(err);
    }
  };
  static getAuthor = async (req, res, next) => {
    try {
      const { id } = req.params;
      const author = await autores.findById(id);

      if (author !== null) {
        res.status(200).send(author);
      } else {
        next(new NotFound("Id do autor não encontrado!"));
      }
    } catch (err) {
      next(err);
    }
  };
  static deleteAuthor = async (req, res, next) => {
    try {
      const { id } = req.params;
      await autores.findByIdAndDelete(id);
      res.json({ message: "Autor excluído com sucesso!" });
    } catch (err) {
      next(err);
    }
  };
}

export default AutorController;
