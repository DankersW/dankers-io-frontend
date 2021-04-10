import React from "react";
import "./SystemInfo.css"
import DenseTable from "./../components/table/Table"

function SystemInfo() {
    var table_headers = ["","a", "b", "c", "d"]
    var table_data = [
        {
            x: "a",
            y: "b",
            z: "c"
        },
        {
            x: "a",
            y: "b",
            z: "c"
        }
    ]
    return (
        <div className="system-info-container">
            <h1>System Info</h1>
            <p>docker info, which versions are running, status of each docker container, IP address host, etc.</p>
            <DenseTable table_headers={table_headers} table_data={table_data}></DenseTable>
        </div>
    );
}

export default SystemInfo;