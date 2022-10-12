import { createSlice } from '@reduxjs/toolkit'

const displaySubjectState = {
  subjectTask: [],
}
const subjectTaskSlice = createSlice({
  name: 'subjecttask',
  initialState: displaySubjectState,
  reducers: {
    subjectTaskSFetch: (state, action) => {
      state.subjectTask = [action.payload]
    },
  },
})

export const subjectTask =  subjectTaskSlice.actions
export default subjectTaskSlice.reducer
