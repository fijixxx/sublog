export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Sublog = {
  __typename?: 'Sublog';
  id: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  category: Maybe<Scalars['String']>;
  media: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  eyeCatchURL: Maybe<Scalars['String']>;
  tag: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt: Maybe<Scalars['String']>;
  body: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getById: Maybe<Sublog>;
  getAll: Maybe<Array<Maybe<Sublog>>>;
  getByFileName: Maybe<Sublog>;
  getByCategory: Maybe<Array<Maybe<Sublog>>>;
};


export type QueryGetByIdArgs = {
  id: Maybe<Scalars['String']>;
};


export type QueryGetByFileNameArgs = {
  fileName: Maybe<Scalars['String']>;
};


export type QueryGetByCategoryArgs = {
  category: Maybe<Scalars['String']>;
};
