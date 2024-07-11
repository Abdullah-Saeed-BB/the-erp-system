/*
  Warnings:

  - You are about to drop the column `left` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "left";

-- AlterTable
ALTER TABLE "SalesRep" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
