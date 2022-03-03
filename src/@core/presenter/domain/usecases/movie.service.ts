import {Dispatch} from '@reduxjs/toolkit';
import {
  RequestHeaders,
  RequestResponse,
} from '@core/interfaces/request.interface';
import {createHeaders, get} from '@utils/request.util';
import {MovieEntity} from '../entity/movie.entity';
import {setShowAlert} from '@presenter/io/alertSlice';

export async function getAllMovie(
  dispatch: Dispatch,
): Promise<RequestResponse<MovieEntity[]>> {
  const resp = await get<RequestHeaders, MovieEntity[]>({
    headers: createHeaders({}),
    url: 'http://localhost:3000/movie/get_all_movie',
  });

  if (!resp.error) {
    return resp;
  }
  dispatch(
    setShowAlert({
      variant: 'error',
      message: 'Error getting listed. Try again',
    }),
  );
  return resp;
}
