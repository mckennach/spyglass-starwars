import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  // let response;
  // if(id === 'all') {
  //   response = await fetch(`https://swapi.dev/api/planets/`);
  // } else if (id.includes('page')) {
  //   response = await fetch(`https://swapi.dev/api/planets/?${id}`);
  // } else {
  //   response = await fetch(`https://swapi.dev/api/planets/${id}`);
  // }

  // const response = id === 'all' ? await fetch(`https://swapi.dev/api/planets/`) : await fetch(`https://swapi.dev/api/planets/?${id}`);
  
  
  if (!response.ok) {
    return NextResponse.error();
  }

  const data = await response.json();
  console.log(data)
  return NextResponse.json({ data });
}