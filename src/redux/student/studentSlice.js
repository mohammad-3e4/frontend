import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bioData: {},
  subjects:{},
  error: null,
  loading: false,
};

const studentSlice = createSlice({
  name: 'StudentInfo',
  initialState,
  reducers: {
    addBioData: (state, action) => {
       state.bioData = action.payload
    },
    addSubjectInfo: (state, action) => {
       state.subjects = action.payload
    }
  },
});

export const {
addBioData, addSubjectInfo
} = studentSlice.actions;

export default studentSlice.reducer;
