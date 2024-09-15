import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // Ensure this is set in your .env.local
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const input = {
      prompt,
      num_outputs: 1,
      aspect_ratio: "1:1",
      output_format: "webp",
      output_quality: 80,
    };

    const output = await replicate.run("black-forest-labs/flux-schnell", { input });

    if (Array.isArray(output) && output.length > 0) {
      const imageUrl = output[0]; // Get the first generated image URL
      return NextResponse.json({ imageUrl });
    } else {
      return NextResponse.json({ error: "No image URL returned from Replicate API" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
  }
}
