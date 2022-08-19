import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
@Dependencies(PrismaService)
export class CatsService {

    constructor(PrismaService) {
      this.prisma = PrismaService;
    }

    async getAllCats() {
      const allCats  = await this.prisma.Cat.findMany({
        orderBy: [
          {
            breed: 'desc',
          },
          {
            color: 'desc',
          }
        ]
      })
		  console.log(allCats);
      return allCats;
    }

    async addCats(cat) {
      const newCat = await this.prisma.Cat.create({
        data: cat
      })
      console.log(cat);
      return `Кот с именем ${newCat.name} добавлен`;
    }
}
