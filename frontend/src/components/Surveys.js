import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { fetchSurveys, fetchSurveyDetail } from '../actions/surveys';

import '../css/surveys.css';

import QCM from "./layout/QCM";
import Numberic from "./layout/Numberic";
import Date from "./layout/Date";

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
                <div 
                    className={ 
                        classnames({
                            'survey': true,
                            'selected': this.props.selectedSurvey === s.code,
                        }) 
                    } 
                    key={i} onClick={ () => this.handleClickDetail(s.code) }
                >
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
                        <QCM key={i} answerInfo={s}/>
                    );
                }

                case "numeric": {
                    return (
                        <Numberic key={i} answerInfo={s}/>
                    );
                }

                case "date": {
                    return (
                        <Date key={i} answerInfo={s}/>
                    );
                }

                default:
                    return false;
            }
        }) : null;

        return (
            <div className="row">
                <div className="col-sm-4">
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
                </div>
                
                <div className="col-sm-8">
                    <div className="survey-detail">
                        {surveyHTML}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
	surveys: state.surveys.surveys,
    visibleSurveys: state.surveys.visibleSurveys,
    surveyDetail: state.surveys.surveyDetail,
    selectedSurvey: state.surveys.selectedSurvey,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchSurveys,
    fetchSurveyDetail,
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Surveys);