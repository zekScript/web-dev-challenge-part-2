"use client";
import { prisma } from "@/lib/db";

export default async function ProductPage({ params } : {
    params: Promise<{ productsID: string}>;
}) {

  const product = await prisma.product.findUnique({
    where: {
      id: (await params).productsID,
    },
  });

  return (
    <>
      <p>Automobilio name: {product?.productName || null}</p>
      <p>Automobilio modelis: {product?.productModel}</p>
      <p>Automobilio aprašymas: {product?.aboutProduct}</p>
      <button>Add to Cart</button>
    </>
  );
}
