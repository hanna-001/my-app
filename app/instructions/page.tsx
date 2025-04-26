export default function Instructions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3a4960] mb-8">Instructions</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-black mb-6">
              Welcome to the Instructions page. Here you&apos;ll find detailed guidance on how to use our application.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3a4960] flex items-center justify-center text-white font-semibold mr-3">1</span>
                <span className="text-black">Read through all instructions carefully</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3a4960] flex items-center justify-center text-white font-semibold mr-3">2</span>
                <span className="text-black">Follow the guidelines provided</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3a4960] flex items-center justify-center text-white font-semibold mr-3">3</span>
                <span className="text-black">Contact support if you need help</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 