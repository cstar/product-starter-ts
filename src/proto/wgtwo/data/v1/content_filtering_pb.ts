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
// @generated from file wgtwo/data/v1/content_filtering.proto (package wgtwo.data.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IpAddressV4 } from "../../common/v1/types_pb.js";

/**
 * @generated from enum wgtwo.data.v1.SetFilterStatus
 */
export enum SetFilterStatus {
  /**
   * @generated from enum value: SET_FILTER_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Filter has been successfully updated
   *
   * @generated from enum value: SET_FILTER_STATUS_OK = 1;
   */
  OK = 1,

  /**
   * Update failed
   *
   * @generated from enum value: SET_FILTER_STATUS_ERROR = 2;
   */
  ERROR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SetFilterStatus)
proto3.util.setEnumType(SetFilterStatus, "wgtwo.data.v1.SetFilterStatus", [
  { no: 0, name: "SET_FILTER_STATUS_UNSPECIFIED" },
  { no: 1, name: "SET_FILTER_STATUS_OK" },
  { no: 2, name: "SET_FILTER_STATUS_ERROR" },
]);

/**
 * @generated from enum wgtwo.data.v1.Category
 */
export enum Category {
  /**
   * Not specified
   * Using this category will be rejected with the error INVALID_ARGUMENT
   *
   * @generated from enum value: CATEGORY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Adult
   * Sexually explicit content
   *
   * @generated from enum value: CATEGORY_ADULT = 2;
   */
  ADULT = 2,

  /**
   * Alcohol and tobacco
   * Sites that sell and discuss consumption
   *
   * @generated from enum value: CATEGORY_ALCOHOL_AND_TOBACCO = 4;
   */
  ALCOHOL_AND_TOBACCO = 4,

  /**
   * Dating sites
   *
   * @generated from enum value: CATEGORY_DATING_AND_PERSONALS = 31;
   */
  DATING_AND_PERSONALS = 31,

  /**
   * Sites pretending to be another page to gather information
   *
   * @generated from enum value: CATEGORY_DECEPTIVE = 10;
   */
  DECEPTIVE = 10,

  /**
   * Sites that sell and discuss consumption of drugs (excluding alcohol and tobacco)
   *
   * @generated from enum value: CATEGORY_DRUGS = 11;
   */
  DRUGS = 11,

  /**
   * Gambling
   *
   * @generated from enum value: CATEGORY_GAMBLING = 16;
   */
  GAMBLING = 16,

  /**
   * Hacking and cracking
   *
   * @generated from enum value: CATEGORY_HACKING = 19;
   */
  HACKING = 19,

  /**
   * Hate and terrorism
   *
   * @generated from enum value: CATEGORY_HATE = 20;
   */
  HATE = 20,

  /**
   * Illegal content
   *
   * @generated from enum value: CATEGORY_ILLEGAL_CONTENT = 23;
   */
  ILLEGAL_CONTENT = 23,

  /**
   * Malicious
   *
   * @generated from enum value: CATEGORY_MALICIOUS = 26;
   */
  MALICIOUS = 26,

  /**
   * Message boards and forums
   *
   * @generated from enum value: CATEGORY_MESSAGE_BOARDS_AND_FORUMS = 28;
   */
  MESSAGE_BOARDS_AND_FORUMS = 28,

  /**
   * Parked sites and domains
   *
   * @generated from enum value: CATEGORY_PARKED = 30;
   */
  PARKED = 30,

  /**
   * Proxy and filter avoidance
   *
   * @generated from enum value: CATEGORY_PROXY_AND_FILTER_AVOIDANCE = 32;
   */
  PROXY_AND_FILTER_AVOIDANCE = 32,

  /**
   * Weapons
   *
   * @generated from enum value: CATEGORY_WEAPONS = 46;
   */
  WEAPONS = 46,
}
// Retrieve enum metadata with: proto3.getEnumType(Category)
proto3.util.setEnumType(Category, "wgtwo.data.v1.Category", [
  { no: 0, name: "CATEGORY_UNSPECIFIED" },
  { no: 2, name: "CATEGORY_ADULT" },
  { no: 4, name: "CATEGORY_ALCOHOL_AND_TOBACCO" },
  { no: 31, name: "CATEGORY_DATING_AND_PERSONALS" },
  { no: 10, name: "CATEGORY_DECEPTIVE" },
  { no: 11, name: "CATEGORY_DRUGS" },
  { no: 16, name: "CATEGORY_GAMBLING" },
  { no: 19, name: "CATEGORY_HACKING" },
  { no: 20, name: "CATEGORY_HATE" },
  { no: 23, name: "CATEGORY_ILLEGAL_CONTENT" },
  { no: 26, name: "CATEGORY_MALICIOUS" },
  { no: 28, name: "CATEGORY_MESSAGE_BOARDS_AND_FORUMS" },
  { no: 30, name: "CATEGORY_PARKED" },
  { no: 32, name: "CATEGORY_PROXY_AND_FILTER_AVOIDANCE" },
  { no: 46, name: "CATEGORY_WEAPONS" },
]);

/**
 * @generated from message wgtwo.data.v1.SetGlobalFilterRequest
 */
export class SetGlobalFilterRequest extends Message<SetGlobalFilterRequest> {
  /**
   * The filter to enable
   * Not setting a filter will disable the current filter
   *
   * @generated from field: wgtwo.data.v1.Filter filter = 1;
   */
  filter?: Filter;

  constructor(data?: PartialMessage<SetGlobalFilterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.SetGlobalFilterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "message", T: Filter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetGlobalFilterRequest {
    return new SetGlobalFilterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetGlobalFilterRequest {
    return new SetGlobalFilterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetGlobalFilterRequest {
    return new SetGlobalFilterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetGlobalFilterRequest | PlainMessage<SetGlobalFilterRequest> | undefined, b: SetGlobalFilterRequest | PlainMessage<SetGlobalFilterRequest> | undefined): boolean {
    return proto3.util.equals(SetGlobalFilterRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v1.SetGlobalFilterResponse
 */
export class SetGlobalFilterResponse extends Message<SetGlobalFilterResponse> {
  /**
   * The response status for setting the filter
   *
   * @generated from field: wgtwo.data.v1.SetFilterStatus status = 1;
   */
  status = SetFilterStatus.UNSPECIFIED;

  /**
   * Human readable description provided in case of a unsuccessful update
   *
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<SetGlobalFilterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.SetGlobalFilterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(SetFilterStatus) },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetGlobalFilterResponse {
    return new SetGlobalFilterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetGlobalFilterResponse {
    return new SetGlobalFilterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetGlobalFilterResponse {
    return new SetGlobalFilterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SetGlobalFilterResponse | PlainMessage<SetGlobalFilterResponse> | undefined, b: SetGlobalFilterResponse | PlainMessage<SetGlobalFilterResponse> | undefined): boolean {
    return proto3.util.equals(SetGlobalFilterResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v1.GetGlobalFilterRequest
 */
export class GetGlobalFilterRequest extends Message<GetGlobalFilterRequest> {
  constructor(data?: PartialMessage<GetGlobalFilterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.GetGlobalFilterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalFilterRequest {
    return new GetGlobalFilterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalFilterRequest {
    return new GetGlobalFilterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalFilterRequest {
    return new GetGlobalFilterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGlobalFilterRequest | PlainMessage<GetGlobalFilterRequest> | undefined, b: GetGlobalFilterRequest | PlainMessage<GetGlobalFilterRequest> | undefined): boolean {
    return proto3.util.equals(GetGlobalFilterRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v1.GetGlobalFilterResponse
 */
export class GetGlobalFilterResponse extends Message<GetGlobalFilterResponse> {
  /**
   * @generated from field: wgtwo.data.v1.Filter active_filter = 1;
   */
  activeFilter?: Filter;

  constructor(data?: PartialMessage<GetGlobalFilterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.GetGlobalFilterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "active_filter", kind: "message", T: Filter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalFilterResponse {
    return new GetGlobalFilterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalFilterResponse {
    return new GetGlobalFilterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalFilterResponse {
    return new GetGlobalFilterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetGlobalFilterResponse | PlainMessage<GetGlobalFilterResponse> | undefined, b: GetGlobalFilterResponse | PlainMessage<GetGlobalFilterResponse> | undefined): boolean {
    return proto3.util.equals(GetGlobalFilterResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v1.Filter
 */
export class Filter extends Message<Filter> {
  /**
   * @generated from field: repeated wgtwo.data.v1.Category blocked_categories = 1;
   */
  blockedCategories: Category[] = [];

  /**
   * The ip to redirect to if the category is blocked
   *
   * @generated from oneof wgtwo.data.v1.Filter.block_mode
   */
  blockMode: {
    /**
     * @generated from field: wgtwo.data.v1.BlockModeIp block_mode_ip = 2;
     */
    value: BlockModeIp;
    case: "blockModeIp";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Filter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.Filter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "blocked_categories", kind: "enum", T: proto3.getEnumType(Category), repeated: true },
    { no: 2, name: "block_mode_ip", kind: "message", T: BlockModeIp, oneof: "block_mode" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Filter {
    return new Filter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJsonString(jsonString, options);
  }

  static equals(a: Filter | PlainMessage<Filter> | undefined, b: Filter | PlainMessage<Filter> | undefined): boolean {
    return proto3.util.equals(Filter, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v1.BlockModeIp
 */
export class BlockModeIp extends Message<BlockModeIp> {
  /**
   * @generated from field: wgtwo.common.v1.IpAddressV4 ipv4 = 1;
   */
  ipv4?: IpAddressV4;

  constructor(data?: PartialMessage<BlockModeIp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v1.BlockModeIp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ipv4", kind: "message", T: IpAddressV4 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockModeIp {
    return new BlockModeIp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockModeIp {
    return new BlockModeIp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockModeIp {
    return new BlockModeIp().fromJsonString(jsonString, options);
  }

  static equals(a: BlockModeIp | PlainMessage<BlockModeIp> | undefined, b: BlockModeIp | PlainMessage<BlockModeIp> | undefined): boolean {
    return proto3.util.equals(BlockModeIp, a, b);
  }
}

