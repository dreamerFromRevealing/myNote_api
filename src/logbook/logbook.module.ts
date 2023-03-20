import {Module} from '@nestjs/common';
import {LogbookService} from './logbook.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Logbook, LogbookSchema} from "./logbook.model";
import { LogbookResolver } from './logbook.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Logbook.name, schema: LogbookSchema}])
  ],
  providers: [LogbookService, LogbookResolver]
})
export class LogbookModule {}
