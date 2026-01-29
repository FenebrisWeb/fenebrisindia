export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-primary">
        <p>© {new Date().getFullYear()} Fenebris India Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
}