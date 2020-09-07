import { Injectable } from '@nestjs/common';
import Course  from './course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';


@Injectable()
export class CoursesService{
    constructor(
        @InjectRepository(Course)
        private courseRepository : Repository<Course> 
    ){}

    async findAll(): Promise<Course[]>{
        return this.courseRepository.find();
    }

    async create(CreateCourseDto: CreateCourseDto) {
        return this.courseRepository.save(CreateCourseDto);
    }

        /*
        return [
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
        */
    }


