//creating backend dynamic route having query paramter id

import { stripe } from "src/utils/stripe";
export default async function handler(req, res) {
     if (req.method === "GET") {
       // make sure to retrieve the id without any extra spaces:
        const id = req.query.id?.trim();

   
    try {
         if (!id.startsWith("cs_")) {
            throw new Error("Incorrect checkout session id");
         }
        
        //use id in the API call:
         const checkoutSession = await stripe.checkout.sessions.retrieve(id);

        res.status(200).json(checkoutSession);
    } catch (error) {
       console.error(error);
       res.status(500).json({ statusCode: 500, message: error.message}); 

    }
}  else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");

} 
}
