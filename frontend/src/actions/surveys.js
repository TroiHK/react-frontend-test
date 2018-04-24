import axios from "axios"

export const fetchSurveys = () => {
    return function(dispatch) {
        dispatch({type: "FETCH_SURVEYS"});
        axios.get("/api/list.json")
        .then((response) => {
            dispatch({type: "FETCH_SURVEYS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_SURVEYS_REJECTED", payload: err})
        })
    }
}

export const fetchSurveyDetail = (code) => {
    return function(dispatch) {
        dispatch({type: "FETCH_SURVEY_DETAIL"});
        axios.get("/api/"+code+".json")
        .then((response) => {
            dispatch({type: "FETCH_SURVEY_DETAIL_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_SURVEY_DETAIL_REJECTED", payload: err})
        })
    }
}

export const fetchSurveysFilter = (searchValue) => {
    return {
        type: "FETCH_SURVEYS_FILTER",
        searchValue
    }
};