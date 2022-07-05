import { AxiosError } from "axios";
import {   ApiError, ApiResults, SharepointResponse } from "../models";

export const isError = <T>(data: SharepointResponse<T>  ): data is AxiosError => (data as AxiosError)?.isAxiosError ;
export const axiosParser = <T>(result: PromiseSettledResult<SharepointResponse<T>>): ApiResults<T> | ApiError => 
   result.status === 'fulfilled' 
      ?  isError(result.value) 
         ?  {error: result.value.message }
         :  result.value.d
      : { error: result.reason?.message }
export const isModel = <T>(data: ApiResults<T> | ApiError): data is ApiResults<T> => 
   (data as ApiResults<T>)?.results !== undefined;
export const parseResults = <T>(data: ApiResults<T> | ApiError) => isModel<T>(data) ? data.results : undefined;
