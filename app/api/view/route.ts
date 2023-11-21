import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const views = await prisma.view.findMany({
      where: { userId: currentUser.id },
    });

    return NextResponse.json(views);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: any) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { videoId } = body;

    const view = await prisma.view.create({
      data: { userId: currentUser.id, videoId },
    });

    return NextResponse.json(view);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(request: any) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { viewId } = body;

    const view = await prisma.view.delete({
      where: { id: viewId },
    });

    return NextResponse.json(view);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
