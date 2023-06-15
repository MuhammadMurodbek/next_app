import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const path = req.url;

  res.status(200).json({ path });
}
