import {SCheckbox} from 'components/Input/Checkbox';
import styled from 'styled-components';

export interface Ithead {
  name: string;
  colspan?: number;
  props?: any;
}
interface Props {
  header: Ithead[];
  children?: any;
  minWidth?: string;
}

const Table = ({ header, children, minWidth = '900px' }: Props) => {
  return (
    <StylesTable>
      <table style={{minWidth}}>
        <thead>
          <tr className="bold">
            {header.map((theadItem: Ithead, index: number) => {
              return (
                <th key={index} colSpan={theadItem?.colspan||1}  { ...theadItem.props}>
                  {theadItem.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </StylesTable>
  );
};

const StylesTable = styled.div`
  overflow: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  table {
    border-collapse: initial;
    width: 100%;
    border-spacing: 2px;
    thead tr th {
      text-align: center;
      background: #718098;
      color: #fff;
      padding: 16px 19px;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      border: none;
    }
    thead tr {
      th:first-child {
        border-top-left-radius: 12px;
      }
      th:last-child {
        border-top-right-radius: 12px;
      }
    }
    tbody {
      tr {
        position: relative;
        background: #ffffff80;
        transition: all 0.1s ease;
        &::after {
          display: block;
          opacity: 0;
          transition: all 0.1s ease;
          content: '';
          background: #00cb82;
          width: 2px;
          height: 36px;
          left: 0;
          top: 50%;
          position: absolute;
          transform: translateY(-50%);
        }
        &:hover {
          cursor: pointer;
          background: #ffffff;
          &::after {
            opacity: 1;
          }
        }
        &.active {
          cursor: pointer;
          background: #ffffff;
          &::after {
            opacity: 1;
          }
        }
        td {
          text-align: center;
          padding: 16px 19px;
          color: #718098;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          border: 1px solid #dfe9f5;
          margin-left: 5px;
          & > ${SCheckbox} {
            margin: 0 auto;
          }
        }
      }
      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 12px;
        }
        td:last-child {
          border-bottom-right-radius: 12px;
        }
      }
    }
  }
`;

export default Table;
