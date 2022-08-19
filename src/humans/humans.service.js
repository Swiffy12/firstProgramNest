import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
@Dependencies(PrismaService)
export class HumansService {
	
	constructor(PrismaService) {
		this.prisma = PrismaService;
	}

    async getAllpeople() {
		const allUsers  = await this.prisma.Human.findMany()
		return allUsers
	}
	
	async getCatsOfOnePerson(id) {
		const human = (await this.prisma.Human.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				Cat: true,
			}
		}))[0]
		return human
	}

	// async getCatsOfOnePerson(id) {
	// 	const human = await this.prisma.Human.findUnique({
	// 		where: {
	// 			id: Number(id),
	// 		},
	// 	})
	// 	const cats = await this.prisma.Cat.findMany({
	// 		where: {
	// 			human_id: Number(id),
	// 		},
	// 	})
	// 	const namesOfCats = await cats.map(a => ' ' + a.name);
	// 	return `Человек ${human.name} имеет ${cats.length} кота:${namesOfCats}`
	// }

	async walkWithCat(id, info) {
		const human = await this.prisma.Human.findUnique({
			where: {
				id: Number(id),
			},
		})
		const cats = await this.prisma.Cat.findMany({
			where: {
				human_id: Number(id),
			},
		})
		const namesOfCats = await cats.map(a => a.name);
		
		if (namesOfCats.includes(info.name)) {
			const walks = await this.prisma.Walks.create({
				data: {
					id: info.id,
					cat_id: info.cat_id,
					date: new Date(Date.now()),
				},
			})
			return `Человек ${human.name} погулял с котом ${info.name} в ${new Date(Date.now())}`
		} else {
			return `У человека ${human.name} нет кота ${info.name}`
		}
	}
}