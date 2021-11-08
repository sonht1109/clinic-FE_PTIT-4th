import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import React, { Children, useEffect, useState } from 'react';
import { statistics } from './data';
import { SStaticItem, SStatistic } from './styles';

export default function Statistic() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.INFORMATIONS.STATISTIC })
      .then(res => {
        setData({ ...res.data });
      })
      .catch(err => {
        handleError(err);
      });
  }, []);

    return (
      <SStatistic>
        {Children.toArray(
          statistics.map(s => (
            <SStaticItem>
              <div className="item__left">
                <span className="number">{data ? data[s.key] : 0}</span>
                <span className="title">{s.name}</span>
              </div>
              <div className="item__right">
                <img src={s.imgSrc} width={100} height={100} alt="" />
              </div>
            </SStaticItem>
          )),
        )}
      </SStatistic>
    );
}
