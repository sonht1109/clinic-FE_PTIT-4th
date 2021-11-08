/**
 *
 * Button
 *
 */
 import styled from 'styled-components';

 interface IButton {
   color?: string;
   background?: string;
   width?: string;
   height?: string;
   borderRadius?: string;
   fontSize?: string;
   fontWeight?: number;
   border?: string;
   lineHeight?: string;
 }
 
 const Button = styled.button<IButton>`
   border: ${props => props.border || '1px solid #00CB82'};
   border-radius: 4px;
   width: ${props => props.width || '152px'};
   height: ${props => props.height || '40px'};
   color: ${props => props.color || 'white'};
   background: ${props => props.background || '#00CB82'};
   box-sizing: border-box;
   font-size: ${(props) => props.fontSize || '16px'};
   outline: none;
   line-height: ${(props) => props.lineHeight || '24px'};   
   font-weight: ${(props) => props.fontWeight || 700};
   transition: all .2s;
 
   &:disabled {
     cursor: not-allowed;
     background-color: #A6B0CF;
     color: white;
   }
   &:hover{
     cursor: pointer;
     box-shadow: 0px 4px 15px rgba(130, 130, 130, 0.5);
   }
 
 `;
 
 export default Button;
