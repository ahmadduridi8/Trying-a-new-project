
import Courselist from '../courses-list/courses-list-component';
import './student.compnent.css'

interface Iprops {
  name:string;
  age:number;
  isGraduated:boolean;
 Courselist:string[];
}


const Studant =(props : Iprops) => {
  //console.log(props);
  return (
    <div className='std-wrapper'>
    <div> 
      <b> name :</b> {props.name.toUpperCase() }
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