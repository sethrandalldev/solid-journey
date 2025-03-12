export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-xl">
        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          AI-Powered Podcast Generator
        </h1>
        <form className="space-y-4">
          <textarea
            placeholder="Enter your text here..."
            rows="4"
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 p-3 text-white focus:border-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            Generate Audio
          </button>
        </form>
      </div>
    </div>
  );
}
