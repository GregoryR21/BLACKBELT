import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [dogs,setDogs] = useState([]);
    const [bounce,setBounce] = useState(false);
    

    useEffect(() => {
        Axios.get('http://localhost:8000/api/dogs')
            .then(res => setDogs(res.data.results))
            .catch(err => console.log(err));
    },[bounce])

    const bounceDoggie = (id,name) => {
        Axios.delete(`http://localhost:8000/api/dogs/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    
                    // creates state variable to re-render DOM
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
                                                        
            <h2>Details about: </h2>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                       
                        
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        dogs.map((dog,i) => <tr key={i}>
                                                <tr>Pet Name: {dog.name} </tr>
                                                    <br/>
                                                    <tr>Pet Type: {dog.breed} </tr>
                                                    <br/>
                                                   <tr>Description: {dog.favoriteMove} </tr>
                                                   <br/>
                                                    <tr>Skill (1): {dog.isLit}  </tr>
                                                    <br/>
                                                    <tr>Skill (2): {dog.skillTwo}  </tr>
                                                    <br/>
                                                    <tr>Skill (3): {dog.skillThree}  </tr>

                                                    <td>
                                                    
                                                     
                                                        <Link to={`/edit/${dog._id}`}>edit </Link>
                                                        <Link to={`/details/${dog._id}`}>details </Link>
                                                       
        <br/>
                                                    </td>
                                                </tr>
                                                 
                                            
                        )

                    }
                </tbody>
            </table>
            

        </>
    );
}

export default Main;
