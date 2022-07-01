import React,{useState,useRef} from 'react'

function Location() {
  const [edit, setedit] = useState(false)
  const [placeText, setplaceText] = useState('Noida,India')
  const inputbox = useRef()
  return (
    <div className="card mb-4">
    <div className="d-flex align-items-center justify-content-between m-3">
        <div className="left d-flex align-items-center">
            <i className=" mdi mdi-map-marker mr-1"></i>
          
          {
            edit?<div className='inputBox'>
            <input type="text" onChange={(e)=>{setplaceText(e.target.value)}} ></input>
        </div>:<div className="font-weight-bold" >
               {placeText}
            </div>
          }
            
            
        </div>

       

          {
            edit?<div className="fw-bold" type='button' onClick={()=>{ setedit(!edit)}}>

            <button className='btn btn-primary'>Save</button>
        </div>:<div className="fw-bold" type='button' onClick={()=>{setedit(!edit)}}>
            <i className=" mdi mdi-pen "></i>

            Edit
        </div>
          }
        
        
    </div>

</div>
  )
}

export default Location