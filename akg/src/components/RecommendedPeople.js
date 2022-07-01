import {useState} from 'react';
import rec from '../assets/1.png';


function RecommendedPeople(props) {

    const [buttonText, setButtonText] = useState('Follow');
    const [outlineText, setOutlineText] = useState('btn btn-secondary mb-3 mr-4 rounded-pill');

    function handleClick() {
        if(buttonText==="Follow"){
            setButtonText('UnFollow');
            setOutlineText('btn btn-outline-secondary mb-3 mr-4 rounded-pill');
        }
        else{
            setButtonText('Follow');
            setOutlineText('btn btn-secondary mb-3 mr-4 rounded-pill');


        }
    }
  return (
    <div className="d-flex align-items-center justify-content-between m-3">
                        <div className="left d-flex align-items-center">
                            <img className="rounded-circle mr-2" width="50" src={props.img} alt="..." />
                            <div className="font-weight-bold">
                                {props.name}
                            </div>
                        </div>

                       


                        <div className="fw-bold">
                        <button type="button" class={outlineText} onClick={handleClick}>{buttonText}</button>


                        </div>
                    </div>
  )
}

export default RecommendedPeople