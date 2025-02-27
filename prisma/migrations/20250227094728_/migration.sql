/*
  Warnings:

  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productModel" TEXT NOT NULL,
    "aboutProduct" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productStatus" TEXT NOT NULL DEFAULT 'Laukiama',

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
