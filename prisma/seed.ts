import { PrismaClient } from "@prisma/client";
import { clients } from "./clients";

const prisma = new PrismaClient();

async function clients_seed() {
  for (let client of clients) {
    await prisma.clients.create({
      data: client,
    });
  }
}

clients_seed()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
