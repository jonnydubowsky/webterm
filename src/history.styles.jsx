import styled from 'styled-components';
import * as indicators from './indicators';

export const HistoryWrapper = styled.div`
  overflow: auto;
  padding-top: 100px;
  display: grid;
`;

export const CenteredContent = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 600px;
  width: 100%;
  grid-row-gap: 16px;
  align-content: end;
  padding: 16px;
`;

export const Result = styled.div`
  display: grid;
  grid-template-columns: min-content minmax(40%, min-content) auto;
  grid-gap: 8px 8px;
  align-items: top;
  line-height: 1.2rem;
`;

export const Input = styled.code`
  color: var(--magenta);
  word-wrap: break-word;
  overflow: hidden;
`;

export const Location = styled.span`
  color: var(--light-grey);
  margin-left: auto;
`;

export const OutputList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Output = styled.div`
  background-color: var(--pitch-black);
  border-radius: 2px;
  padding: 16px;
  grid-column: span 3;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
`;

export const InputIndicator = styled(indicators.InputIndicator)`
  margin-left: 16px;
`;
