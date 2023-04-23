import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDatabaseProvider {}

@Injectable()
export class DatabaseProvider implements IDatabaseProvider {}

export const DATABASE_PROVIDER = DatabaseProvider.name;
