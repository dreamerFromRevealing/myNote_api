import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Folder, FolderDocument} from "./folder/folder.model";
import {Model} from "mongoose";

@Injectable()
export class AppService {
  constructor(@InjectModel(Folder.name) private folderModel: Model<FolderDocument>) {}
  getHello(): string {
    return 'Hello World!';
  }
}
