/*
 *
 * UserEvent style css file
 * make by phamthainb
 */

import styled from 'styled-components';

const WrapUserEvent = styled.div`
    margin-top:32px;
  .header { 
    font-size: 16px; 
    font-weight: 500;
    line-height: 24px; 
    color: #333B6A;
    text-transform: uppercase;
  }
  .tools{
      padding-top:32px;
      padding-bottom:8px;
      .tool-item{
          margin-left: 16px;;
          .delete{
            &:after{
              color:#FF6C6C;
            }
            &:hover{
              border-color: #FF6C6C;
            }
          }
      }
  }
  .table-container{
    tr{
      &.active{
        button{
          background: #00CB82;
          color:white;
        }
      }
    }
  }
`;

export default WrapUserEvent;
