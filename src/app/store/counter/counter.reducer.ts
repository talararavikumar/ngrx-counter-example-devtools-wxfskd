    import { createReducer, on } from '@ngrx/store';
    import { increment, decrement, reset } from './counter.actions';
     
    export const initialState = 0;
     
    export const counterReducer = createReducer(
      initialState,
      on(increment, (state, cnt) => state + cnt),
      on(decrement, (state, cnt) => state - cnt),
      on(reset, (state) => 0)
    );
     