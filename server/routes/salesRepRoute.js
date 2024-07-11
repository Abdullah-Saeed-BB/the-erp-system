const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const salesReps = await prisma.salesRep.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json(salesReps);
});

router.get("/countSales", async (req, res) => {
  const salesReps = await prisma.salesRep.findMany({
    select: {
      id: true,
      name: true,
      sales: true,
    },
  });

  res.json(salesReps);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const salesRep = await prisma.salesRep.findFirst({ where: { id } });

  if (!salesRep)
    return res.status(404).json({
      error: "Sorry, We didn't find what you looking for.",
    });

  res.json(salesRep);
});

router.post("/", async (req, res) => {
  try {
    const newSalesRep = await prisma.salesRep.create({ data: req.body });

    res.json(newSalesRep);
  } catch {
    res.json({ error: "There is error occurs during creating new sales rep" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSalesRep = await prisma.salesRep.update({
      where: { id },
      data: req.body,
    });

    res.json(updatedSalesRep);
  } catch (err) {
    res
      .status(404)
      .json({ error: "There is error occurs during updating sales rep" });
  }
});

router.delete("/:id", async (req, res) => {
  // const { id } = req.params;
  // try {
  //   const deletedSalesRep = await prisma.salesRep.delete({
  //     where: { id },
  //   });

  //   res.json(deletedSalesRep);
  // } catch (err) {
  //   res.status(404).json({ msg: `Error for this ${id} id` });
  // }
  const { id } = req.params;
  const countSales = await prisma.sale.count({
    where: { salesRepId: { equals: id } },
  });
  if (countSales > 0) {
    return res.status(404).json({
      error:
        "This sales rep used in some sales. You have to delete these sales first.",
    });
  }
  const deletedSalesRep = await prisma.salesRep.delete({
    where: { id },
  });

  res.json(deletedSalesRep);
});

module.exports = router;
