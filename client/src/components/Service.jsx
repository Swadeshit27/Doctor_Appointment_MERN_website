import React from 'react'

const Service = (props) => {
    const {name,dec,icon}= props;

    return (
        <>
            <div className="card mx-3 my-3" style={{"width": "18rem"}}>
  <div className="card-body">
  {icon}
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{dec}</p>
    <a href="#" class="btn btn-outline-primary">Read more</a>
  </div>
</div>
        </>
    )
}

export default Service;