import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { name, email, role } = body;

    const existingUser = await db.myUser.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    if (!name || !email || !role) {
      return new NextResponse("Missing fields", { status: 400 });
    }
    const user = await db.myUser
      .create({
        data: {
          name,
          email,
          role: role.toUpperCase(),
        },
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(user);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse("Success", { status: 200 });
}
