import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field,FieldArray,reduxForm } from 'redux-form'

import {
  createEvent
} from './actions'

class MyForm extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderComments = this.renderComments.bind(this)
  }

  renderField(field){
    const {
      input, // {value:"",onChange:f(event),...}
      label,
      type,
      test = ""
    } = field
    const {name} = {...input};
    return (
        <input {...input} placeholder={label} type={type} name={test} />
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
          }}
        />
      </div>
    )

  }

  renderComments({
    label,
    fields
  }){
    return (
      <div>
        <ul>
          {
            fields.map((comment,index) => {
              console.log(comment)
            return (
              <li key={index}>
                <Field 
                  label="コメント" 
                  name={`${comment}`}
                  type="text" 
                  component={this.renderField} 
                />
                <button type="button" onClick={()=> {
                  return fields.remove(index)} 
                }>削除</button>
              </li>
            )
          })}
        </ul>
        <button type="button" onClick={()=> fields.push()}>追加</button>
      </div>
    )
  }
  async onSubmit(values){
    const params = new FormData()
    params.append('h4', values.h4)
    params.append('tmb', values.tmb)

    if(values.ul){
      values.ul.forEach((e,i) => {
        if(e) {
          params.append(`li_${i}`,e)
        }
      });
    }

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
          <FieldArray
            name="ul"
            label="コメント"
            component={this.renderComments}
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