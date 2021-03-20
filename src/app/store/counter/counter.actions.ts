import { NumberInput } from '@angular/cdk/coercion';
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment',props<any>());
export const decrement = createAction('[Counter Component] Decrement',props<any>());
export const reset = createAction('[Counter Component] Reset');