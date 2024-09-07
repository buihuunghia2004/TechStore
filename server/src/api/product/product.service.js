const create = async (product, creator) => {
  const productFind = await ProductModel.findOne({ code: product.code });
}

const productService = {
  create
};