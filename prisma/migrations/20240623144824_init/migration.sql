/*
  Warnings:

  - Added the required column `userId` to the `Token1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token1" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Token1" ADD CONSTRAINT "Token1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
