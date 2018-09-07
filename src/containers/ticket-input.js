import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitTicket, getTicket, updateTicket, deleteTicket } from '../actions/index';

class TicketInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client: '',
            user: '',
            phone: '',
            email: '',
            trouble: ''
        };

        this.onClientChange = this.onClientChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onTroubleChange = this.onTroubleChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onClientChange(event) {
        this.setState({
            client: event.target.value,
        });
    }

    onUserChange(event) {
        this.setState({
            user: event.target.value,
        });
    }

    onPhoneChange(event) {
        this.setState({
            phone: event.target.value,
        });
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }

    onTroubleChange(event) {
        this.setState({
            trouble: event.target.value,
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Submit the ticket
        this.props.submitTicket(this.state, () => {
            this.props.getTicket();

            this.setState({
                // Clear fields after submission
                client: '',
                user: '',
                phone: '',
                email: '',
                trouble: ''
            });
        });
    }

    onUpdate() {
        // eslint-disable-next-line 
        const accept = confirm('Are you sure you want to UPDATE?');
        if (accept) {
            this.props.updateTicket({ id: this.props.id, data: this.state }, () => {
                this.props.getTicket();
            });
        }
    }

    onDelete() {
        // eslint-disable-next-line
        const accept = confirm('Are you sure you want to DELETE?');
        if (accept) {
            this.props.deleteTicket(this.props.id, () => {
                this.props.getTicket();
            });
        }
    }

    render() {
        return (
            <div className="ticket-input col-md-5">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="client">
                            Client
                            <input
                                className="form-control"
                                id="client"
                                type="text"
                                placeholder="Acme Inc."
                                value={this.state.client}
                                onChange={this.onClientChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">
                            User
                            <input
                                className="form-control"
                                id="user"
                                type="text"
                                placeholder="Joe Smith"
                                value={this.state.user}
                                onChange={this.onUserChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            Phone
                            <input
                                className="form-control"
                                id="phone"
                                type="text"
                                placeholder="(201) 867-5309"
                                value={this.state.phone}
                                onChange={this.onPhoneChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                            <input
                                className="form-control"
                                id="email"
                                type="text"
                                placeholder="joe@smith.com"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="trouble">
                            Trouble
                            <textarea
                                className="form-control"
                                style={{ width: 375, height: 100 }}
                                value={this.state.trouble}
                                onChange={this.onTroubleChange}
                            />
                        </label>
                    </div>
                    <div className="input-group-btn">
                        <span className="update-delete-button">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit Ticket
                            </button>
                        </span>
                        <span className="update-delete-button">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={this.onUpdate}
                            >
                                Update
                            </button>
                        </span>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onDelete}
                        >
                            Delete</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.id
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitTicket,
        getTicket,
        updateTicket,
        deleteTicket
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketInput);
