// Copyright 2022 Working Group Two AS
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file wgtwo/subscription/v0/network_info.proto (package wgtwo.subscription.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { PhoneNumber } from "../../common/v0/phonenumber_pb.js";
import { Fqdn, GlobalTitle, Iccid, Imsi, NetworkGeneration, NetworkIdentity, Tadig } from "../../common/v0/types_pb.js";

/**
 * @generated from enum wgtwo.subscription.v0.Code
 */
export enum Code {
  /**
   * @generated from enum value: CODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CODE_OK = 1;
   */
  OK = 1,

  /**
   * @generated from enum value: CODE_ABSENT_PROFILE = 2;
   */
  ABSENT_PROFILE = 2,

  /**
   * @generated from enum value: CODE_ABSENT_SUBSCRIBER = 3;
   */
  ABSENT_SUBSCRIBER = 3,

  /**
   * @generated from enum value: CODE_UNKNOWN_PROFILE = 4;
   */
  UNKNOWN_PROFILE = 4,

  /**
   * @generated from enum value: CODE_BLOCKED_PROFILE = 5;
   */
  BLOCKED_PROFILE = 5,

  /**
   * @generated from enum value: CODE_ROAMING_NOT_ALLOWED = 6;
   */
  ROAMING_NOT_ALLOWED = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(Code)
proto3.util.setEnumType(Code, "wgtwo.subscription.v0.Code", [
  { no: 0, name: "CODE_UNSPECIFIED" },
  { no: 1, name: "CODE_OK" },
  { no: 2, name: "CODE_ABSENT_PROFILE" },
  { no: 3, name: "CODE_ABSENT_SUBSCRIBER" },
  { no: 4, name: "CODE_UNKNOWN_PROFILE" },
  { no: 5, name: "CODE_BLOCKED_PROFILE" },
  { no: 6, name: "CODE_ROAMING_NOT_ALLOWED" },
]);

/**
 * @generated from message wgtwo.subscription.v0.GetNetworkInfoForSubscriberRequest
 */
export class GetNetworkInfoForSubscriberRequest extends Message<GetNetworkInfoForSubscriberRequest> {
  /**
   * @generated from field: wgtwo.common.v0.PhoneNumber phone_number = 1;
   */
  phoneNumber?: PhoneNumber;

  constructor(data?: PartialMessage<GetNetworkInfoForSubscriberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.GetNetworkInfoForSubscriberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phone_number", kind: "message", T: PhoneNumber },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNetworkInfoForSubscriberRequest {
    return new GetNetworkInfoForSubscriberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNetworkInfoForSubscriberRequest {
    return new GetNetworkInfoForSubscriberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNetworkInfoForSubscriberRequest {
    return new GetNetworkInfoForSubscriberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetNetworkInfoForSubscriberRequest | PlainMessage<GetNetworkInfoForSubscriberRequest> | undefined, b: GetNetworkInfoForSubscriberRequest | PlainMessage<GetNetworkInfoForSubscriberRequest> | undefined): boolean {
    return proto3.util.equals(GetNetworkInfoForSubscriberRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.GetNetworkInfoForSubscriberResponse
 */
export class GetNetworkInfoForSubscriberResponse extends Message<GetNetworkInfoForSubscriberResponse> {
  /**
   * @generated from field: repeated wgtwo.subscription.v0.NetworkInfo network_infos = 1;
   */
  networkInfos: NetworkInfo[] = [];

  constructor(data?: PartialMessage<GetNetworkInfoForSubscriberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.GetNetworkInfoForSubscriberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "network_infos", kind: "message", T: NetworkInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNetworkInfoForSubscriberResponse {
    return new GetNetworkInfoForSubscriberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNetworkInfoForSubscriberResponse {
    return new GetNetworkInfoForSubscriberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNetworkInfoForSubscriberResponse {
    return new GetNetworkInfoForSubscriberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetNetworkInfoForSubscriberResponse | PlainMessage<GetNetworkInfoForSubscriberResponse> | undefined, b: GetNetworkInfoForSubscriberResponse | PlainMessage<GetNetworkInfoForSubscriberResponse> | undefined): boolean {
    return proto3.util.equals(GetNetworkInfoForSubscriberResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.GetAttachmentAttemptsForSubscriberRequest
 */
export class GetAttachmentAttemptsForSubscriberRequest extends Message<GetAttachmentAttemptsForSubscriberRequest> {
  /**
   * @generated from field: wgtwo.common.v0.PhoneNumber phone_number = 1;
   */
  phoneNumber?: PhoneNumber;

  /**
   * @generated from field: wgtwo.subscription.v0.Interval filter_by_interval = 2;
   */
  filterByInterval?: Interval;

  /**
   * @generated from field: uint32 max_attempts = 3;
   */
  maxAttempts = 0;

  constructor(data?: PartialMessage<GetAttachmentAttemptsForSubscriberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.GetAttachmentAttemptsForSubscriberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phone_number", kind: "message", T: PhoneNumber },
    { no: 2, name: "filter_by_interval", kind: "message", T: Interval },
    { no: 3, name: "max_attempts", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAttachmentAttemptsForSubscriberRequest {
    return new GetAttachmentAttemptsForSubscriberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAttachmentAttemptsForSubscriberRequest {
    return new GetAttachmentAttemptsForSubscriberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAttachmentAttemptsForSubscriberRequest {
    return new GetAttachmentAttemptsForSubscriberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAttachmentAttemptsForSubscriberRequest | PlainMessage<GetAttachmentAttemptsForSubscriberRequest> | undefined, b: GetAttachmentAttemptsForSubscriberRequest | PlainMessage<GetAttachmentAttemptsForSubscriberRequest> | undefined): boolean {
    return proto3.util.equals(GetAttachmentAttemptsForSubscriberRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.GetAttachmentAttemptsForSubscriberResponse
 */
export class GetAttachmentAttemptsForSubscriberResponse extends Message<GetAttachmentAttemptsForSubscriberResponse> {
  /**
   * @generated from field: repeated wgtwo.subscription.v0.AttachmentAttempt attachment_attempts = 1;
   */
  attachmentAttempts: AttachmentAttempt[] = [];

  constructor(data?: PartialMessage<GetAttachmentAttemptsForSubscriberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.GetAttachmentAttemptsForSubscriberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "attachment_attempts", kind: "message", T: AttachmentAttempt, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAttachmentAttemptsForSubscriberResponse {
    return new GetAttachmentAttemptsForSubscriberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAttachmentAttemptsForSubscriberResponse {
    return new GetAttachmentAttemptsForSubscriberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAttachmentAttemptsForSubscriberResponse {
    return new GetAttachmentAttemptsForSubscriberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAttachmentAttemptsForSubscriberResponse | PlainMessage<GetAttachmentAttemptsForSubscriberResponse> | undefined, b: GetAttachmentAttemptsForSubscriberResponse | PlainMessage<GetAttachmentAttemptsForSubscriberResponse> | undefined): boolean {
    return proto3.util.equals(GetAttachmentAttemptsForSubscriberResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.Interval
 */
export class Interval extends Message<Interval> {
  /**
   * @generated from field: google.protobuf.Timestamp after = 1;
   */
  after?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp before = 2;
   */
  before?: Timestamp;

  constructor(data?: PartialMessage<Interval>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.Interval";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "after", kind: "message", T: Timestamp },
    { no: 2, name: "before", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Interval {
    return new Interval().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Interval {
    return new Interval().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Interval {
    return new Interval().fromJsonString(jsonString, options);
  }

  static equals(a: Interval | PlainMessage<Interval> | undefined, b: Interval | PlainMessage<Interval> | undefined): boolean {
    return proto3.util.equals(Interval, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.AttachmentAttempt
 */
export class AttachmentAttempt extends Message<AttachmentAttempt> {
  /**
   * @generated from field: wgtwo.common.v0.Iccid iccid = 1;
   */
  iccid?: Iccid;

  /**
   * @generated from field: wgtwo.common.v0.Imsi imsi = 2;
   */
  imsi?: Imsi;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: wgtwo.common.v0.NetworkIdentity network_identity = 4;
   */
  networkIdentity?: NetworkIdentity;

  /**
   * @generated from field: wgtwo.common.v0.NetworkGeneration network_generation = 5;
   */
  networkGeneration = NetworkGeneration.NETWORK_GENERATION_UNSPECIFIED;

  /**
   * TADIG code, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.Tadig tadig = 6;
   */
  tadig?: Tadig;

  /**
   * @generated from field: wgtwo.subscription.v0.Status status = 7;
   */
  status?: Status;

  constructor(data?: PartialMessage<AttachmentAttempt>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.AttachmentAttempt";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "iccid", kind: "message", T: Iccid },
    { no: 2, name: "imsi", kind: "message", T: Imsi },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "network_identity", kind: "message", T: NetworkIdentity },
    { no: 5, name: "network_generation", kind: "enum", T: proto3.getEnumType(NetworkGeneration) },
    { no: 6, name: "tadig", kind: "message", T: Tadig },
    { no: 7, name: "status", kind: "message", T: Status },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttachmentAttempt {
    return new AttachmentAttempt().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttachmentAttempt {
    return new AttachmentAttempt().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttachmentAttempt {
    return new AttachmentAttempt().fromJsonString(jsonString, options);
  }

  static equals(a: AttachmentAttempt | PlainMessage<AttachmentAttempt> | undefined, b: AttachmentAttempt | PlainMessage<AttachmentAttempt> | undefined): boolean {
    return proto3.util.equals(AttachmentAttempt, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.NetworkInfo
 */
export class NetworkInfo extends Message<NetworkInfo> {
  /**
   * @generated from field: wgtwo.common.v0.Iccid iccid = 1;
   */
  iccid?: Iccid;

  /**
   * @generated from field: wgtwo.common.v0.Imsi imsi = 2;
   */
  imsi?: Imsi;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: wgtwo.common.v0.NetworkIdentity network_identity = 4;
   */
  networkIdentity?: NetworkIdentity;

  /**
   * @generated from field: wgtwo.common.v0.NetworkGeneration network_generation = 5;
   */
  networkGeneration = NetworkGeneration.NETWORK_GENERATION_UNSPECIFIED;

  /**
   * TADIG code, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.Tadig tadig = 6;
   */
  tadig?: Tadig;

  /**
   * MSC, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.GlobalTitle msc = 7;
   */
  msc?: GlobalTitle;

  /**
   * VLR, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.GlobalTitle vlr = 8;
   */
  vlr?: GlobalTitle;

  /**
   * SGSN, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.GlobalTitle sgsn = 9;
   */
  sgsn?: GlobalTitle;

  /**
   * MME, if present
   * May be empty
   *
   * @generated from field: wgtwo.common.v0.Fqdn mme = 10;
   */
  mme?: Fqdn;

  constructor(data?: PartialMessage<NetworkInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.NetworkInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "iccid", kind: "message", T: Iccid },
    { no: 2, name: "imsi", kind: "message", T: Imsi },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "network_identity", kind: "message", T: NetworkIdentity },
    { no: 5, name: "network_generation", kind: "enum", T: proto3.getEnumType(NetworkGeneration) },
    { no: 6, name: "tadig", kind: "message", T: Tadig },
    { no: 7, name: "msc", kind: "message", T: GlobalTitle },
    { no: 8, name: "vlr", kind: "message", T: GlobalTitle },
    { no: 9, name: "sgsn", kind: "message", T: GlobalTitle },
    { no: 10, name: "mme", kind: "message", T: Fqdn },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NetworkInfo {
    return new NetworkInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NetworkInfo {
    return new NetworkInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NetworkInfo {
    return new NetworkInfo().fromJsonString(jsonString, options);
  }

  static equals(a: NetworkInfo | PlainMessage<NetworkInfo> | undefined, b: NetworkInfo | PlainMessage<NetworkInfo> | undefined): boolean {
    return proto3.util.equals(NetworkInfo, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v0.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: wgtwo.subscription.v0.Code code = 1;
   */
  code = Code.UNSPECIFIED;

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v0.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(Code) },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Status {
    return new Status().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJsonString(jsonString, options);
  }

  static equals(a: Status | PlainMessage<Status> | undefined, b: Status | PlainMessage<Status> | undefined): boolean {
    return proto3.util.equals(Status, a, b);
  }
}
