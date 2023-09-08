// Copyright 2020 Working Group Two AS
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
// @generated from file wgtwo/data/v0/data.proto (package wgtwo.data.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PhoneNumber } from "../../common/v0/phonenumber_pb.js";

/**
 * @generated from message wgtwo.data.v0.SetCustomDnsRequest
 */
export class SetCustomDnsRequest extends Message<SetCustomDnsRequest> {
  /**
   * @generated from field: wgtwo.common.v0.PhoneNumber subscriber = 1;
   */
  subscriber?: PhoneNumber;

  /**
   * @generated from field: wgtwo.data.v0.IpV4Pair dnsV4 = 2;
   */
  dnsV4?: IpV4Pair;

  /**
   * @generated from field: wgtwo.data.v0.IpV6Pair dnsV6 = 3;
   */
  dnsV6?: IpV6Pair;

  constructor(data?: PartialMessage<SetCustomDnsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.SetCustomDnsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subscriber", kind: "message", T: PhoneNumber },
    { no: 2, name: "dnsV4", kind: "message", T: IpV4Pair },
    { no: 3, name: "dnsV6", kind: "message", T: IpV6Pair },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCustomDnsRequest {
    return new SetCustomDnsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCustomDnsRequest {
    return new SetCustomDnsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCustomDnsRequest {
    return new SetCustomDnsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetCustomDnsRequest | PlainMessage<SetCustomDnsRequest> | undefined, b: SetCustomDnsRequest | PlainMessage<SetCustomDnsRequest> | undefined): boolean {
    return proto3.util.equals(SetCustomDnsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.GetCustomDnsRequest
 */
export class GetCustomDnsRequest extends Message<GetCustomDnsRequest> {
  /**
   * @generated from field: wgtwo.common.v0.PhoneNumber subscriber = 1;
   */
  subscriber?: PhoneNumber;

  constructor(data?: PartialMessage<GetCustomDnsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.GetCustomDnsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subscriber", kind: "message", T: PhoneNumber },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomDnsRequest {
    return new GetCustomDnsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomDnsRequest {
    return new GetCustomDnsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomDnsRequest {
    return new GetCustomDnsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCustomDnsRequest | PlainMessage<GetCustomDnsRequest> | undefined, b: GetCustomDnsRequest | PlainMessage<GetCustomDnsRequest> | undefined): boolean {
    return proto3.util.equals(GetCustomDnsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.ClearCustomDnsRequest
 */
export class ClearCustomDnsRequest extends Message<ClearCustomDnsRequest> {
  /**
   * @generated from field: wgtwo.common.v0.PhoneNumber subscriber = 1;
   */
  subscriber?: PhoneNumber;

  constructor(data?: PartialMessage<ClearCustomDnsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.ClearCustomDnsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subscriber", kind: "message", T: PhoneNumber },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearCustomDnsRequest {
    return new ClearCustomDnsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearCustomDnsRequest {
    return new ClearCustomDnsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearCustomDnsRequest {
    return new ClearCustomDnsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClearCustomDnsRequest | PlainMessage<ClearCustomDnsRequest> | undefined, b: ClearCustomDnsRequest | PlainMessage<ClearCustomDnsRequest> | undefined): boolean {
    return proto3.util.equals(ClearCustomDnsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.IpV4Pair
 */
export class IpV4Pair extends Message<IpV4Pair> {
  /**
   * @generated from field: wgtwo.data.v0.IpAddressV4 primary = 1;
   */
  primary?: IpAddressV4;

  /**
   * @generated from field: wgtwo.data.v0.IpAddressV4 secondary = 2;
   */
  secondary?: IpAddressV4;

  constructor(data?: PartialMessage<IpV4Pair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.IpV4Pair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary", kind: "message", T: IpAddressV4 },
    { no: 2, name: "secondary", kind: "message", T: IpAddressV4 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IpV4Pair {
    return new IpV4Pair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IpV4Pair {
    return new IpV4Pair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IpV4Pair {
    return new IpV4Pair().fromJsonString(jsonString, options);
  }

  static equals(a: IpV4Pair | PlainMessage<IpV4Pair> | undefined, b: IpV4Pair | PlainMessage<IpV4Pair> | undefined): boolean {
    return proto3.util.equals(IpV4Pair, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.IpAddressV4
 */
export class IpAddressV4 extends Message<IpAddressV4> {
  /**
   * @generated from field: string ipv4 = 1;
   */
  ipv4 = "";

  constructor(data?: PartialMessage<IpAddressV4>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.IpAddressV4";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ipv4", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IpAddressV4 {
    return new IpAddressV4().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IpAddressV4 {
    return new IpAddressV4().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IpAddressV4 {
    return new IpAddressV4().fromJsonString(jsonString, options);
  }

  static equals(a: IpAddressV4 | PlainMessage<IpAddressV4> | undefined, b: IpAddressV4 | PlainMessage<IpAddressV4> | undefined): boolean {
    return proto3.util.equals(IpAddressV4, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.IpV6Pair
 */
export class IpV6Pair extends Message<IpV6Pair> {
  /**
   * @generated from field: wgtwo.data.v0.IpAddressV6 primary = 1;
   */
  primary?: IpAddressV6;

  /**
   * @generated from field: wgtwo.data.v0.IpAddressV6 secondary = 2;
   */
  secondary?: IpAddressV6;

  constructor(data?: PartialMessage<IpV6Pair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.IpV6Pair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary", kind: "message", T: IpAddressV6 },
    { no: 2, name: "secondary", kind: "message", T: IpAddressV6 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IpV6Pair {
    return new IpV6Pair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IpV6Pair {
    return new IpV6Pair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IpV6Pair {
    return new IpV6Pair().fromJsonString(jsonString, options);
  }

  static equals(a: IpV6Pair | PlainMessage<IpV6Pair> | undefined, b: IpV6Pair | PlainMessage<IpV6Pair> | undefined): boolean {
    return proto3.util.equals(IpV6Pair, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.IpAddressV6
 */
export class IpAddressV6 extends Message<IpAddressV6> {
  /**
   * @generated from field: string ipv6 = 1;
   */
  ipv6 = "";

  constructor(data?: PartialMessage<IpAddressV6>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.IpAddressV6";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ipv6", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IpAddressV6 {
    return new IpAddressV6().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IpAddressV6 {
    return new IpAddressV6().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IpAddressV6 {
    return new IpAddressV6().fromJsonString(jsonString, options);
  }

  static equals(a: IpAddressV6 | PlainMessage<IpAddressV6> | undefined, b: IpAddressV6 | PlainMessage<IpAddressV6> | undefined): boolean {
    return proto3.util.equals(IpAddressV6, a, b);
  }
}

/**
 * @generated from message wgtwo.data.v0.CustomDnsResponse
 */
export class CustomDnsResponse extends Message<CustomDnsResponse> {
  /**
   * @generated from field: wgtwo.data.v0.CustomDnsResponse.Status status = 1;
   */
  status = CustomDnsResponse_Status.UNKNOWN;

  /**
   * @generated from field: string error_message = 2;
   */
  errorMessage = "";

  constructor(data?: PartialMessage<CustomDnsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.CustomDnsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(CustomDnsResponse_Status) },
    { no: 2, name: "error_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomDnsResponse {
    return new CustomDnsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomDnsResponse {
    return new CustomDnsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomDnsResponse {
    return new CustomDnsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CustomDnsResponse | PlainMessage<CustomDnsResponse> | undefined, b: CustomDnsResponse | PlainMessage<CustomDnsResponse> | undefined): boolean {
    return proto3.util.equals(CustomDnsResponse, a, b);
  }
}

/**
 * @generated from enum wgtwo.data.v0.CustomDnsResponse.Status
 */
export enum CustomDnsResponse_Status {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: ACCEPTED = 1;
   */
  ACCEPTED = 1,

  /**
   * @generated from enum value: REJECTED = 2;
   */
  REJECTED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(CustomDnsResponse_Status)
proto3.util.setEnumType(CustomDnsResponse_Status, "wgtwo.data.v0.CustomDnsResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "ACCEPTED" },
  { no: 2, name: "REJECTED" },
]);

/**
 * @generated from message wgtwo.data.v0.GetCustomDnsResponse
 */
export class GetCustomDnsResponse extends Message<GetCustomDnsResponse> {
  /**
   * @generated from field: wgtwo.data.v0.IpV4Pair dnsV4 = 1;
   */
  dnsV4?: IpV4Pair;

  /**
   * @generated from field: wgtwo.data.v0.IpV6Pair dnsV6 = 2;
   */
  dnsV6?: IpV6Pair;

  constructor(data?: PartialMessage<GetCustomDnsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.data.v0.GetCustomDnsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dnsV4", kind: "message", T: IpV4Pair },
    { no: 2, name: "dnsV6", kind: "message", T: IpV6Pair },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomDnsResponse {
    return new GetCustomDnsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomDnsResponse {
    return new GetCustomDnsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomDnsResponse {
    return new GetCustomDnsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetCustomDnsResponse | PlainMessage<GetCustomDnsResponse> | undefined, b: GetCustomDnsResponse | PlainMessage<GetCustomDnsResponse> | undefined): boolean {
    return proto3.util.equals(GetCustomDnsResponse, a, b);
  }
}
