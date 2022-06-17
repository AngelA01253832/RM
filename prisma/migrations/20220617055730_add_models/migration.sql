/*
  Warnings:

  - Added the required column `KnowTrainer` to the `Coach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduler` to the `Coach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalvalue` to the `WorkoutToDo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indications` to the `WorkoutToDo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coach" ADD COLUMN     "KnowTrainer" TEXT NOT NULL,
ADD COLUMN     "scheduler" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkoutToDo" ADD COLUMN     "goalvalue" INTEGER NOT NULL,
ADD COLUMN     "indications" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "GlobalWorkout" (
    "id" TEXT NOT NULL,
    "indications" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "goalvalue" "Enum_Goal" NOT NULL,
    "coachId" TEXT NOT NULL,

    CONSTRAINT "GlobalWorkout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GlobalWorkout" ADD CONSTRAINT "GlobalWorkout_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
