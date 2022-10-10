import React from 'react';
import Accordion from './components/Accordion';

export default() => {

    const items =[
        {
            title: "What is React?",
            content: "React is a fron end javascript framework."
        },
        {
            title: "Why use React?",
            content: "React is a favourite JS library among engineers."
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components."
        }
    ]
    return(
        
        <div>
            <Accordion sendProps = {items} />
        </div>
        
    )
};