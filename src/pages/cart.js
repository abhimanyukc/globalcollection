import Link from "next/link"
import CartProduct from "src/components/CartProduct"
import { useShoppingCart } from "use-shopping-cart"

export default function  CartPage()  {
    const { cartCount ,cartDetails,formattedTotalPrice, clearCart} = useShoppingCart();
     console.log(cartDetails)
    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
           {cartCount > 0 ? (
                  <>
                   <h2 className="text-4xl font-semibold">
                Your Shopping Cart 
               </h2>
               <p className="mt-1 text-xl">
                {cartCount} items{" "}
                <button className="opacity-50 hover:opacity-100 text-base capitalize underline" 
                onClick={() => clearCart()}> Clear all</button>
                </p>
              
                  </>
           ) : (
            <>
               <h2 className="text-4xl font-semibold">
                Your Shopping Cart is Empty
               </h2>
               <p className="mt-1 text-xl">
                 Check Out our products{""}
                <Link href="/" className="text-red-500 underline">
                    here!
                </Link>
               </p>
            </>
           )}
           
           {/* code for having items */}
          {cartCount > 0  && (
            <div className="mt-12 space-y-4">
                {Object.entries(cartDetails).map(([productId, product]) => (
                    <CartProduct key={productId} product={product} />
                ))}   
                <div className="flex flex-col items-end border-t py-4 mt-8">
                    <p className="text-xl">
                        Total:{""}
                    <span className="font-semibold">{formattedTotalPrice}</span>
                    </p>
                    <button className="border rounded py-2 px-6 bg-yellow-500 
                    hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600
                    focus:ring-4 focus:ring-opacity-50 focus:ring-yellow-500 text-white
                    transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:bg-yellow-500 mt-4 max-w-max">
                     Go to Checkout
                    </button>
                </div>
                </div>
          )}
        </div>
    )
}