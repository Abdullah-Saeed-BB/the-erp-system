/*
  Warnings:

  - You are about to drop the column `commission_rate` on the `SalesRep` table. All the data in the column will be lost.
  - Added the required column `commissionRate` to the `SalesRep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SalesRep" RENAME COLUMN "commission_rate" TO "commissionRate";
