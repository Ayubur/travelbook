import { useState } from "react";
function Contact() {
    const [name, setName] = useState('');
    return (
        <div className="container">
            <div className="row mt-3" >
                {
                    name != '' && (
                        <h1>Hello - {name}</h1>
                    )
                }

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" placeholder="" rows={5} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;