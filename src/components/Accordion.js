import React, {useState} from 'react';

const Accordion = ({sendProps}) =>{
 const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {

        setActiveIndex(index);
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
        <div className='ui styled accordion'>
            {renderItems}
            <h1>{activeIndex}</h1>
        </div>
    )
};

export default Accordion;