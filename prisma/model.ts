import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface File {
  id: number;
  filename: string;
  path: string;
  createdAt: Date;
}

export async function createFile(
  filename: string,
  path: string
): Promise<File> {
  console.log(filename, path);
  //   const file = await prisma.file.create({
  //     data: {
  //       filename,
  //       path,
  //     },
  //   });
  //return file;
  return {
    id: 1,
    filename,
    path,
    createdAt: new Date(),
  };
}

// export async function getAllFiles(): Promise<File[]> {
//   const files = await prisma.file.findMany();
//   return files;
// }
