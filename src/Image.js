import React, { useState } from "react";
import { storage, database } from "./fbase";


const Image = () => {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [caption, setCaption] = useState("")
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const[category,setCategory]=useState("")

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    setURL(url);
                });
        });
    }
    const uploadToDatabase = () => {
        
        database.ref("/items").push({
            image: url,
            caption,name,course,category
        }).then((data) => {

            console.log('data ', data)
            setURL("");
            setCaption("")
        }).catch((error) => {
            console.log('error ', error)
        })
    }
    return (
        <div>
            <div className="col-md-6" style={{margin:"auto"}}>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleChange} />
                <button disabled={!file}>Upload Image</button>
            </form>
            </div>
           
            {url && <>
                <div className="col-md-6" style={{margin:"auto"}}>
                <img src={url} alt="" style={{ height: "100px", width: "100px" }} />
                <br />
               
                <div>
                <label htmlFor="">Name:</label>
                <input className="form-control" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <br />
                <div>
                <label htmlFor="">Course:</label>
                <input className="form-control" type="text" name="course" value={course} onChange={e => setCourse(e.target.value)} />
                </div>
                <br />
                <div>
                <label htmlFor="">Category</label>
                <input className="form-control" type="text" name="category" value={category} onChange={e => setCategory(e.target.value)} />
                </div>
                <br />
                <div>
                <label htmlFor="">Figure Discription:</label>
                <input className="form-control" type="text" name="caption" value={caption} onChange={e => setCaption(e.target.value)} />
                </div>
                <br />
            
                <button onClick={uploadToDatabase}>Submit Post</button>
                </div>
            </>
            }
        </div>
    );
}

export default Image