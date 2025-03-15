'use client'
import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [audioSrc, setAudioSrc] = useState(null);
  const onSubmit = async (event) => {
    setIsAudioLoading(true)
    event.preventDefault()
    console.log(text)
    let result = await fetch("/api/generateAudio", {
      method: "POST",
      body: JSON.stringify({
        text
      })
    })
    const data = await result.json()
     if (data.audio) {
        console.log('setting audio source')
        setAudioSrc(`data:audio/mp3;base64,${data.audio}`);
      } else {
        setError("Failed to generate audio. Please try again.");
      }
    console.log(data.message)
    setIsAudioLoading(false)
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-xl">
        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          AI-Powered Podcast Generator
        </h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <textarea
            placeholder="Enter your text here..."
            rows="4"
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 p-3 text-white focus:border-blue-500 focus:outline-none"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            Generate Audio
          </button>
        </form>
        {isAudioLoading ? 'Loading...' : ''}
        {audioSrc && (
          <div className="mt-4 flex flex-col items-center">
            <p className="text-white">Your Generated Audio:</p>
            <audio controls className="mt-2 w-full">
              <source src={audioSrc} type="audio/mp3" key={audioSrc} />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}
