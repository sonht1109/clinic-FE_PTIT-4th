import theme from 'styles/theme';
import styled, { keyframes } from 'styled-components';

interface IIindicator {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const indicatorSize = {
  sm: {
    size: 20,
    borderSize: 3
  },
  md: {
    size: 30,
    borderSize: 4,
  },
  lg: {
    size: 40,
    borderSize: 5,
  },
  xl: {
    size: 60,
    borderSize: 6
  }
}

const indicatorAnimation = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const ActivityIndicator = styled.div<IIindicator>`
  margin: auto;
  width: ${props => indicatorSize[props.size].size + 'px'};
  height: ${props => indicatorSize[props.size].size + 'px'};
  border: ${props => indicatorSize[props.size].borderSize + 'px'} solid #bed9ed;
  border-radius: 50%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: ${props => -1 * indicatorSize[props.size].borderSize + 'px'};
    left: ${props => -1 * indicatorSize[props.size].borderSize + 'px'};
    width: ${props => indicatorSize[props.size].size + 'px'};
    height: ${props => indicatorSize[props.size].size + 'px'};
    border: ${props => indicatorSize[props.size].borderSize + 'px'} solid ${theme.color.green};
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: 1s ${indicatorAnimation} linear infinite;
  }
`;

export default ActivityIndicator
