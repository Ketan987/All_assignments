import React from 'react';

export interface StarsProps {
    current : number;
    minof : number;
    outof : number;
}

export function Stars(props: StarsProps){
    let current = props.current;
    let outof = props.outof;
    let minof = props.minof;
    let rating = (((+current - +minof) * (5 - 1)) / (+outof - +minof)) + 1;
    // console.log(rating);
    let number = Math.floor(rating);
    var template  = [];
    for (let i = 0; i < number; i++) {
        template.push(<i key = {i} className="fa fa-star"></i>);
    }
    // console.log("value", +rating % 1);
    if(+rating % 1)
        template.push(<i key = {"final"} className="fa fa-star-half"></i>);
    return(
        <div>
            {template}
        </div>
    )
}


// export default Stars;