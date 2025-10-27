import Pagination from './PaginationModel';
import * as view from './paginationView';

export default function pagination (itemsTotal, itemsOnPage) {
  const paginationSet = new Pagination(itemsTotal, itemsOnPage);
  const render = view.paginationRender;

  return render(paginationSet);
}