import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;

  &:hover {
    text-decoration: underline;
    color: orange;
  }

  cursor: context-menu;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;

  &:hover {
    text-decoration: underline;
    color: orange;
  }

  cursor: context-menu;
`;


