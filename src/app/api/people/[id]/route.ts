import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  
  if (!response.ok) {
    return NextResponse.error();
  }

  const data = await response.json();
  
  return NextResponse.json({ data });
}