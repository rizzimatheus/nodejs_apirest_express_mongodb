import livros from "../models/Livro.js";

// Classe com funções que serão realizada para cada rota
class LivroController {

  static listarLivros = (req, res) => {
    livros.find()
      // Necessário usar 'populate' uma vez que os livros possui um
      // atributo ('autor') se relaciona com outro Collection ('autores')
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros);
      })
  }

  static listarLivroPorId = (req, res) => {
    const {id} = req.params;
    livros.findById(id)
      // Pode-se listar quais atributos da outra Collection que serão utilizados
      .populate('autor', 'nome')
      .exec((err, livro) => {
      if(err) {
        res.status(400).send({message: `${err.message} - falha ao encontrar o livro`})
      } else {
        res.status(200).send(livro)
      }
    })
  }

  static listarLivrosPorEditora = (req, res) => {
    const {editora} = req.query;

    // Utiliza um filtro para retornar apenas livros da editora passada pela query
    livros.find({'editora': editora}, {}, (err, livros) => {
      if(err) {
        res.status(400).send({message: `${err.message} - falha ao encontrar livros por editora`})
      } else {
        res.status(200).send(livros)
      }
    })
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao atualizar o livro`});

      } else {
        res.status(200).send({message: 'Livro atualizado com sucesso'});
      }
    })
  }

  static excluirLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndDelete(id, (err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao excluir o livro`});

      } else {
        res.status(200).send({message: 'Livro excluído com sucesso'});
      }
    })
  }

}

export default LivroController;