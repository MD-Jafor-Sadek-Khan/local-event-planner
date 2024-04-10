import { createSlice } from "@reduxjs/toolkit"

const INITIALSTATE = {
  eventsList: null,
}

export const eventsSlice = createSlice({
  name: "events",
  initialState: INITIALSTATE,
  reducers: {
    setEventsList(state, action) {
      state.eventsList = action.payload
    },
  },
})

export const { setEventsList } = eventsSlice.actions

export const eventsReducer = eventsSlice.reducer
