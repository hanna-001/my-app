export default function Input() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-[#3a4960] mb-8 text-center">Contact Us</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-[#d5d5d2] focus:ring-2 focus:ring-[#3a4960] focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-[#d5d5d2] focus:ring-2 focus:ring-[#3a4960] focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3a4960] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#913f4f] transform hover:scale-[1.02] transition-all duration-200 ease-in-out shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 