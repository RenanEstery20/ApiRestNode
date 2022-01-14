import Produtos from "../models/Produtos";

class ProdutosController {
  // cria novo user
  async store(req, res) {
    try {
      const novoProduto = await Produtos.create(req.body);
      return res.json(novoProduto);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ProdutosController();
