function SinglePost({post}){
    return(
        <div className="container">
            <div className="row" style={{marginTop:35}}>
                <div className="card">
                    <div className="card-title">
                        <h4>{post?.title}</h4>
                    </div>
                    <div className="card-body">
                        {post?.post}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const {id} = context?.query;
    const res = await fetch(`http://localhost:3000/api/getSinglePost?id=${id}`);
    const post = await res.json();

    return{
        props:{
            post:post
        }
    }
}

export default SinglePost;