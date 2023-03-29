import Products from "../models/products.js";

export const createProducts = async (req, res, next) => {
  const newProducts = await Products.create({
    ...req.body,
  });
  newProducts.save();

  res.status(200).json(newProducts);
};

export const getProducts = async (req, res, next) => {
  try {
    const allProducts = await Products.find().sort({
      updatedAt: "-1",
    });
    res.status(200).json({
      products: allProducts,
    });
  } catch (error) {
    res.status(404).json("error");
  }
};

export const getsingleProduct = async (req, res, next) => {
  const singleproduct = await Products.findById(req.params.id);

  if (singleproduct) {
    return res.status(200).json({
      singleproduct,
    });
  } else {
    res.status(404).send("not found");
  }
};
