// Generated by https://quicktype.io

export interface SharepointUser {
  __metadata: Metadata;
  Id: number;
  Title: string;
  EMail: null | string;
  ID: number;
  Name: string;
  UserName: string;
}

export interface Metadata {
  id: string;
  uri: string;
  etag: string;
  type: Type;
}

export enum Type {
  SPDataUserInfoItem = "SP.Data.UserInfoItem"
}