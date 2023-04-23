import { Inject, Injectable } from '@nestjs/common';
import {
  DATABASE_PROVIDER,
  IDatabaseProvider,
} from '../../database/database.provider';
import { AService } from '../a/a.service';
import { BaseEntityService } from '../base-entity.service';

/* Stating the AService dependency before IDatabaseProvider injects
  a new instance of AService different from the one exported in AModule */

@Injectable()
export class BService extends BaseEntityService {
  constructor(
    public aService: AService,
    @Inject(DATABASE_PROVIDER) public database: IDatabaseProvider,
  ) {
    super(database);
  }
}
