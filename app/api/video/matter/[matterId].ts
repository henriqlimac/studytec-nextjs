import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: any, response: any) {
  try {
    const { matterId } = request.query;

    const videos = await prisma?.video.findMany({
      where: { matterId },
    });

    return NextResponse.json(videos);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
