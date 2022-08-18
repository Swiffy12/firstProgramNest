import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
	imports: [PrismaModule],
	controllers: [CatsController],
	providers: [CatsService],
})
export class CatsModule {}