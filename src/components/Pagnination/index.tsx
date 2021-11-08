import React from 'react';
import P, { PaginationProps } from 'rc-pagination';
import styled from 'styled-components';
import theme from 'styles/theme';
import './styles.css';

interface Props extends PaginationProps {
  handleChangePageSize: (pageSize: number) => void;
}

const arrayPageSize = Array.from({ length: 4 }).map((_, i) => (i + 1) * 5);

export default function Pagination({ handleChangePageSize, ...rest }: Props) {
  const { pageSize = 1, total = 0, current = 1 } = rest;

  const onChange = (e: any) => {
    handleChangePageSize(parseInt(e.target.value));
  };

  const from = (current - 1) * pageSize + 1;
  const to = current * pageSize <= total ? current * pageSize : total;

  return (
    <SPagination>
      <div className="page-size">
        <span>
          Hiển thị từ {from} đến {to} trong số {total} bản ghi
          {total > 0 && (
            <select
              className="page-size__select"
              onChange={onChange}
              value={pageSize}
            >
              {React.Children.toArray(
                arrayPageSize.map(ps => <option value={ps}>{ps}</option>),
              )}
            </select>
          )}
        </span>
      </div>
      <P {...rest} hideOnSinglePage={true} showLessItems={true} />
    </SPagination>
  );
}

export const SPagination = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .page-size {
    font-size: 12px;
    line-height: 18px;
    color: #6e7b97;
    &__select {
      margin-left: 16px;
      border: 1px solid ${theme.color.border_gray};
      border-radius: 5px;
      padding: 1px 0px 1px 4px;
      color: #6e7b97;
      background-color: white;
      outline: none;
      height: 20px;
    }
  }
  .rc-pagination {
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
