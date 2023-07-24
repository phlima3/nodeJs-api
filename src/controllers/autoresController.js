import autores from "../models/Autor.js";

class AutorController {
  static getAuthors = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.json(autoresResultado);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static createAuthor = async (req, res) => {
    try {
      let author = new autores(req.body);
      await author.save();
      res.status(201).json(author.toJSON());
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static updateAuthor = async (req, res) => {
    try {
      const { id } = req.params;

      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static getAuthor = async (req, res) => {
    try {
      const { id } = req.params;
      const author = await autores.findById(id);
      res.json(author);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Autor não encontrado!` });
    }
  };
  static deleteAuthor = async (req, res) => {
    try {
      const { id } = req.params;
      await autores.findByIdAndDelete(id);
      res.json({ message: "Autor excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${err.message} - Não foi possível excluir!` });
    }
  };
}

export default AutorController;
