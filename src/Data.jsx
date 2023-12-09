import { Component } from "react";

class Data extends Component{

    constructor(props){
        super(props);
        this.state = {
            alldata : this.props.data
        }
    }

    render(){
        return(
            <>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PASSWORD</td>
                        <td>COURSE</td>
                        <td>CITY</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alldata.map((val) => 
                            <tr key={val.grid}>
                                <td>{val.grid}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.course}</td>
                                <td>{val.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </>
        )
    }
}

export default Data;