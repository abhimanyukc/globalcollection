import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { CartProvider } from 'use-shopping-cart';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export default function App({ Component, pageProps }) {
  //App layout wraps all of our component
  return ( 
  <CartProvider stripe={stripeKey} 
  cartMode='checkout-session' currency="NPR">
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
  </CartProvider>
  );
}
