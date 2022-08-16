import { Module } from '@nestjs/common';
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';

@Module({
	imports: [],
	controllers: [HumansController],
	providers: [HumansService],
})
export class HumansModule {}