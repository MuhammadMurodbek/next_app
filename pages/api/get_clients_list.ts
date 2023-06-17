import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.clients.findMany();
    return res.status(201).json(data);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching posts" });
  }
}
