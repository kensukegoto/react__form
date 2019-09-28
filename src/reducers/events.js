import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'


export default (
  events = {}, // 管理する状態
  action // dispatchされたaction
  ) => { 

    switch(action.type){

      default:
        return events
    }

}