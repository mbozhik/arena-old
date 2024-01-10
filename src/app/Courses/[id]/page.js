import React from 'react';

const page = ({params}) => {
    const {id} = params;
    console.log(id);
    const data=['1','2','3','4']
    const isElementIncluded = data.includes(id);
    if (isElementIncluded){
        return (
            <div>
                something
            </div>
        );
    }else{
        return(
            <p>Error</p>
        )  
    }
   
    }

 export default page;   