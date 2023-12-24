// we accept <Component/> in _app.js and display it using special prop called the children prop in plain javascript
export default function AppLayout({ children}) {
    return (
        <div className="min-h-screen flex flex-col">
             <header>header</header>
            <main className="flex-grow bg-[#f7f7f7]">
                {/* within main element we going to display content of each page */}
                {children}
            </main>  
            <footer>footer</footer>     
        </div>
    )
}