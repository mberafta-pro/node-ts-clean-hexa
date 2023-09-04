import { IPresenter } from './IPresenter';

export interface IQueryHandler<TQuery = never> {
  handle: (presenter: IPresenter, request: TQuery) => Promise<void>;
}
