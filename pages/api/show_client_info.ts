import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.clients.findUnique({
        where: {
          id: Number(req.query.clientId),
        },
        include: {
          Users: true,
        },
      });
      return res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: err });
    }
  }
}
