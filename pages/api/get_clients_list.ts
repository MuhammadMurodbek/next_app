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
        where: {
          status:
            req.query.status == "all" ? undefined : String(req.query.status),
        },
        include: {
          Users: true,
        },
        take: 10,
        skip: (Number(req.query.skip) - 1) * 10 || 0,
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: error });
  }
}
