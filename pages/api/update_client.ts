import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { id, avatar, status, userId } = req.body;
      const data = await prisma.clients.update({
        where: {
          id: Number(req.body.id),
        },
        data: {
          // avatar: avatar,
          id: id,
          status: status,
          // userId: userId,
        },
      });
      return res.status(201).json(data);
    } catch (err) {
      res.status(403).json({ err: err });
    }
  }
}
