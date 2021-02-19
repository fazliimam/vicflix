import { Operation } from '@apollo/client/core';
import { OperationTypeNode } from 'graphql';

const formatMessage = (
  operationType: OperationTypeNode,
  operation: Operation,
  ellapsed: number
) => {
  const headerCss = [
    'color: gray; font-weight: lighter', // title
    `color: ${operationType === 'query' ? '#03A9F4' : 'red'};`, // operationType
    'color: inherit;', // operationName
  ];

  const parts = ['%c apollo', `%c${operationType}`, `%c${operation.operationName}`];

  if (operationType !== 'subscription') {
    parts.push(`%c(in ${ellapsed} ms)`);
    headerCss.push('color: gray; font-weight: lighter;'); // time
  }

  return [parts.join(' '), ...headerCss];
};

export default formatMessage;
