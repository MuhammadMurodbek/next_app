import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = req.body;
    const result = await prisma.users.create({
      data: body,
    });

    return res.json(result);
  } catch (err) {
    res.status(402).json({ err: "Error has occured while making a post" });
  }
}
