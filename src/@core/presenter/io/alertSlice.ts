import {createSlice} from '@reduxjs/toolkit';

interface Options {
  variant: string | null;
  message: string | null;
}

export interface AlertSlice {
  visible: boolean;
  options: Options;
}

const initialState: AlertSlice = {
  visible: false,
  options: {variant: 'success', message: 'Test alert to show'},
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.visible = true;
      state.options = {...action.payload};
    },
    setHiddenAlert: state => {
      state.visible = false;
    },
  },
});

export const {setShowAlert, setHiddenAlert} = alertSlice.actions;

export default alertSlice.reducer;
