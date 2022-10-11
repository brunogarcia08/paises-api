import "./bandeira.css"

function Bandeira (props) {

    return (
        <div className="card-bandeira">
            <img className="image-bandeira" src={props.flags.png} />
        
        <div className="infor-pais">
            <p>{props.name.official}</p>
            <p>População: {props.population}</p>
            <p>Região: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
         
        </div>
    )
}

export default Bandeira;