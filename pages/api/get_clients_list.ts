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
        // where: {
        //   full_name: {
        //     startsWith: "Nock",
        //   },
        //   createdAt:{

        //   }
        //   // id: 1,
        //   // full_name: "Nock Wayne",
        //   // createdAt: {
        //   //   gt: new Date(),
        //   // },
        //   // full_name: {
        //   //   search: 'cat | dog',
        //   // },
        //   // createdAt: {
        //   //   gte: new Date(
        //   //     "2020-03-19T14:21:00+0200"
        //   //   ) /* Includes time offset for UTC */,
        //   // },
        // },
        include: {
          Users: true,
        },

        take: 10,
        skip: (Number(req.query.skip) - 1) * 10 || 0,
      }),
    ]);

    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: error });
  }
}
