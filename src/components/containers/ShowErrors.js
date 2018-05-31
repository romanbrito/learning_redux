import React from 'react'
import ShowErrors from '../ui/ShowErrors'
import {clearError} from "../../actions"
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onClearError(index) {
      dispatch(
        clearError(index)
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowErrors)
// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />

// with window.store = store in index.js from console
// store.getState()
// {allSkiDays: Array(3), goal: 25, errors: Array(0), resortNames: {…}}
// store.dispatch({type: "ADD_ERROR", payload: "something went wrong"})
// index.js:38 dispatching action => ADD_ERROR
// {type: "ADD_ERROR", payload: "something went wrong"}
