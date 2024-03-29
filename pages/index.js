
import Link from "next/link";
function Home({ posts }) {
    return (
        <div className="container">
            <div style={{ marginTop: 35 }}>
                <div style={{ textAlign: 'right' }}>
                    <Link href="/post/create">
                        <button className="btn btn-primary">Add New Post</button>
                    </Link>
                </div>
                <>
                    {
                        posts?.map(post => (
                            <Link href={`/post/${post?.id}`} key={post.id}>
                                <a>
                                    <div className="row" style={{ marginTop: 25 }}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{post?.title}</h5>
                                                <p className="card-text">{post?.post}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))
                    }
                </>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/getAllPosts');
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default Home;
