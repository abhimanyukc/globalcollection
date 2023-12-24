//we r going to bring in stripe and products data  using common js syntax instead of es modules
//require server side stripe package 
const Stripe = require('stripe');

// //we use node library of stripe to create our products
// const product = await stripe.products.create({
//     name: 'Gold Plan',
//   });

const products = require('./products');

//to setup stripe we call it like a function
//we r not going to insert secret key using process.env.local since 
//this is one operation we will insert product like this and deleting secret key after product added
const stripe = Stripe(
    "sk_test_51OQogSHwK2VRnWDKFqdCbyrozfi4sJRz1nnWGq4RpsAczfgglEIReUQ8zD040nxwdWhHqxUTMNvthsU4hxpE9GfH00bmwj09U3"
);

//this is what we can use to interact with stripe api

//call async await function  to create products with different property
(async () => {
   for (const product of products) {
    const stripeProduct =  await stripe.products.create({
        name: product.name,
        default_price_data: {
            currency: product.currency,
            unit_amount_decimal: product.price
        },
        images: [product.image],
     });
     console.log(stripeProduct.name, ":", stripeProduct.id );
   }
})();