import type { RootState } from '@app/store';

declare module 'react-redux' {
  export function useSelector<TState = RootState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ): TSelected;
}
