const dataCollection = [
    {
        name: 'Lorem',
        recipes: 'Lorem'
    },
    {
        name: 'Lorem',
        recipes: 'Lorem'
    },
    {
        name: 'Lorem',
        recipes: 'Lorem'
    }
]

class Accordion extends React.Component{
    render(){
        return(
            <>
            <div className="container">
                <div>
                    <span className="accordion__title">Recipes</span>
                    <h1>Recipes sourced by you.</h1>
                </div>
                <div className="accordion__recipes">
                    {dataCollection.map((item, index) =>
                        <div key={index}>
                            <div className="accordion__title-heading">
                            <h3>{item.name}</h3>
                            </div>
                            <div>
                                <span className="verticle">-</span>
                            </div>
                            <div>
                                <p>{item.recipes}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default Accordion;