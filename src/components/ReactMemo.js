import React, { useMemo, useState } from 'react'

const ReactMemo = () => {
    const [text, setText]=useState('');
    const [Skills , setSkill] = useState([]);
    console.log(text)
    const expCalculation=useMemo(()=>{
        for(let i=0;i<10000000000;i++){

        }
    },[])
    expCalculation()
  return (
    <div>
        <h1>React.memo</h1>
        <input type='text' onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>setSkill((prev)=>[...prev,text])}>Add Skill</button>
        <ul>
           {Skills.map((skill, idx)=><li key={idx}>{skill}</li> ) }
        </ul>
    </div>
  )
}

export default ReactMemo