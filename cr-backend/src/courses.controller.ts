import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll():any{
    return[
      {
        id:'100',
        number:'01204111',
        title:'Computer and Programming'
      },
      {
        id:'200',
        number:'01204553',
        title:'Asdfs of sdaasdaff'
      },
      {
        id:'300',
        number:'01202335',
        title:'Lalaban'
      }
    ]
  }
}
