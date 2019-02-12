import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Spinner from '../layout/Spinner';

class Users extends Component {
    render() {
        const { users } = this.props;

        if (users) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <i className="fas fa-users" /> Users
                            </h2>
                        </div>
                        <div className="col-md-6" />
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/user/${user.id}`} className="btn btn-secondary btn-sm">
                                            <i className="fas fa-arrow-circle-right"></i> Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <Spinner />;
        }
    }
}

export default compose(
    firestoreConnect([{ collection: 'users' }]),
    connect((state, props) => ({
        users: state.firestore.ordered.users
    })),
)(Users);
