import { Controller, Get, Bind, Dependencies, Param, Body, Put } from '@nestjs/common';
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

	@Put(':id')
	@Bind(Param('id'), Body())
	walk(id, cat) {
		return this.HumansService.walkWithCat(id, cat);
	}
}
