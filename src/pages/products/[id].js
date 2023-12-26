import { stripe } from "src/utils/stripe";

export default function ProductPage( {product}) {
    console.log(product);
    return <div>product</div>;
}

export async function getStaticPaths() {
   const inventory =  await stripe.products.list()
   const paths = inventory.data.map(product => ({
        params: { id: product.id}
   }))

   return {
    paths,
    fallback: "blocking"
   }
}

export async function getStaticProps( {params} ) {
     //here we going to get indivudal products data
     const inventory = await stripe.products.list({
        expand: ["data.default_price"],
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
       const product = products.find(product => product.id === params.id);

       return {
        props: {
             product,
         },
        };
}