import { combineReducers } from "@reduxjs/toolkit"
import { eventsReducer } from "./Events/events.reducer"

export const rootReducer = combineReducers({
  events: eventsReducer,
})
