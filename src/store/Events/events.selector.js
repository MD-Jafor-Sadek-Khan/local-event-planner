import { createSelector } from '@reduxjs/toolkit';

const selectEventsSlice = (state) => state.events

export const selectEventsList = createSelector(
    [selectEventsSlice],
    (eventsSlice) => eventsSlice.eventsList
)