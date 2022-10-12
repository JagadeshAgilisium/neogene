import { configureStore } from '@reduxjs/toolkit'
import subjectReducer from './features/subjectSlice'
import scanReducer from './features/scanSlice'
import subjectTaskReducer from './features/subjectTaskSlice'
const store = configureStore({
  reducer: { subject: subjectReducer, scan: scanReducer  ,subjectTask:subjectTaskReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store
