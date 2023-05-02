import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { title, duration, cover, price, locations } = req.body;

      const result = await prisma.guides.create({
        data: {
          title,
          duration,
          cover,
          price,
        },
      });

      await prisma.guideLocations.createMany({
        data: locations.map((loc: any) => {
          return {
            ...loc,
            guidesId: result.id,
          };
        }),
      });

      res.status(200).json(result);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
