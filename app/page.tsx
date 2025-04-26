import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#3a4960] mb-6">Welcome to My App</h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            A modern web application built with Next.js and Tailwind CSS.
          </p>
        </div>
      </main>
    </div>
  );
}
