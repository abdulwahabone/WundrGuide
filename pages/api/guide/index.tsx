import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { title, duration, cover, price, locations } = req.body;

      const id = uuidv4();

      const result = await prisma.guides.create({
        data: {
          id,
          title,
          duration: parseInt(duration),
          cover,
          price,
        },
      });

      await prisma.guideLocations.createMany({
        data: locations.map((loc: any) => {
          return {
            ...loc,
            guidesId: id,
          };
        }),
      });

      res.status(200).json(result);
      break;

    case "GET":
      const guides = await prisma.guides.findMany({
        include: { locations: true },
      });

      res.status(200).json(guides);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
