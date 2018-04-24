import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSurveys, fetchSurveyDetail } from '../actions/surveys';

import QCM from "./layout/QCM";
import Numberic from "./layout/Numberic";
import Date from "./layout/Date";

import '../css/surveys.css';

class Surveys extends Component {
    handleClickDetail = (code) => {
        this.props.fetchSurveyDetail(code);
    }

	componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        const { visibleSurveys, surveyDetail } = this.props;

        // List Surveys
        const surveysHTML = visibleSurveys
        .sort((a,b) => {
            return a.code > b.code;
        })
        .map((s, i) => {
            return (
                <div className="survey" key={i} onClick={ () => this.handleClickDetail(s.code) }>
                    <div className="survey-name">
                        {s.name}
                    </div>
                    <div className="survey-code">
                        {s.code}
                    </div>
                </div>
            );
        });

        // surveys Detail
        const surveyHTML = surveyDetail ?
        surveyDetail.map((s, i) => {
            switch(s.type) {
                case "qcm": {
                    return (
                        <QCM answerInfo={s}/>
                    );
                }

                case "numeric": {
                    return (
                        <Numberic answerInfo={s}/>
                    );
                }

                case "date": {
                    return (
                        <Date answerInfo={s}/>
                    );
                }

                default:
                    return false;
            }
        }) : null;

        return (
            <div>
                <div className="surveys">
                    <div className="survey survey-head">
                        <div className="survey-name">
                            Name
                        </div>
                        <div className="survey-code">
                            Code
                        </div>
                    </div>
                    {surveysHTML}
                </div>
                <div className="survey-detail">
                    {surveyHTML}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
	surveys: state.surveys.surveys,
    visibleSurveys: state.surveys.visibleSurveys,
    surveyDetail: state.surveys.surveyDetail,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchSurveys,
    fetchSurveyDetail,
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Surveys);