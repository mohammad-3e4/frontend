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
      const { subject, data } = action.payload;
      state.subjects[subject] = data;
    },
  },
});

export const {
addBioData, addSubjectInfo
} = studentSlice.actions;

export default studentSlice.reducer;
