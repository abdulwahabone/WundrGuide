import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { title, cover, userEmail } = req.body;
      // const createGuide = await prisma.guides.create({
      //   data: {
      //     title,
      //     cover,
      //     userEmail,
      //   },
      // });

      res.status(201).json({});
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
