import {RequestResponse} from '@core/interfaces/request.interface';
import {MovieEntity} from '@presenter/domain/entity/movie.entity';
import {getAllMovie} from '@presenter/domain/usecases/movie.service';
import {createSlice, Dispatch} from '@reduxjs/toolkit';

export interface MovieSlice {
  data: MovieEntity[];
}

const initialState: MovieSlice = {
  data: [],
};

export const getAllMovieRedux = async (dispatch: Dispatch) => {
  const result: RequestResponse<MovieEntity[]> = await getAllMovie(dispatch);
  if (!result.error) {
    dispatch(setData(result.data));
  }
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setData} = movieSlice.actions;

export default movieSlice.reducer;
