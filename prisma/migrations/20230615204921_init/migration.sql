-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
