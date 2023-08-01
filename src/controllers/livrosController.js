import livros from "../models/Livro.js";

class LivroController {
  static getBooks = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find().populate("autor").exec();
      res.json(livrosResultado);
    } catch (err) {
      next(err);
    }
  };
  static createBook = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).json(livro.toJSON());
    } catch (err) {
      next(err);
    }
  };
  static updateBook = async (req, res, next) => {
    try {
      const { id } = req.params;

      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (err) {
      next(err);
    }
  };
  static getBook = async (req, res, next) => {
    try {
      const { id } = req.params;
      const livro = await livros.findById(id).populate("autor", "nome").exec();
      res.json(livro);
    } catch (err) {
      next(err);
    }
  };
  static deleteBook = async (req, res, next) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndDelete(id);
      res.json({ message: "Livro excluído com sucesso!" });
    } catch (err) {
      next(err);
    }
  };
  static getBookByPublisher = async (req, res, next) => {
    try {
      const { editora } = req.query;
      const livro = await livros.find({ editora: editora }, {});
      res.json(livro);
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;
