export default function reducer(state={
        surveys: [],
        visibleSurveys: [],
        surveyDetail: null,
        selectedSurvey: null,
        searchValue: '',
        fetching: false,
        fetched: false,
        error: null,
    }, action) {

    switch (action.type) {
        case "FETCH_SURVEYS": {
            return {...state, fetching: true}
        }

        case "FETCH_SURVEYS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "FETCH_SURVEYS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                surveys: action.payload,
                visibleSurveys: action.payload,
            }
        }

        case "FETCH_SURVEY_DETAIL": {
            return {...state, fetching: true}
        }

        case "FETCH_SURVEY_DETAIL_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "FETCH_SURVEY_DETAIL_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                selectedSurvey: action.code,
                surveyDetail: action.payload,
            }
        }

        case "FETCH_SURVEYS_FILTER": {
            const { searchValue } = action;
            const searchValueLowercase = searchValue.toLowerCase();
            const visibleSurveys = searchValue 
                ? state.surveys.filter((s) => s.name.toLowerCase().includes(searchValueLowercase) || s.code.toLowerCase().includes(searchValueLowercase))
                : state.surveys;
            return { 
                ...state, 
                searchValue, 
                surveyDetail: null,
                visibleSurveys
            };
        }

        default:
            return state;
    }
}