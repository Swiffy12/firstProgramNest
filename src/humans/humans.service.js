import { Injectable } from '@nestjs/common';

@Injectable()
export class HumansService {
    getAllpeople() {
		return 'Список всех людей'
	}

	getCatsOfOnePerson(id) {
		return `У человека с id:${id} столько-то котов`
	}

	walkWithCat(id, cat) {
		return `Человек с id:${id} погулял с котом ${cat.name}`
	}
}