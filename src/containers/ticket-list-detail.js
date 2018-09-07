import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getTicket, getClickID } from '../actions/index';


class TicketListDetail extends Component {
    constructor(props) {
        super(props);

        this.renderTicket = this.renderTicket.bind(this);
    }

    componentDidMount() {
        this.props.getTicket();
    }

    renderTicket(ticketData, index) {
        if (index < 2) {
            return (
                <tr
                    onClick={() => this.props.getClickID(ticketData._id)}
                    key={ticketData._id}
                >
                    <td>{ticketData.client}</td>
                    <td>{ticketData.user}</td>
                    <td>{ticketData.date}</td>
                </tr>
            );
        }
    }

    render() {
        return (
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
                        <Link to="/all">View All Tickets</Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ticket: state.ticket,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTicket,
        getClickID
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketListDetail);
