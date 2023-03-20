import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {LogbookFolder, LogbookFolderSchema} from "./logbook-folder.model";
import { LogbookFolderService } from './logbook-folder.service';
import { LogbookFolderResolver } from './logbook-folder.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: LogbookFolder.name, schema: LogbookFolderSchema}])
  ],
  controllers: [],
  providers: [LogbookFolderService, LogbookFolderResolver],
})
export class LogbookFolderModule {}
