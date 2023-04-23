import { Inject } from '@nestjs/common';
import { PlainLogger } from '../../plain-logger';
import {
  DATABASE_PROVIDER,
  IDatabaseProvider,
} from '../database/database.provider';

const logger = new PlainLogger('BaseEntityService');

export abstract class BaseEntityService {
  constructor(@Inject(DATABASE_PROVIDER) public database: IDatabaseProvider) {
    logger.warn(`Instantiating ${this.constructor.name}`);
  }
}
