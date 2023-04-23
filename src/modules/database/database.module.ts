import { Module } from '@nestjs/common';
import { DATABASE_PROVIDER, DatabaseProvider } from './database.provider';

@Module({
  providers: [
    {
      provide: DATABASE_PROVIDER,
      useClass: DatabaseProvider,
    },
  ],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule {}
