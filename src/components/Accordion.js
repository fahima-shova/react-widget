import React from 'react';

const Accordion = ({sendProps}) =>{
 
    const onTitleClick = (index) => {

        console.log("Title Clicked", index)
    }

    const renderItems = sendProps.map((item,index)=>{

        return (
        
        <React.Fragment key= {item.title}>
            
            {/* to display the question */}
            <div className='title active' onClick={()=> onTitleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>

            {/* to display the answer */}
            <div className='content active'>
                <p> {item.content}</p>
            </div>
        </React.Fragment>
        );
    });

    return (
        <div className='ui styled accordion'>{renderItems}</div>
    )
};

export default Accordion;