import React, { useState } from 'react'

interface Props{
    title:string,
    arr:string[],
    onSelectItem:(item:string)=>void
}
export default ({title,arr,onSelectItem}:Props) => {
   
    const courseLength=arr.length
    const[courseIndex,setCourseIndex]=useState(-1);
    return (<>
    <h1>{title}</h1>
       { courseLength>0?
        <ul className="list-group">
            {arr.map((item, index) =>
                <li className={courseIndex==index?"list-group-item active":"list-group-item"} key={index} onClick={()=>{
                    setCourseIndex(index);
                    onSelectItem(item)
                }
                }>{item}</li>
            )}
        </ul>:<h1>no items</h1>
}
      </>
        // courseLength>0&&<h1>there exist courses</h1>
    )
}
