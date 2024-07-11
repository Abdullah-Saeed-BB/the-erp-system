/*
  Warnings:

  - Added the required column `left` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "left" INTEGER NOT NULL;
