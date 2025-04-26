-- CreateTable
CREATE TABLE "Vacation" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "approvalStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vacation" ADD CONSTRAINT "Vacation_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
