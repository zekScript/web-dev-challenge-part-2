
import { prisma } from "@/lib/db"
import Link from "next/link"
const Cart: React.FC = async () => {


const productLists = await prisma.product.findMany()


    return(
        <>
        <h1>Your cart</h1>

        {productLists.map((productList) => (
            
            <div key={productList.id} className="w-full h-full ">
                <div>
                    <Link href={`/products/${productList.id}`}>
                    <h1>Order by:        {/* Get current user */}                    </h1>
                    <p>Automobilio name: {productList.productName}</p>
                    <p>Automobilio modelis: {productList.productModel}</p>
                    <p>Automobilio aprašymas: {productList.aboutProduct}</p>
                    {/* <p>užsakymo Data: {productList.orderDate as string}</p> */}
                    </Link>
                    



                </div>
            </div>
        ))}
        
        </>
    )
}

export default Cart;