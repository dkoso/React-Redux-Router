import React, { Component } from 'react';
import { connect } from 'react-redux';


class TicketOutput extends Component {
    constructor(props) {
        super(props);

        this.extract = this.extract.bind(this);
    }

    extract() {
        const tickObj = this.props.ticket.find(obj => obj._id === this.props.id);
        if (tickObj === undefined) {
            return <div>Click on a ticket...</div>;
        }
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Client</th>
                            <th>User</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-info">
                            <td>
                                {tickObj.client}
                            </td>
                            <td>
                                {tickObj.user}
                            </td>
                            <td>
                                {tickObj.date}
                            </td>
                        </tr>
                    </tbody>
                    <thead className="thead-light">
                        <tr>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-success">
                            <td>
                                {tickObj.phone}
                            </td>
                            <td>
                                {tickObj.email}
                            </td>
                            <td>
                                {tickObj._id}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <center>{tickObj.trouble}</center>
            </div>
        );
    }

    render() {
        return (
            <div className="ticket-ouput col-md-7">
                {this.extract()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ticket: state.ticket,
        id: state.id
    };
}

export default connect(mapStateToProps)(TicketOutput);
