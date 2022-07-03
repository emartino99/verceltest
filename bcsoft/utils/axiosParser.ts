import { ApiError, ApiResults, SharepointResponse } from "../models";

export const axiosParser = <T>(result: PromiseSettledResult<SharepointResponse<T>>): ApiResults<T> | ApiError => result.status === 'fulfilled' ? result?.value?.d : {error: result.reason}
export const isModel = <T>(data: ApiResults<T> | ApiError): data is ApiResults<T> => 
   (data as ApiResults<T>)?.results !== undefined;
export const parseResults = <T>(data: ApiResults<T> | ApiError) => isModel<T>(data) ? data.results : undefined;
