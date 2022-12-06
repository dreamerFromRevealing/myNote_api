import {Body, Controller, Post} from '@nestjs/common';
import {TodoCollectionService} from "./todo-collection.service";
import {UpdateTODOCollectionPositionDto} from "./dto/update-position.dto";

@Controller('todo-collection')
export class TodoCollectionController {
  constructor(private todoCollectionService: TodoCollectionService) {}

  // @Post()
  // updatePosition(@Body() payload: UpdateTODOCollectionPositionDto[]) {
  //   return this.todoCollectionService.updatePosition(payload)
  // }
}
