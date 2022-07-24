import { useState } from "react";
import { useRouter } from 'next/router'


function Create (){
    const [title, setTitle]= useState('');
    const [post, setPost]= useState('');

    const router = useRouter();

    const onSave = async (e)=>{
        e.preventDefault();
        let res = await fetch('/api/createPost',{
            method:'POST',
            body:JSON.stringify({title, post})
        })
        res = await res.json();
        if(res?.success){
            router?.push('/');
        }
    }
    
    return(
        <div className="container" style={{marginTop:25}}>
            <form>
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input className="form-control" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)} />
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Post</label>
                    <textarea className="form-control" placeholder="Enter post" rows={5} onChange={(e)=> setPost(e.target.value)} ></textarea>
                </div>
                <div className="mt-3" style={{textAlign:'right'}}>
                    <button className="btn btn-success" onClick={onSave}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Create;