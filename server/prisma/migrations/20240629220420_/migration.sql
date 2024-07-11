/*
  Warnings:

  - You are about to drop the column `sale_date` on the `Sale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sale" RENAME COLUMN "sale_date" TO "saleDate";
