import React from 'react'

export default function CounterList(props) {

    var elements = []
    
    var counters = props.counters;
    for(var i=0; i < props.counters.length; i++) {
        elements.push(<tr key={counters[i]["key"]}>
            <td></td>
            <td>{counters[i]["Event"]}</td>
            <td>{counters[i]["Date"]}</td>
            <td>{counters[i]["Left"]}</td>
        </tr>)
    }
    return (
        <div>
            <table border={2} className="table-dark">
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>EventName</td>
                        <td>Date of Event</td>
                        <td>Days Left Till Event</td>
                    </tr>
                    {elements}
                </tbody>
            </table>
        </div>
    )
}
