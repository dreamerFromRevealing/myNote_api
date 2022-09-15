import {forwardRef, Module} from '@nestjs/common';
import {WorkspaceService} from './workspace.service';
import {MongooseModule} from "@nestjs/mongoose";
import {DocumentModule} from "../document/document.module";
import {Workspace, WorkspaceSchema} from "./workspace.model";
import {FolderModule} from "../folder/folder.module";
import {WorkspaceResolver} from './workspace.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Workspace.name, schema: WorkspaceSchema}]),
    forwardRef(() => DocumentModule),
    forwardRef(() => FolderModule)
  ],
  exports: [WorkspaceService],
  providers: [WorkspaceService, WorkspaceResolver]
})
export class WorkspaceModule {}
