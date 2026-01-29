import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-black">
            <header className="w-full border-b border-zinc-100 dark:border-zinc-800">
                <div className="mx-auto max-w-[1650px] px-6 md:px-12">
                    <Navbar />
                </div>
            </header>
            <main className="flex-1 w-full">
                <div className="mx-auto max-w-[1650px] px-6 py-10 md:px-12 lg:py-16">
                    {children}
                </div>
            </main>
            <footer className="w-full border-t border-zinc-100 dark:border-zinc-800">
                <div className="mx-auto max-w-[1650px] px-6 py-10 md:px-12">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Wrapper;