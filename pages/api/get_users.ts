import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await prisma.$transaction([
    prisma.users.findFirst(),
    prisma.users.findMany(),
  ]);
  //   const posts = await prisma.users.findMany();
  res.json(posts);
}
