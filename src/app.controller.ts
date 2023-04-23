import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AService } from './modules/entities/a/a.service';
import { BService } from './modules/entities/b/b.service';
import { CService } from './modules/entities/c/c.service';
import { PlainLogger } from './plain-logger';

const logger = new PlainLogger('AppController');

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly aService: AService,
    private readonly bService: BService,
    private readonly cService: CService,
  ) {
    logger.warn(
      `Is ${AService.name} instance the ${AService.name} singleton instance?
    ${BService.name}: ${this.aService === this.bService.aService}
    ${CService.name}: ${this.aService === this.cService.aService}`,
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
