import mongoose from "mongoose";

// Representação no banco de dados de um livro
// autor é do tipo objectId por se relacionar com outra Collection presente no db, Collection 'autores'
const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number},
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;