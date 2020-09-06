import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './courses/course.entity';

import { CourseModule } from './courses/courses.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test1',
      entities: [Course],
      synchronize: true,
    }),
   CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
