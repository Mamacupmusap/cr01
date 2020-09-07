import React, {useState} from 'react';
import {Course} from '../interfaces';
import coursesService from '../services/CoursesService';

type NewCourseFormProps={
    onNewCourseCreated?:(newCourse:Course) => void,
}

const NewCourseForm=(props: NewCourseFormProps)=>{
    const [newCourseNumber,setNewCourseNumber]= useState<string>('');
    const [newCourseTitle,setNewCourseTitle]= useState<string>('');
    
    const handleCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNewCourseNumber(e.target.value);
    }
      
    const handleSave = () =>{
        const newCourse={
            number: newCourseNumber,
            title: newCourseTitle,
        };

        coursesService.CreateCourse(newCourse)
        .then(saveNewCourses =>{
            if(saveNewCourses !== null){
                if(props.onNewCourseCreated !== undefined){
                    props.onNewCourseCreated(saveNewCourses);
                }
            }else{
                alert("save error");
            }
        });
        
        /*
        fetch("http://localhost:3000/courses",{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newCourse),
        })
        .then(res=>res.json())
        .then(saveNewCourses =>{
            if(saveNewCourses.id !== undefined){
                if(props.onNewCourseCreated !== undefined){
                    props.onNewCourseCreated(saveNewCourses);
                }
            }else{
                alert("save error");
            }
         });
        //alert(`${newCourseNumber} -- ${newCourseTitle}`)
        */
    };
    
   return(
    <div>
        Number: <input value={newCourseNumber} onChange={handleCourseNumberChange}/><br/>
        Title: <input value={newCourseTitle} onChange={(e)=> {setNewCourseTitle(e.target.value);}}/><br/>
        <button onClick={handleSave}>Save</button>
    </div>
   )
};


export default NewCourseForm;