export default function Overview() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3a4960] mb-8">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-[#3a4960] mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Easy to use interface</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Responsive design</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Secure data handling</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">24/7 support available</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-[#3a4960] mb-6">Statistics</h2>
            <div className="space-y-6">
              <div className="bg-white border border-[#d5d5d2] rounded-xl p-6">
                <p className="text-sm font-medium text-[#913f4f] mb-1">Active Users</p>
                <p className="text-3xl font-bold text-black">1,234</p>
              </div>
              <div className="bg-white border border-[#d5d5d2] rounded-xl p-6">
                <p className="text-sm font-medium text-[#913f4f] mb-1">Total Projects</p>
                <p className="text-3xl font-bold text-black">567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 