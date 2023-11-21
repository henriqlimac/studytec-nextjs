import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { name } = body;

    const video = await prisma?.matter.create({
      data: { name },
    });

    return NextResponse.json(video);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(request: any) {
  try {
    const matters = await prisma?.matter.findMany();

    return NextResponse.json(matters);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
