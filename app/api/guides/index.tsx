import prisma from "@/lib/prisma";

export async function getAllGuides() {
  const data = await prisma.guides.findMany({
    include: { locations: true },
  });
  return data;
}
