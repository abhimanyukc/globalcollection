import ProductCard from "src/components/ProductCard";
import { stripe } from "src/utils/stripe"

export default function Home({ products  }) {
 
  return (
    //stucture for each of our product card
   <div className="container xl:max-w-screen mx-auto py-12 px-6">
    <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {products.map((product, index) => (
        <ProductCard key = {product.id} product={product} index={index}/>
      ))}
      {/* within this div we using css grid,we'll 
      create grid of elements where on the largest 
      breakpoint we will have four cards and get 
      smaller it will be three two one card on mobile*/}
    </div>
   </div>
  );
}

export async function getStaticProps() {
   const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
   });

   //maping inventory product data
   const products = inventory.data.map((product) =>{
    const price = product.default_price;
      return {
        currency: price.currency,
        id: product.id,
        name: product.name,
        price:price.unit_amount,
        image:product.images[0]
      };
   });

  return {
    //return any props data as its own object right here
    //and what we want to pass props to home
     props: {
      products,
    },
};
}
