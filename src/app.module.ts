import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './modules/entities/a/a.module';
import { BModule } from './modules/entities/b/b.module';
import { CModule } from './modules/entities/c/c.module';

@Module({
  imports: [AModule, BModule, CModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
