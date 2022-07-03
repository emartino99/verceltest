export type SharepointResponse<T> = { d: ApiResults<T> }
export type ApiResults<T> = { results: T }
export type ApiError = { error: string }