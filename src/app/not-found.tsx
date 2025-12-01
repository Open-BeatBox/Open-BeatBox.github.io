import Link from "next/link";

export default function NotFound() {
  return (
    <div className="glass-panel p-8 text-center">
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-slate-300">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 inline-block text-blue-300 hover:text-blue-200">
        Return home
      </Link>
    </div>
  );
}
