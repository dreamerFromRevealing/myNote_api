import {forwardRef, Module} from '@nestjs/common';
import {FolderService} from './folder.service';
import {FolderResolver} from './folder.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Folder, FolderSchema} from "./folder.model";
import {DocumentModule} from "../document/document.module";
import {DocumentSchema} from "../document/document.model";
import {Document} from "../document/document.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Folder.name, schema: FolderSchema}, {name: Document.name, schema: DocumentSchema}]),
    forwardRef(() =>  DocumentModule)
  ],
  exports: [FolderService],
  providers: [FolderService, FolderResolver],
})
export class FolderModule {}
