import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSurveysFilter } from '../../actions/surveys';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            collapsedDropdown: false,
        };
    }

    toggleCollapse = () => {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    handleSearch = (searchValue) => {
        this.props.fetchSurveysFilter(searchValue);
    }

    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">DemoApp</a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                                value= { this.props.searchValue }
                                onChange={ (e) => this.handleSearch(e.target.value) }
                            />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    searchValue: state.surveys.searchValue,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSurveysFilter,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
