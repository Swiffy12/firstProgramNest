import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
@Dependencies(PrismaService)
export class CatsService {

    constructor(PrismaService) {
      this.prisma = PrismaService;
    }

    async getCatsByFilter(req) {
      const allCats = await this.prisma.Cat.findMany({
        where: {
            breed: req.query.breed,
            color: req.query.color,
        }
      })
      return allCats;
    }

    async getAllCats() {
      const allCats  = await this.prisma.Cat.findMany({
        orderBy: [
          {
            breed: 'asc',
          },
          {
            color: 'asc',
          }
        ]
      })
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
