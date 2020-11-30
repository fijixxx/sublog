/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSublog = /* GraphQL */ `
  query GetSublog($id: String!) {
    getSublog(id: $id) {
      id
      title
    }
  }
`;
export const listSublogs = /* GraphQL */ `
  query ListSublogs(
    $filter: TableSublogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSublogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;
