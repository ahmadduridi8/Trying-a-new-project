
import './App.css'
import Studant from './components/student/student.component'

 const COURSES_LIST = ['css','html','c++'];
function App() {
  return (
   
      <div>
        <h1>Welcom to React & node.js </h1> 
        <Studant  name="mhmd " age={19} isGraduated={false} Courselist={COURSES_LIST}/>
        <Studant name="ahmad tamem"  age={20} isGraduated={false}Courselist={COURSES_LIST}/>
        <Studant name="mahmod"  age={18} isGraduated={true}Courselist={COURSES_LIST}/>
        <Studant name="ans"  age={23} isGraduated={true}Courselist={COURSES_LIST}/>
        <Studant name="yazan" age={19} isGraduated={false}Courselist={COURSES_LIST}/>
      </div>
      
    
  )
}

export default App
