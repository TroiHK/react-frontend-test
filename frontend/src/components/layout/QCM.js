import React, { Component } from 'react';

export default class QCM extends Component {
    render() {
        const { answerInfo } = this.props;
        const list = Object.keys(answerInfo.result).map((k, v) => {
            return (
                <li key={k}>
                    {k}: {v}
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
