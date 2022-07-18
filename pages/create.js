function create (){
    return(
        <div className="container" style={{marginTop:25}}>
            <form>
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Post</label>
                    <textarea className="form-control" placeholder="Enter post" rows={5} ></textarea>
                </div>
                <div className="mt-3" style={{textAlign:'right'}}>
                    <button className="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    )
}

export default create;