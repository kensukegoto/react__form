import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'

import {
  createEvent
} from './actions'

class MyForm extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }


  renderField(field){
    const {
      input, // {value:"",onChange:f(event),...}
      label,
      type
    } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
      </div>
    )
  }

  renderUpfile({
    input: {value,name,onChange},
    label,
    onFieldChange,
    type
  }){
    return (
      <div>
        <input 
          placeholder={label}
          type={type} 
          onChange={e => {
            e.preventDefault()
            onChange(e.target.files[0])
            onFieldChange && onFieldChange(e.target.files[0])
            // onChange(e.ta)
          }}
        />
      </div>
    )

  }

  async onSubmit(values){
    const params = new FormData()
    params.append('h4', values.h4)
    params.append('tmb', values.tmb)
    console.log(params)
    await this.props.createEvent(params)
  }
  
  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field 
            label="Title" 
            name="h4" 
            type="text" 
            component={this.renderField} 
          />
        </div>
        <div>
          <Field 
            label="画像" 
            name="tmb" 
            type="file" 
            component={this.renderUpfile} 
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createEvent: values => dispatch(createEvent(values))
})

export default connect(null,mapDispatchToProps)(
  reduxForm({
    form: "MyForm" // 何でもOK！
  })(MyForm)
)