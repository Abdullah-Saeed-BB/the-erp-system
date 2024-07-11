/*
  Warnings:

  - You are about to drop the column `saleDate` on the `Sale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sale" RENAME COLUMN "saleDate" TO "createdAt"
