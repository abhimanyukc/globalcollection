import { Inter} from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

//Inter Needs to be called like a function and it accepts an options object
const inter = Inter({
    //we take subset property with array determine what alphabet u want like latin english
    subsets: ['latin'],
    variable: "--font-inter"
})

// we accept <Component/> in _app.js and display it using special prop called the children prop in plain javascript
export default function AppLayout({ children}) {
    return (
        <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
            <Meta />
            <Header />
            <main className="flex-grow bg-[#f7f7f7]">
                {/* within main element we going to display content of each page */}
                {children}
            </main>  
            <Footer/>    
        </div>
    )
}