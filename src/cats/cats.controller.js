import { Controller, Dependencies, Get, Post, Body, Bind } from '@nestjs/common';
import { CatsService } from './cats.service'

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {

	constructor(CatsService) {
		this.CatsService = CatsService;
	}

	@Get()
	getAll() {
		return this.CatsService.getAllCats();
	}

	@Post()
	@Bind(Body())
	addOne(cat) {
		/* пример входных данных в payload
{
"id": 5,
"name": "Жорик",
"breed": "Американская",
"color": "Серый",
"human_id": 2
}
		*/
		return this.CatsService.addCats(cat);
	}
}
