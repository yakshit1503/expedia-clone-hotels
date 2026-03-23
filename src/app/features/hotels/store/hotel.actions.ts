import { createActionGroup, emptyProps } from '@ngrx/store';

export const hotelActions = createActionGroup({
  source: 'Hotels',
  events: {
    'Load Hotels': emptyProps(),
  },
});
