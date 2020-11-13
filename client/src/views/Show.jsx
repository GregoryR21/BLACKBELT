import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Show = props => {
    const [dog,setDog] = useState(null);
    const [bounce,setBounce] = useState(false);
    const [likeCount, setlikeCount] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/dogs/${props.id}`)
            .then(res => setDog(res.data.results))
            .catch(err => console.log(err))
    },[props])


    const bounceDoggie = (id,name) => {
        Axios.delete(`http://localhost:8000/api/dogs/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }


   




    return (
        dog ? 
        <div className="card col-6 mx-auto">
            <Link to={`/edit/${props.id}`} >Edit</Link>
            <div className="card-body">
                <div className="card-title">Name: {dog.name}</div>
                <h4 className="card-text">Type: {dog.breed}</h4>
                <p className="card-text">Description: {dog.favoriteMove}</p>
                <p className="card-text">Skill 1:  {dog.isLit }</p>
                <p className="card-text">Skill 2:  {dog.skillTwo }</p>
                <p className="card-text">Skill 3:  {dog.skillThree }</p>
                <button  to={`/edit/${dog._id}`} onClick={() => bounceDoggie(dog._id,dog.name)}
                                                        className="btn btn-danger"
                                                    > {`Adopt ${dog.name}`}</button>
                                                     
                
            </div>
        </div> : <p></p>
    );
}

export default Show;