import React,{useState} from 'react';

function AllArticle() {
    const [buttonText, setButtonText] = useState('+ Join Group');
  const [outlineText, setOutlineText] = useState('btn btn-primary ml-2 join ');

  function handleClick() {
      if(buttonText===" - UnJoin Group"){
          setButtonText(' + Join Group');
          setOutlineText('btn btn-primary join ml-2 ');

        }
      else{
          setButtonText(' - UnJoin Group');
          setOutlineText('btn btn-outline-dark  join  ml-2 ');



      }
  }

  return (
    <nav class="navbar navbar-expand-lg   sticky-top  navbar-light bg-light mb-2 ">
    <button class="navbar-toggler ml-3" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fw-bold rounded-pills"><i class="bi bi-funnel mr-2"></i>Filter
</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      
      <ul class="navbar-nav mr-auto">
        <li class=" nav-item second active">
          <a class="nav-link" href="#">All post<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item second">
          <a class="nav-link" href="#">Articles</a>
        </li>
        <li class="nav-item second">
          <a class="nav-link" href="#">Event</a>
        </li>
        
        <li class="nav-item second">
          <a class="nav-link" href="#">Education</a>
        </li>
        
        <li class="nav-item second">
          <a class="nav-link" href="#">Jobs</a>
        </li>
      </ul>
      <div className="dropdown">
      <button type="button " class="btn btn-outline-dark write  dropdown-toggle mr-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Write a Post </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" >Create a post</a>
                <a className="dropdown-item" >Edit</a>
                <a className="dropdown-item" >Upload Photos</a>
              </div>
            </div>
      
    <button type="button" width="50" class={outlineText} onClick={handleClick}>{buttonText}</button>
  
  
  
    </div>
    <hr/>
  </nav>  
  )
}

export default AllArticle