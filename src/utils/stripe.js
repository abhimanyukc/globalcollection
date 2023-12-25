//this file to share stripe integn across multiple pages so we dont have to keep calling stripe function in seed.js

import Stripe from "stripe";

export  const stripe = Stripe(process.env.Stripe_SECRET_KEY);
