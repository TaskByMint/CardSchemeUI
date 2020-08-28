//import './css/jquery.dataTables.css'
import 'datatables.net-dt/css/jquery.dataTables.css'
import React, {Component} from 'react'
//import App from "./App";

const $ = require('jquery')
$.DataTable = require('datatables.net');


export class Table extends Component {
    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Terminal ID" },
                { title: "Account No" },
                { title: "Amount" },
                { title: "Tran Date" },
                { title: "Tran Time" },
                { title: "RRN" },
                { title: "STAN" },
                { title: "PAN" },
                { title: "Tran Status" },
                { title: "Tran Type" },
                { title: "Error Type" },
            
            ]
        })
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                
                <table className="display" width="100%" ref = {el => this.el = el }></table>

            </div>
        );
    }
}