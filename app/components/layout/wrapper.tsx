import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        /* The bg-background and text-foreground classes use your CSS variables which update on theme change */
        <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
            
            {/* Header: Uses backdrop-blur and background variable with opacity */}
            <header className="sticky top-0 z-90 w-full border-b border-border-brand bg-background/80 backdrop-blur-md transition-colors">
                <div className="mx-auto">
                    <Navbar />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full">
                <div className="flex min-h-screen flex-col">
                    {children}
                </div>
            </main>

            {/* Footer: Removed bg-zinc-50 to ensure it uses the dark/light background variable */}
            <footer className="w-full border-t border-border-brand bg-background transition-colors">
                <div className="mx-auto max-w-[1650px] px-4 py-10 sm:px-6 lg:px-12">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Wrapper;