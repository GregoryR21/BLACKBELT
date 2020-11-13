const DogForm = props => {
    const {form,errors,handleInputChange,handleSubmit,submitValue} = props;
    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="breed">Type:</label>
                <input 
                    type="text" 
                    name="breed" 
                    className="form-control"
                    value={form.breed}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.breed ? errors.breed.message : ""}</span>
            </div>
          
            <div className="form-group">
                <label htmlFor="favoriteMove">Description:</label>
                <input 
                    type="text" 
                    name="favoriteMove" 
                    className="form-control"
                    value={form.favoriteMove}
                    onChange={handleInputChange}
                
                />
                <span className="text-danger">{errors.favoriteMove ? errors.favoriteMove.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="isLit">Skills:</label>
                <input 
                    type="text" 
                    name="isLit" 
                    className="form-control"
                    checked={form.isLit}
                    value={form.isLit}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="favoriteMove">Skill 2:</label>
                <input 
                    type="text" 
                    name="skillTwo" 
                    className="form-control"
                    value={form.skillTwo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="favoriteMove">Skill 3:</label>
                <input 
                    type="text" 
                    name="skillThree" 
                    className="form-control"
                    value={form.skillThree}
                    onChange={handleInputChange}
                />
            </div>
            <input type="submit" value={submitValue} className="btn btn-success"/>
        </form>
    );
}


export default DogForm;