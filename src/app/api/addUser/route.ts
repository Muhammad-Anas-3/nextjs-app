import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: NextApiResponse) {
  const { email, name, gender } = await req.json();

  const user = await prisma.user.create({
    data: {
      email,
      name,
      gender,
    },
  });

  return NextResponse.json({ user });
}
