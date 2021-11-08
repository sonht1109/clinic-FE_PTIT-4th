import userSrc from 'assets/images/dashboard/user.png';
import eventSrc from 'assets/images/dashboard/event.png';
import saleSrc from 'assets/images/dashboard/sale.png';
import accountPendingSrc from 'assets/images/dashboard/account-pending.png';
import eventPendingSrc from 'assets/images/dashboard/event-pending.png';
import adsCampaignPendingSrc from 'assets/images/dashboard/ads-campaign-pending.png';
import { STATISTIC_KEYS } from '../store/constants';

export const statistics = [
  { name: 'Người dùng', imgSrc: userSrc, key: STATISTIC_KEYS.TOTAL_USER },
  { name: 'Sự kiện', imgSrc: eventSrc, key: STATISTIC_KEYS.TOTAL_EVENT },
  { name: 'Doanh thu', imgSrc: saleSrc, key: STATISTIC_KEYS.TOTAL_REVENUE },
  {
    name: 'Tài khoản chờ xét duyệt',
    imgSrc: accountPendingSrc,
    key: STATISTIC_KEYS.TOTAL_KYC_WAITING,
  },
  {
    name: 'Sự kiện chờ xét duyệt',
    imgSrc: eventPendingSrc,
    key: STATISTIC_KEYS.TOTAL_EVENT_WAITING,
  },
  {
    name: 'Chiến dịch quảng cáo chờ xét duyệt',
    imgSrc: adsCampaignPendingSrc,
    key: STATISTIC_KEYS.TOTAL_ADS_WAITING,
  },
];
