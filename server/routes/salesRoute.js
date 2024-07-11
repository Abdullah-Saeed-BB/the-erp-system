const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const sales = await prisma.sale.findMany({
    orderBy: { createdAt: "desc" },
    include: { product: true, salesRep: true },
  });

  res.json(sales);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const sale = await prisma.sale.findFirst({
    where: { id },
    include: { product: true, salesRep: true },
  });

  if (!sale)
    return res.status(404).json({
      error: "Sorry, We didn't find what you looking for.",
    });

  res.json(sale);
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const { price: productPrice } = await prisma.product.findFirst({
      select: { price: true },
      where: { id: body.productId },
    });

    const newSale = await prisma.sale.create({
      data: { ...body, totalPrice: body.quanity * productPrice },
      include: { product: true, salesRep: true },
    });

    res.json(newSale);
  } catch {
    res.json({ error: "There is error happend during create new sale" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSale = await prisma.sale.update({
      where: { id },
      data: req.body,
    });
    res.json({ updatedSale, id });
  } catch (err) {
    res
      .status(404)
      .json({ error: `There is error occurs during updating the sale` });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSale = await prisma.sale.delete({
      where: { id },
    });

    res.json(deletedSale);
  } catch (err) {
    res.status(404).json({ msg: `Error for this ${id} id` });
  }
});

module.exports = router;
