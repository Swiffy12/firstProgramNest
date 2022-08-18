import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
@Dependencies(PrismaService)
export class HumansService {
	constructor(PrismaService) {
		this.prisma = PrismaService;
	}

    async getAllpeople() {
		// const allUsers  = await this.prisma.Human.findMany()
		// return allUsers
		return 'asdasda'
	}

	getCatsOfOnePerson(id) {
		return `У человека с id:${id} столько-то котов`
	}

	walkWithCat(id, cat) {
		return `Человек с id:${id} погулял с котом ${cat.name}`
	}
}