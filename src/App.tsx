
import { useState } from 'react';
import './App.css'
import Studant from './components/student/student.component';
import type { IStudents } from './Types';

const COURSES_LIST: string[] = ['css', 'html', 'c++'];
const Initial_list: IStudents[] = [
  {
    id :"1234",
    name: 'mhmd',
    age: 19,
    isGraduated: false,
    Courselist: [...COURSES_LIST, 'math', 'c++(2)'],
  },
  {
    id :"12345",
    name: 'ahmad tamem',
    age: 20,
    isGraduated: false,
    Courselist: ['English', 'arabi'],
  },
  {
    id :"123456",
    name: 'mahmod',
    age: 18,
    isGraduated: true,
    Courselist: ['web', 'math'],
  },
  {
    id :"1234567",
    name: 'ans',
    age: 23,
    isGraduated: true,
    Courselist: ['c++', 'java'],
  },
  {
    id :"12345678",
    name: 'yazan',
    age: 19,
    isGraduated: false,
    Courselist: ['js', 'web'],
  },
];

function App() {
  const [studentsList,setudentsList]=useState<IStudents[]>(Initial_list);
  const removelaststudent =()=>{
    const newlist = [...studentsList];
    newlist.pop();
    setudentsList(newlist);

  }
  const[totalabsents , settotalabsents]=useState(0);
  const handelAbsentschange =(name:string , change:number)=>{ // فنكشين اذا تم الاخبار استدعيلي الامر التالي 
    console.log("Absents change")
    console.log(`${name}: ${change}`);
    settotalabsents (totalabsents+change )

  }
  return (

    <div>
      <h1>Welcom to React & node.js </h1>
      <button onClick={removelaststudent}>remove last student</button>
      totalabsents {totalabsents}
      {
        studentsList.map(Student => (
          <Studant
         key={Student.id}
         id = {Student.id}
            name={Student.name}
            age={Student.age}
            isGraduated={Student.isGraduated}
            Courselist={Student.Courselist}
            onAbsentsChange={handelAbsentschange}//اذا تم تغير على ال (change) قم باخباري 
            
          />
        ))
      }


    </div>


  )
}

export default App
