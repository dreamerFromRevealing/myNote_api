import {forwardRef, Module} from '@nestjs/common';
import {FolderService} from './folder.service';
import {FolderResolver} from './folder.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Folder, FolderSchema} from "./folder.model";
import {DocumentModule} from "../document/document.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Folder.name, schema: FolderSchema}]),
    forwardRef(() =>  DocumentModule)
  ],
  exports: [FolderService],
  providers: [FolderService, FolderResolver],
})
export class FolderModule {}
