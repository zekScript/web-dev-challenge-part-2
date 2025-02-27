"use client";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/server/currentUser";
import Link from "next/link";
const Cart: React.FC = async () => {
  const productLists = await prisma.product.findMany();

  // const getAuthor = await prisma.users.findUnique({
  //     where: {
  //       id: user?.id,
  //     },
  //     include: {
  //       products: true, // All posts where authorId == 20
  //     },
  //   });

  const user = getCurrentUser();

  return (
    <>
      <h1>Your cart:</h1>
      <h1>Order by:{user?.name}</h1>

      <h1>Your order is:</h1>
      {productLists.map((productList) => (
        <div key={productList.id} className="w-full h-full ">
          <div>
            <Link href={`/products/${productList.id}`}>
              {productList.aboutProduct}
              {productList.productModel}
              {productList.productName}
              {productList.productStatus}
            </Link>
          </div>
        </div>
      ))}
      <button>Vikdyti</button>
    </>
  );
};

export default Cart;
