import { Controller, Get, Bind, Dependencies, Param, Body, Post } from '@nestjs/common';
import { HumansService } from './humans.service'

@Controller('humans')
@Dependencies(HumansService)
export class HumansController {

	constructor(HumansService) {
		this.HumansService = HumansService;
	}
	
	@Get()
	getAll() {
		return this.HumansService.getAllpeople();
	}

	@Get(':id')
	@Bind(Param('id'))
	getById(id) {
		return this.HumansService.getCatsOfOnePerson(id);
	}

	@Post(':id')
	@Bind(Param('id'), Body())
	walk(id, info) {
		/* пример входных данных в payload
{
"id":1,
"cat_id":2,
"name":"Барсик"
}
		*/
		return this.HumansService.walkWithCat(id, info);
	}
}
