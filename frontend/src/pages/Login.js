import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function AddStudent() {

    const history = useHistory();
    const [studentInput, setStudent] = useState({
        name: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({...studentInput, [e.target.name]: e.target.value })
    }

    const saveStudent = (e) => {
        e.preventDefault();
        
        const data = {
            name:studentInput.name,
            password:studentInput.password,

        }

        axios.post(`/api/login`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setStudent({
                    name: '',
                    password: '',

                    error_list: [],
                });
                history.push('/students');
            }
            else if(res.data.status === 422)
            {
                setStudent({...studentInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login 
                                    <Link to={'/students'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveStudent} >
                                    <div className="form-group mb-3">
                                        <label>Author's Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={studentInput.name} className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="text" name="course" onChange={handleInput} value={studentInput.course}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.course}</span>
                                    </div>                                    
                                    <div className="form-group mb-3 ">
                                        <button type="submit" className="btn btn-primary ml">Login</button>
                                       
                                        <Link to={'/students'} className="btn btn-success "> Register</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddStudent;
