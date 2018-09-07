import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getTicket, getClickID } from '../actions';

class AllTickets extends Component {
    constructor(props) {
        super(props);

        this.renderTicket = this.renderTicket.bind(this);
    }

    componentDidMount() {
        this.props.getTicket();
    }

    renderTicket(ticketData) {
        return (
            <tr
                onClick={
                    () => {
                        this.props.getClickID(ticketData._id);
                        this.props.history.push('/');
                    }}
                key={ticketData._id}
            >
                <td>{ticketData.client}</td>
                <td>{ticketData.user}</td>
                <td>{ticketData.date}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="ticket-list-detail row">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>User</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.ticket.map(this.renderTicket)}
                            </tbody>
                        </table>
                        <div className="text-center">
                            <Link to="/">Main Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ticket: state.ticket
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTicket,
        getClickID
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets);
