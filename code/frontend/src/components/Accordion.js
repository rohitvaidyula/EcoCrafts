import React, {useState} from 'react';
import './Accordion.css';

const dataCollection = [
    {
        name: 'Can: Pencil Holder by GPT',
        recipes: '(1) Clean the can thoroughly. (2) Decorate the outside with colorful paper, fabric, or paint. (3) Use it as a stylish holder for pens, pencils, or art supplies.'
    },
    {
        name: 'Canister: Bulk Storage by GPT',
        recipes: '(1) Clean and decorate the canister. (2) Use it for storing bulk items like rice, pasta, or cereal.'
    },
    {
        name: 'Milk Bottle: Vase by GPT',
        recipes: '(1) Clean the bottle thoroughly. (2) Paint or decorate the outside. (3) Use it as a charming vase for flowers.'
    }
]

function Accordion() {
        const [accordion, setActiveAccordion] = useState(-1);
        function toggleAccordion(index) {
            setActiveAccordion(index);
        }
    return(
        <>
        <div className="container">
            <div>
                <span className="accordion__title"></span>
                <h1>Recipes sourced by you and GPT.</h1>
            </div>
            <div className="accordion__recipes">
                {dataCollection.map((item, index) =>
                    <div key={index} onClick={()=> toggleAccordion(index)}>
                        <div className="accordion__title-heading">
                            <h3 className={accordion === index ? "active" : ""}>{item.name}</h3>
                        </div>
                        <div>
                            {accordion === index ? (
                                <>
                                    <span className="verticle">-</span>
                                </>
                            ) : (
                                <>
                                    <span className="verticle">+</span>
                                </>
                            )}
                        </div>
                        <div>
                            <p className={accordion === index ? "active" : "inactive"}>
                                {item.recipes}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}


export default Accordion;