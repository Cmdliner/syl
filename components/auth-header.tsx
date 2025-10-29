export default function AuthHeader() {
    return (
        <header className="flex items-center justify-between w-[90%] py-4 px-6 bg-white shadow rounded-md mx-auto">
            <a href="/" aria-label="Syl home" className="flex items-center gap-3">
                <svg
                    className="h-8 w-8 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <rect x="1" y="6" width="14" height="8" rx="1.5" fill="currentColor" />
                    <rect x="15" y="8" width="6" height="4" rx="0.75" fill="currentColor" />
                    <circle cx="7" cy="17.5" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="17.5" r="1.5" fill="currentColor" />
                </svg>

                <div>
                    <h1 className="text-lg font-semibold text-gray-900 leading-tight">Syl</h1>
                    <p className="text-xs text-gray-500">Logistics & delivery, simplified</p>
                </div>
            </a>

            <div className="flex items-center gap-3">
                <a
                    href="/help"
                    className="text-sm text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200/20 rounded px-2 py-1"
                >
                    Need help?
                </a>

                <button
                    type="button"
                    className="hidden sm:inline-flex items-center text-sm text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200/20 rounded px-2 py-1"
                    aria-label="Contact support"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M3 5v6a9 9 0 009 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-2">Support</span>
                </button>
            </div>
        </header>
    )
}