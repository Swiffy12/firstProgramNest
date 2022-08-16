import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getAllCats() {
      return 'Список всех котов ;)';
    }

    addCats(cat) {
      return `Кот ${cat.name} добавлен`;
    }
}
