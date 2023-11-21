import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const videos = await prisma?.video.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(videos);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { name, url, matterId } = body;

    const video = await prisma?.video.create({
      data: { name, url, matterId },
    });

    return NextResponse.json(video);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
