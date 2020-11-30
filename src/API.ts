/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type TableSublogFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type GetSublogQueryVariables = {
  id: string,
};

export type GetSublogQuery = {
  getSublog:  {
    __typename: "Sublog",
    id: string,
    title: string | null,
  } | null,
};

export type ListSublogsQueryVariables = {
  filter?: TableSublogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSublogsQuery = {
  listSublogs:  {
    __typename: "SublogConnection",
    items:  Array< {
      __typename: "Sublog",
      id: string,
      title: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
