function NumbersTable({ limit }) {
    const numbersArray = [...Array(limit).keys()]

    

    return (
        numbersArray.map((number) => <div>
            <Square number={number+1}></Square>
        </div>)
    )

    function Square({ number }) {
        console.log(number)
        const color = (number % 2 === 0 ? 'red' : 'white')

        return (
            <div className="border border-1 border-dark" style={{backgroundColor:color}}  >
                <div className="card-body">
                    <p className="card-text text-center d-flex justify-content-center mt-4">{number}</p>
                </div>
            </div> 
        )
    }
       
    
}

export default NumbersTable;