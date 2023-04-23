import { Inject, Injectable } from '@nestjs/common';
import {
  DATABASE_PROVIDER,
  IDatabaseProvider,
} from '../../database/database.provider';
import { AService } from '../a/a.service';
import { BaseEntityService } from '../base-entity.service';

/* Stating the AService dependency after IDatabaseProvider injects
  the singleton AService instance exported in AModule */

@Injectable()
export class CService extends BaseEntityService {
  constructor(
    @Inject(DATABASE_PROVIDER) public database: IDatabaseProvider,
    public aService: AService,
  ) {
    super(database);
  }
}
