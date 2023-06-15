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
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Clients" ("avatar", "full_name", "id", "mail", "organization", "phone_number", "userId") SELECT "avatar", "full_name", "id", "mail", "organization", "phone_number", "userId" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
