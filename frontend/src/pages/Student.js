import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';


class Student extends Component{


    state = {
        students:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('/api/students')
        // console.log(res);

        if(res.data.status === 200){
            this.setState({
                students: res.data.students,
                loading: false,
            });
        }
    }
    


    render(){

        var student_HTMLTABLE = "";

        if(this.state.loading){
            student_HTMLTABLE = 
            <tr>
            <td>Loading...</td>
            </tr>
        }
        else{
            var student_HTMLTABLE = "";
       
            student_HTMLTABLE = students.map( (item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`/edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => deleteStudent(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }






        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-header">
                            <h4>Students Data
                            <Link to = {'add-student'} className="btn btn-primary btn-sm float-end"> Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                        <table className="table table-bordered table-stripe">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Email Id</th>
                                    <th>Phone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {student_HTMLTABLE}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student;