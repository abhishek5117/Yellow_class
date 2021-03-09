import React from 'react';

export const Image = (props) =>{
    const {key, url }=props;
    return (
    <div className="row">
        <div className="col-md-12 px-0">
            <div className="rounded-lg overflow-hidden">
            <img src={url} key={key} alt="" className="img-fluid" ></img>
            </div>
        </div>
    </div>
    );
};

export default Image;
