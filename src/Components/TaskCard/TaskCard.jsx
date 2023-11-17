import React from 'react'

const TaskCard= ({tasks}) => {
    return(
        <>
        <div>
            <h3 style={{border: '1px solid #ccc', padding: '10px', borderRadius: '10px', margin:' 10px', width:'300px'}}>Terefas Reorganizadas</h3>
            <ul style={{listStyleType: 'none', padding:'0px'}}>
                {tasks.map((task,index)=> {
                    <li key={index} >{task}</li>
                })}
            </ul>
        </div>
        
        </>
    )
}

export default TaskCard