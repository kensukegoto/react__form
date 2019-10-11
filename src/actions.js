import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'http://localhost:3001/api'
// cf) redux-thunkを使わない場合
// export const readEvents = () => ({
//   type: READ_EVENTS
// })
export const createEvent = values => async dispatch => {
  console.log(values)
  const response = await axios.post(`${ROOT_URL}/add`,values,{
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
}

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/get`)
  dispatch({
    type: READ_EVENTS,
    response
  })

}