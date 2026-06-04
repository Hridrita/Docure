import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f4f3] px-4 text-center">
      
      <div className="text-[#4A6B6F] mb-6">
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <h1 className="text-6xl font-extrabold text-[#4A6B6F] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#1a2e2f] mb-2">Page Not Found</h2>
      <p className="text-[#6b8487] mb-8 max-w-md">
        Sorry, the page you are looking for could not be found. It might have been removed or the link might be broken.
      </p>

      <Link 
        href="/"
        className="px-8 py-3 bg-[#4A6B6F] hover:bg-[#3d5a5e] text-white rounded-xl font-medium transition-all duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}