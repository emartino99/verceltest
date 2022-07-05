import { AxiosError } from "axios"

export type SharepointResponse<T> = { d: ApiResults<T> }  | AxiosError;
export type ApiResults<T> = { results: T }
export type ApiError = { error: string }