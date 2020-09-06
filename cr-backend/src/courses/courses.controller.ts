import  Course  from './course.entity';
import { CoursesService } from './courses.service';
import { Get, Controller } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService){}

  @Get()
  async findAll():Promise<Course[]>{
    return this.courseService.findAll();
  }
}
