-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "catId" INTEGER NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Human" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Human_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walks" (
    "id" SERIAL NOT NULL,
    "cat_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Walks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Human"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Walks" ADD CONSTRAINT "walks_fk" FOREIGN KEY ("cat_id") REFERENCES "Cat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
