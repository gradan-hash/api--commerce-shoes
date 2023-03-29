import Order from "../models/orders.js";

export const createOrder = async (req, res, next) => {
  const newOrder = await Order.create({
    ...req.body,
  });
  newOrder.save();

  res.status(200).json(newOrder);
};

export const getOrder = async (req, res, next) => {
  try {
    const allOrder = await Order.find().sort({
      updatedAt: "-1",
    });
    res.status(200).json({
      order: allOrder,
    });
  } catch (error) {
    res.status(404).json("error");
  }
};
