import React from 'react'
import AddDayForm from '../ui/AddDayForm'
import {connect} from 'react-redux'
import {addDay, clearSuggestions, suggestResortNames} from "../../actions";

const mapStatetoProps = (state, props) =>
  ({
    suggestions: state.resortNames.suggestions,
    fetching: state.resortNames.fetching,
    router: props.history
  })

const mapDispatchToProps = dispatch =>
  ({
    onNewDay({resort, date, powder, backcountry}) {
      dispatch (
        addDay(resort, date, powder, backcountry)
      )
    },
    onChange(value) {
      if (value){
        dispatch(
          suggestResortNames(value)
        )
      } else {
        dispatch (
          clearSuggestions()
        )
      }
    },
    onClear() {
      dispatch (
        clearSuggestions()
      )
    }
  })

const Container = connect(mapStatetoProps, mapDispatchToProps)(AddDayForm)

export default Container
// export default (props) => {
//   console.log(props)
//
//   return (
//     <AddDayForm suggestions={[]}
//                 fetching={false}
//                 router={props.router}
//                 onNewDay={day => console.log('todo: add day', day)}
//                 onChange={value => console.log('todo: suggest', value)}
//                 onClear={() => console.log('todo: clear suggestions')}/>
//   )
// }
