import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.$transaction([
      prisma.clients.count(),
      prisma.clients.findMany({
        take: 10,
        skip: (Number(req.query.skip) - 1) * 10 || 0,
      }),
    ]);

    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching clients" });
  }
}
