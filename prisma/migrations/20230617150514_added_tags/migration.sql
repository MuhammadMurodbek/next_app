/*
  Warnings:

  - Added the required column `updatedAt` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

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
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Clients" ("avatar", "full_name", "id", "mail", "organization", "phone_number", "status", "userId") SELECT "avatar", "full_name", "id", "mail", "organization", "phone_number", "status", "userId" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("avatar", "full_name", "id") SELECT "avatar", "full_name", "id" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
