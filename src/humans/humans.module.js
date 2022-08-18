import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';

@Module({
	imports: [PrismaModule],
	controllers: [HumansController],
	providers: [HumansService],
})
export class HumansModule {}