import { ElevenLabsClient } from 'elevenlabs';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export default async function handler(req, res) {
  
  const text = JSON.parse(req.body).text
const audioStream = await getAudio(text);
    
  // Convert the stream to a Buffer
  const audioBuffer = await streamToBuffer(audioStream);
  
  // Encode the Buffer as Base64
  const base64Audio = audioBuffer.toString('base64');

  res.status(200).json({ audio: base64Audio });

}

const getAudio = async (text) => {
  console.log("text: ", text)
  return await client.textToSpeech.convert("21m00Tcm4TlvDq8ikWAM", {
    text: text
  });
}

// Helper function to convert stream to Buffer
const streamToBuffer = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
};