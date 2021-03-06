import Axios from 'axios';
import {useState} from 'react';
import {navigate} from '@reach/router';
import DogForm from '../components/DogForm';

const Create = props => {

    const [dogForm,setDogForm] = useState({
        name:"",
        breed:"",
        favoriteMove:"",
        isLit:"", 
        skillTwo:"", 
        skillThree:""
    });
    const [errors,setErrors] = useState({
        name:"",
        breed:"",
        age:""
    })

    const handleInputChange = e => {
        if(e.target.type === "checkbox"){
            setDogForm({
                ...dogForm,
                isLit:!dogForm.isLit
            })
            return;
        }
        setDogForm({
            ...dogForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/dogs/create',dogForm)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
    }

    return(
        <div>
            <h2 className="text-center">Know a pet needing a home?</h2>
            <DogForm 
                form={dogForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add Pet"
            />

        </div>
    );
}

export default Create;
