/*
*
* AdminKycManagement types
* make by phamthainb
*/
import { ICoreAdmin } from 'configs/types';
import { IdTypeEnum, KycStatusEnum } from 'enum';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAdminKycManagement {
  data: IKyc[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: IKyc | null;
  shouldRefetch: boolean;
}

export type ActionsAdminKycManagement = ActionType<typeof actions>;

export interface ICoreKyc {
  admin: ICoreAdmin;
  id: string;
  name: string;
  imgUrl1?: string;
  imgUrl2?: string;
  imgUrl3?: string;
  status: KycStatusEnum;
  note?: string;
  processedDate?: string;
}

export interface IKyc extends ICoreKyc {
  country: string;
  address: string;
  idType: IdTypeEnum;
  job: string;
  idNumber: string;
}