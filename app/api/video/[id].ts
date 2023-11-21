import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: any, response: any) {
  try {
    const { id } = request.query;
    const video = await prisma?.video.findUnique({
      where: { id },
    });

    return NextResponse.json(video);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
