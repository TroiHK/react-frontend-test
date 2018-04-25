import React, { Component } from 'react';
import Moment from 'react-moment';

export default class Date extends Component {
    render() {
        const { answerInfo } = this.props;
        const list = answerInfo.result
        .sort((a,b) => {
            return a > b;
        })
        .map((v, i) => {
            return (
                <li key={i}>
                    <Moment format="DD/MM/YYYY">{v}</Moment>
                </li>
            );
        });

        return (
            <div>
                <p className="question">{answerInfo.label}</p>
                <ul>{list}</ul>
            </div>
        );
    }
}
