import React, { Component } from 'react'

class Users extends Component {
    render() {
        const users = [{
            id: '1',
            firstName: 'Иван',
            lastName: 'Фихтеншварц',
            email: 'ivan@example.com',
        }, {
            id: '2',
            firstName: 'Василиса',
            lastName: 'Колокольчикова',
            email: 'vasya@eaxample.com',
        }];

        if (users) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <i className="fas fa-users" ></i> Users
                            </h2>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default Users;
