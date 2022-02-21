import type {RootStateType, AppDispatchType} from "../redux/store"
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'


export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector