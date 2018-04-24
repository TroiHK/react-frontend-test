import React, { Component } from 'react';

export default class Numberic extends Component {
    render() {
        const { answerInfo } = this.props;

        return (
            <div>
                <p className="question">{answerInfo.label}</p>
                <p>{answerInfo.result}</p>
            </div>
        );
    }
}
