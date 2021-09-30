import React from "react";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "{{demo-key}}" 
    }
};


export default class JobDetails extends React.Component {

    state = {

    }

    getJob = () => {
        axios
        .get ('{{baseURL}}/jobs/:id', headers)           
        .then ((res) => {
            console.log(res.data)
        }).catch ((err)=> {
            console.log(err)
        })
    }


    render() {
        this.getJob ()
        return (
            <div>
                <h3>Detalhes do serviço</h3>
            </div>
        )
    }
}