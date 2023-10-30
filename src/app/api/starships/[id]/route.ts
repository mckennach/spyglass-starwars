import { NextResponse } from "next/server";

export async function DELETE(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  
  
  return NextResponse.json({ data: id });
}