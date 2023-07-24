import livros from "../models/Livro.js";

class LivroController {
  static getBooks = async (req, res) => {
    try {
      const livrosResultado = await livros.find();
      res.json(livrosResultado);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static createBook = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).json(livro.toJSON());
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static updateBook = async (req, res) => {
    try {
      const { id } = req.params;

      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static getBook = async (req, res) => {
    try {
      const { id } = req.params;
      const livro = await livros.findById(id);
      res.json(livro);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Livro não encontrado!` });
    }
  };
  static deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndDelete(id);
      res.json({ message: "Livro excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${err.message} - Não foi possível excluir!` });
    }
  };
}

export default LivroController;
