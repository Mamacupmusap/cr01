import  Course  from './course.entity';
import { CoursesService } from './courses.service';
import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService){}

  @Get()
  async findAll():Promise<Course[]>{
    return this.courseService.findAll();
  }

  @Post()
  async create(@Body() CreateCourseDto:CreateCourseDto){
    if((CreateCourseDto.number!==undefined)&&(CreateCourseDto.title!==undefined)){
      const newCourse = this.courseService.create(CreateCourseDto);
      return newCourse;
    }else{
      throw new HttpException('Bad request',HttpStatus.BAD_REQUEST);
    }
  }
}
