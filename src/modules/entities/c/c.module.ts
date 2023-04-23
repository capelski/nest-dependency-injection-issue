import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { AModule } from '../a/a.module';
import { CService } from './c.service';

@Module({
  imports: [AModule, DatabaseModule],
  providers: [CService],
  exports: [CService],
})
export class CModule {}
