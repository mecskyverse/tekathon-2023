import OpenAI from "openai";
import { NextResponse } from "next/server";


export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
  });
  const body = await req.json()
  console.log(body)
    const prompt = body.prompt || "";

    if (!process.env.OPENAI_API_KEY ) {
      return NextResponse.json({error: {message: "Api key is not provided!"}});
    }

    if (prompt.trim().length === 0) {
      return NextResponse.json({error: {message: "Provide prompt value!"}});
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
          {
            role: 'user',
            content: prompt,
          },
          {
            role: 'user',
            content: 'do not use \n I will do formatting myself',
          },
        ],
        temperature: 0.7,
        max_tokens: 2048
      });
      console.log(completion.choices[0].message.content)
      return NextResponse.json({result: completion.choices[0].message.content});
    } catch (e) {
      return NextResponse.json({error: {message: e.message}});
    }

    return NextResponse.json({success: 'true'})

}