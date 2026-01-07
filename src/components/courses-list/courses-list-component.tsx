interface Iprops {
list:string[];
}
const Courselist= (props: Iprops)=> {
  return (
    <ul>
     {props.list.map((item,index) => <li key={index+item}>{item}</li>)}
    </ul>
  )
}

export default Courselist ;
