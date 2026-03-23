import { createFeature, createReducer } from '@ngrx/store';

export const hotelsFeature = createFeature({
  name: 'hotels',
  reducer: createReducer({ loading: false }),
});
