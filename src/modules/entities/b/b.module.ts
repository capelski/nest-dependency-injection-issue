import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { AModule } from '../a/a.module';
import { BService } from './b.service';

@Module({
  imports: [AModule, DatabaseModule],
  providers: [BService],
  exports: [BService],
})
export class BModule {}
