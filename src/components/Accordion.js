import React from 'react';
import {useState} from 'react';

const Accordion = ({sendProps}) =>{

 const [activeIndex, setActiveIndex] = useState(null); //activeIndex saves stateful value, setActiveindex saves the function

    const onTitleClick = (index) => {

        setActiveIndex(index);
    }

    const renderItems = sendProps.map((item,index)=>{

        const active = activeIndex === index ? "active" : " "; 
        return (
        
        <React.Fragment key= {item.title}>
            
            {/* to display the question */}
            <div className={`title ${active}`} onClick={()=> onTitleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>

            {/* to display the answer */}
            <div className={`content ${active}`}>
                <p> {item.content}</p>
            </div>
        </React.Fragment>
        );
    });

    return (
        <div className='ui styled accordion'>
            {renderItems}
        </div>
    )
};

export default Accordion;