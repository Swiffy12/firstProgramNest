import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
@Dependencies(PrismaService)
export class CatsService {

    constructor(PrismaService) {
      this.PrismaService = PrismaService;
    }

    getAllCats() {
      return 'Список всех котов ;)';
    }

    addCats(cat) {
      return `Кот ${cat.name} добавлен`;
    }
}
