-- CreateTable
CREATE TABLE "Absence" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT,
    "startPeriod" TEXT,
    "endDate" TIMESTAMP(3),
    "endTime" TEXT,
    "endPeriod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absence_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
