import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const user = prisma.user.findFirst();
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: "Error finding user" });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
