export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Fenebris India Pvt Ltd.
      </div>
    </footer>
  );
}