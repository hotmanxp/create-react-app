import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countActions from '../../store/actions/create-action';

class Watch extends Component {
    render() {
        return (
            <div>
                This is a page show how to use redux
                {`Now the counte is ${this.props.countNum}`}
                <br />
                <button onClick={this.props.counter.addCount}>Add</button>
                <button onClick={() => this.props.counter.minCount(5)}>Min</button>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    countNum: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
    counter: bindActionCreators(countActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Watch);