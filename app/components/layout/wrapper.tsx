import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Header: Fixed top for better mobile UX */}
            <header className="sticky top-0 z-50 w-full border-b border-border-brand bg-background/80 backdrop-blur-md">
                <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
                    <Navbar />
                </div>
            </header>

            {/* Main Content Area: Responsive Padding */}
            <main className="flex-1 w-full">
                <div className="mx-auto max-w-[1650px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
                    {children}
                </div>
            </main>

            {/* Footer: Consistent Width */}
            <footer className="w-full border-t border-border-brand bg-zinc-50 dark:bg-zinc-900/30">
                <div className="mx-auto max-w-[1650px] px-4 py-10 sm:px-6 lg:px-12">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Wrapper;