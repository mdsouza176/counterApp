import React, {useState} from 'react'
const $ = window.$;
export default function AddCounter(props) {
    
    
    const addCounter = () => {
        var date = document.getElementById("fullDate").value;
        var event = document.getElementById("event").value;
        if(checkDate(date)) {
            props.addCounter(event, date);
            $('#myModal').modal("hide");
        }
    }
    function checkDate(date, time)
    {
        // regular expression to match required date format
        var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        if(date === '' && !date.match(re)) {
        alert("Invalid date format: " + date);
        return false;
        }
        return true;
    }

    return (
        <div>
            <button  style={{float:"right"}} type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus" aria-hidden="true"></i></button>
            <br />
            <br />
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{margin:"auto"}}>Counter Creator</h1>
                            <button type="button" style={{float:"right"}} data-dismiss="modal" className="btn btn-danger float-right pt-0">x</button>
                        </div>
                        <div className="form-inline">
                            <label htmlFor="event">Event Name: </label>
                            <div className="sm-4">

                            </div>
                            <input placeholder="Event" type="text" id="event" className="form-control"/>
                        </div>
                        <div className="form-inline">
                            <label htmlFor="fullFate">Date(Month, Day, year): </label>
                            <input type="text" placeholder="XX/XX/XXXX" className="form-control" id="fullDate"></input>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={addCounter}>Create Timer</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

