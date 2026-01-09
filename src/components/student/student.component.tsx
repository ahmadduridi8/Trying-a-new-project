
import { useState } from 'react';
import type { IStudents } from '../../Types';
import Courselist from '../courses-list/courses-list-component';
import './student.compnent.css'

interface Iprops extends IStudents {
  onAbsentsChange :(name:string , absents : number)=> void; 
}


const Studant =(props : Iprops) => {
  const [absents , setabsents]= useState(0);
  
    const Addabsents = () => {
  setabsents((prev) => {
    if (prev >= 20) return prev;
    props.onAbsentsChange(props.name, +1);
    return prev + 1;
  });


   // setabsents(absents+1);
    //setabsents(oldvalue => (oldvalue <20 ? oldvalue +1:20))
   // setabsents(oldvalue => oldvalue+1)
   // console.log(absents);
   //props. onAbsentsChange(props.name ,+1); // خبر الاب انه اذا تم التغير ع الداتا 
  }
  const delabsents = () => {
  setabsents((prev) => {
    if (prev === 0) return 0;          // ما في شي ينقص
    props.onAbsentsChange(props.name, -1); // نقص فعلاً → خبر الأب
    return prev - 1;
  });
};

  const delete_ALl_absents=()=>{
    setabsents(0);
    props. onAbsentsChange(props.name ,- absents);
  }

  //console.log(props);
  return (
    <div className='std-wrapper'>
    <div> 
      <b> name :</b> {props.name.toUpperCase() }
      </div>
      <div>
        <b>Absents :</b> {absents}
        <button onClick={Addabsents}>+</button>
        <button onClick={delabsents}>-</button>
        <button onClick={delete_ALl_absents}>del</button>
      </div>
    <div>
      <b>Age :</b> {props.age}
    </div>
    <div>
      <b>Is Graduated :</b>  {props.isGraduated ? 'yes':'no'}
     </div>
    <Courselist list ={props.Courselist}/>
      <hr/>
    </div>
  )
}
export default Studant;