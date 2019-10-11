import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  readEvents
} from '../actions'

class MyList extends Component {

  componentDidMount(){
    this.props.readEvents()
  }

  render(){
    console.log(this.props.events)
    return (
      <>
      </>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents())
})

export default connect(mapStateToProps,mapDispatchToProps)(MyList)