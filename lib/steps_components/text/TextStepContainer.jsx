import styled from 'styled-components';

const TextStepContainer = styled.div`
  align-items: flex-end;
  display: ${props => ((props.step.metadata && props.step.metadata.hideStep) ? 'none' : 'flex')};;
  justify-content: ${props => (props.user ? 'flex-end' : 'flex-start')};
`;

export default TextStepContainer;
