/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Clients" ("avatar", "createdAt", "full_name", "id", "mail", "organization", "phone_number", "status", "userId") SELECT "avatar", "createdAt", "full_name", "id", "mail", "organization", "phone_number", "status", "userId" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Users" ("avatar", "createdAt", "full_name", "id") SELECT "avatar", "createdAt", "full_name", "id" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
