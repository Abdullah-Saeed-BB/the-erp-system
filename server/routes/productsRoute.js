const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findFirst({ where: { id } });

  if (!product)
    return res.status(404).json({
      error: "Sorry, We didn't find what you looking for.",
    });

  res.json(product);
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await prisma.product.create({ data: { ...req.body } });

    res.json(newProduct);
  } catch {
    res.json({ error: "There is error occurs during creating new product" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: req.body,
    });

    res.json(updatedProduct);
  } catch (err) {
    res
      .status(404)
      .json({ error: `There is error occurs during updating sales rep` });
  }
});

router.delete("/:id", async (req, res) => {
  // const { id } = req.params;
  // try {
  //   const deletedProduct = await prisma.product.delete({
  //     where: { id },
  //   });

  //   res.json(deletedProduct);
  // } catch (err) {
  //   res.status(404).json({ msg: `Error for this ${id} id` });
  // }
  const { id } = req.params;
  const countSales = await prisma.sale.count({
    where: { productId: { equals: id } },
  });
  if (countSales > 0) {
    return res.status(404).json({
      error:
        "This product used in some sales. You have to delete these sales first.",
    });
  }
  const deletedProduct = await prisma.product.delete({
    where: { id },
  });

  res.json(deletedProduct);
});

module.exports = router;
