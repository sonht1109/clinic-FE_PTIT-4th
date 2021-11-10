/*
 *
 * Dashboard actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);
