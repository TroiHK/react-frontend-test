import React, { Component } from 'react';

export default class Date extends Component {
    render() {
        const { answerInfo } = this.props;
        const list = answerInfo.result.map((v, i) => {
            return (
                <li key={i}>
                    {v}
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
