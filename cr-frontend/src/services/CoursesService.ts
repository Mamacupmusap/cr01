import { Course } from './../interfaces';
import { baseUrl } from './../config/const';

async function fetchCourse():Promise<Course[]>{
    const res = await fetch(`${baseUrl}/courses`);
    const courses = await res.json();
    return courses;
}

async function CreateCourse(newCourse:Course):Promise<Course|null>{
    const res = await fetch(`${baseUrl}/courses`,{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newCourse),
        });
        const saveNewCourses=await res.json();
        if(saveNewCourses.id !== undefined){
            return saveNewCourses;
        }else{
            return null;
        }
}

export default {
    fetchCourse,
    CreateCourse,
}