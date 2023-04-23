import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { AService } from './a.service';

@Module({
  imports: [DatabaseModule],
  providers: [AService],
  exports: [AService],
})
export class AModule {}
