import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O título é obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O Id do autor é obrigatório"],
  },
  editora: { type: String, required: [true, "A editora é obrigatória"] },
  numeroPaginas: { type: Number },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
