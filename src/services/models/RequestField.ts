import { autoserialize } from "cerialize";

// Generated by https://quicktype.io

export class RequestField {
  @autoserialize
  RequestCardType?: string;
  @autoserialize
  Requestor?: string;
  @autoserialize
  RequestorCardHolderName?: string;
  @autoserialize
  RequestorDSN?: string;
  @autoserialize
  RequestorDirectorate?: string;
  @autoserialize
  RequestDateofRequest?: string;
  @autoserialize
  RequestSource?: string;
  @autoserialize
  RequestJustification?: string;
  @autoserialize
  RequestCurrencyType?: string;
  @autoserialize
  RequestIsJ6?: string;
}