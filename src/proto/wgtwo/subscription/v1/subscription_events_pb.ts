// Copyright 2021 Working Group Two AS
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
// @generated from file wgtwo/subscription/v1/subscription_events.proto (package wgtwo.subscription.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AckInfo, AckStatus, Metadata, StreamConfiguration } from "../../events/v1/events_pb.js";
import { Country, ImeiSv, Imsi } from "../../common/v1/types_pb.js";
import { E164 } from "../../common/v1/phonenumber_pb.js";

/**
 * @generated from message wgtwo.subscription.v1.StreamHandsetChangeEventsRequest
 */
export class StreamHandsetChangeEventsRequest extends Message<StreamHandsetChangeEventsRequest> {
  /**
   * @generated from field: wgtwo.events.v1.StreamConfiguration stream_configuration = 1;
   */
  streamConfiguration?: StreamConfiguration;

  constructor(data?: PartialMessage<StreamHandsetChangeEventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamHandsetChangeEventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stream_configuration", kind: "message", T: StreamConfiguration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamHandsetChangeEventsRequest {
    return new StreamHandsetChangeEventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamHandsetChangeEventsRequest {
    return new StreamHandsetChangeEventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamHandsetChangeEventsRequest {
    return new StreamHandsetChangeEventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StreamHandsetChangeEventsRequest | PlainMessage<StreamHandsetChangeEventsRequest> | undefined, b: StreamHandsetChangeEventsRequest | PlainMessage<StreamHandsetChangeEventsRequest> | undefined): boolean {
    return proto3.util.equals(StreamHandsetChangeEventsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamHandsetChangeEventsResponse
 */
export class StreamHandsetChangeEventsResponse extends Message<StreamHandsetChangeEventsResponse> {
  /**
   * @generated from field: wgtwo.events.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: wgtwo.subscription.v1.HandsetChangeEvent handset_change_event = 2;
   */
  handsetChangeEvent?: HandsetChangeEvent;

  constructor(data?: PartialMessage<StreamHandsetChangeEventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamHandsetChangeEventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "handset_change_event", kind: "message", T: HandsetChangeEvent },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamHandsetChangeEventsResponse {
    return new StreamHandsetChangeEventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamHandsetChangeEventsResponse {
    return new StreamHandsetChangeEventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamHandsetChangeEventsResponse {
    return new StreamHandsetChangeEventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StreamHandsetChangeEventsResponse | PlainMessage<StreamHandsetChangeEventsResponse> | undefined, b: StreamHandsetChangeEventsResponse | PlainMessage<StreamHandsetChangeEventsResponse> | undefined): boolean {
    return proto3.util.equals(StreamHandsetChangeEventsResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckHandsetChangeEventRequest
 */
export class AckHandsetChangeEventRequest extends Message<AckHandsetChangeEventRequest> {
  /**
   * @generated from field: wgtwo.events.v1.AckInfo ack_info = 1;
   */
  ackInfo?: AckInfo;

  constructor(data?: PartialMessage<AckHandsetChangeEventRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckHandsetChangeEventRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_info", kind: "message", T: AckInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckHandsetChangeEventRequest {
    return new AckHandsetChangeEventRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckHandsetChangeEventRequest {
    return new AckHandsetChangeEventRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckHandsetChangeEventRequest {
    return new AckHandsetChangeEventRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AckHandsetChangeEventRequest | PlainMessage<AckHandsetChangeEventRequest> | undefined, b: AckHandsetChangeEventRequest | PlainMessage<AckHandsetChangeEventRequest> | undefined): boolean {
    return proto3.util.equals(AckHandsetChangeEventRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckHandsetChangeEventResponse
 */
export class AckHandsetChangeEventResponse extends Message<AckHandsetChangeEventResponse> {
  /**
   * @generated from field: wgtwo.events.v1.AckStatus ack_status = 1;
   */
  ackStatus?: AckStatus;

  constructor(data?: PartialMessage<AckHandsetChangeEventResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckHandsetChangeEventResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_status", kind: "message", T: AckStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckHandsetChangeEventResponse {
    return new AckHandsetChangeEventResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckHandsetChangeEventResponse {
    return new AckHandsetChangeEventResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckHandsetChangeEventResponse {
    return new AckHandsetChangeEventResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AckHandsetChangeEventResponse | PlainMessage<AckHandsetChangeEventResponse> | undefined, b: AckHandsetChangeEventResponse | PlainMessage<AckHandsetChangeEventResponse> | undefined): boolean {
    return proto3.util.equals(AckHandsetChangeEventResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamCountryChangeEventsRequest
 */
export class StreamCountryChangeEventsRequest extends Message<StreamCountryChangeEventsRequest> {
  /**
   * @generated from field: wgtwo.events.v1.StreamConfiguration stream_configuration = 1;
   */
  streamConfiguration?: StreamConfiguration;

  constructor(data?: PartialMessage<StreamCountryChangeEventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamCountryChangeEventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stream_configuration", kind: "message", T: StreamConfiguration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamCountryChangeEventsRequest {
    return new StreamCountryChangeEventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamCountryChangeEventsRequest {
    return new StreamCountryChangeEventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamCountryChangeEventsRequest {
    return new StreamCountryChangeEventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StreamCountryChangeEventsRequest | PlainMessage<StreamCountryChangeEventsRequest> | undefined, b: StreamCountryChangeEventsRequest | PlainMessage<StreamCountryChangeEventsRequest> | undefined): boolean {
    return proto3.util.equals(StreamCountryChangeEventsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamCountryChangeEventsResponse
 */
export class StreamCountryChangeEventsResponse extends Message<StreamCountryChangeEventsResponse> {
  /**
   * @generated from field: wgtwo.events.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: wgtwo.subscription.v1.CountryChangeEvent country_change_event = 2;
   */
  countryChangeEvent?: CountryChangeEvent;

  constructor(data?: PartialMessage<StreamCountryChangeEventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamCountryChangeEventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "country_change_event", kind: "message", T: CountryChangeEvent },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamCountryChangeEventsResponse {
    return new StreamCountryChangeEventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamCountryChangeEventsResponse {
    return new StreamCountryChangeEventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamCountryChangeEventsResponse {
    return new StreamCountryChangeEventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StreamCountryChangeEventsResponse | PlainMessage<StreamCountryChangeEventsResponse> | undefined, b: StreamCountryChangeEventsResponse | PlainMessage<StreamCountryChangeEventsResponse> | undefined): boolean {
    return proto3.util.equals(StreamCountryChangeEventsResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckCountryChangeEventRequest
 */
export class AckCountryChangeEventRequest extends Message<AckCountryChangeEventRequest> {
  /**
   * @generated from field: wgtwo.events.v1.AckInfo ack_info = 1;
   */
  ackInfo?: AckInfo;

  constructor(data?: PartialMessage<AckCountryChangeEventRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckCountryChangeEventRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_info", kind: "message", T: AckInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCountryChangeEventRequest {
    return new AckCountryChangeEventRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCountryChangeEventRequest {
    return new AckCountryChangeEventRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCountryChangeEventRequest {
    return new AckCountryChangeEventRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AckCountryChangeEventRequest | PlainMessage<AckCountryChangeEventRequest> | undefined, b: AckCountryChangeEventRequest | PlainMessage<AckCountryChangeEventRequest> | undefined): boolean {
    return proto3.util.equals(AckCountryChangeEventRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckCountryChangeEventResponse
 */
export class AckCountryChangeEventResponse extends Message<AckCountryChangeEventResponse> {
  /**
   * @generated from field: wgtwo.events.v1.AckStatus ack_status = 1;
   */
  ackStatus?: AckStatus;

  constructor(data?: PartialMessage<AckCountryChangeEventResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckCountryChangeEventResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_status", kind: "message", T: AckStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCountryChangeEventResponse {
    return new AckCountryChangeEventResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCountryChangeEventResponse {
    return new AckCountryChangeEventResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCountryChangeEventResponse {
    return new AckCountryChangeEventResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AckCountryChangeEventResponse | PlainMessage<AckCountryChangeEventResponse> | undefined, b: AckCountryChangeEventResponse | PlainMessage<AckCountryChangeEventResponse> | undefined): boolean {
    return proto3.util.equals(AckCountryChangeEventResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamFirstAttachmentEventsRequest
 */
export class StreamFirstAttachmentEventsRequest extends Message<StreamFirstAttachmentEventsRequest> {
  /**
   * @generated from field: wgtwo.events.v1.StreamConfiguration stream_configuration = 1;
   */
  streamConfiguration?: StreamConfiguration;

  constructor(data?: PartialMessage<StreamFirstAttachmentEventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamFirstAttachmentEventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stream_configuration", kind: "message", T: StreamConfiguration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamFirstAttachmentEventsRequest {
    return new StreamFirstAttachmentEventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamFirstAttachmentEventsRequest {
    return new StreamFirstAttachmentEventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamFirstAttachmentEventsRequest {
    return new StreamFirstAttachmentEventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StreamFirstAttachmentEventsRequest | PlainMessage<StreamFirstAttachmentEventsRequest> | undefined, b: StreamFirstAttachmentEventsRequest | PlainMessage<StreamFirstAttachmentEventsRequest> | undefined): boolean {
    return proto3.util.equals(StreamFirstAttachmentEventsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamFirstAttachmentEventsResponse
 */
export class StreamFirstAttachmentEventsResponse extends Message<StreamFirstAttachmentEventsResponse> {
  /**
   * @generated from field: wgtwo.events.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: wgtwo.subscription.v1.FirstAttachmentEvent first_attachment_event = 2;
   */
  firstAttachmentEvent?: FirstAttachmentEvent;

  constructor(data?: PartialMessage<StreamFirstAttachmentEventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamFirstAttachmentEventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "first_attachment_event", kind: "message", T: FirstAttachmentEvent },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamFirstAttachmentEventsResponse {
    return new StreamFirstAttachmentEventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamFirstAttachmentEventsResponse {
    return new StreamFirstAttachmentEventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamFirstAttachmentEventsResponse {
    return new StreamFirstAttachmentEventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StreamFirstAttachmentEventsResponse | PlainMessage<StreamFirstAttachmentEventsResponse> | undefined, b: StreamFirstAttachmentEventsResponse | PlainMessage<StreamFirstAttachmentEventsResponse> | undefined): boolean {
    return proto3.util.equals(StreamFirstAttachmentEventsResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckFirstAttachmentEventRequest
 */
export class AckFirstAttachmentEventRequest extends Message<AckFirstAttachmentEventRequest> {
  /**
   * @generated from field: wgtwo.events.v1.AckInfo ack_info = 1;
   */
  ackInfo?: AckInfo;

  constructor(data?: PartialMessage<AckFirstAttachmentEventRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckFirstAttachmentEventRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_info", kind: "message", T: AckInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckFirstAttachmentEventRequest {
    return new AckFirstAttachmentEventRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckFirstAttachmentEventRequest {
    return new AckFirstAttachmentEventRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckFirstAttachmentEventRequest {
    return new AckFirstAttachmentEventRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AckFirstAttachmentEventRequest | PlainMessage<AckFirstAttachmentEventRequest> | undefined, b: AckFirstAttachmentEventRequest | PlainMessage<AckFirstAttachmentEventRequest> | undefined): boolean {
    return proto3.util.equals(AckFirstAttachmentEventRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckFirstAttachmentEventResponse
 */
export class AckFirstAttachmentEventResponse extends Message<AckFirstAttachmentEventResponse> {
  /**
   * @generated from field: wgtwo.events.v1.AckStatus ack_status = 1;
   */
  ackStatus?: AckStatus;

  constructor(data?: PartialMessage<AckFirstAttachmentEventResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckFirstAttachmentEventResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_status", kind: "message", T: AckStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckFirstAttachmentEventResponse {
    return new AckFirstAttachmentEventResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckFirstAttachmentEventResponse {
    return new AckFirstAttachmentEventResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckFirstAttachmentEventResponse {
    return new AckFirstAttachmentEventResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AckFirstAttachmentEventResponse | PlainMessage<AckFirstAttachmentEventResponse> | undefined, b: AckFirstAttachmentEventResponse | PlainMessage<AckFirstAttachmentEventResponse> | undefined): boolean {
    return proto3.util.equals(AckFirstAttachmentEventResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamPeriodicCountryEventsRequest
 */
export class StreamPeriodicCountryEventsRequest extends Message<StreamPeriodicCountryEventsRequest> {
  /**
   * @generated from field: wgtwo.events.v1.StreamConfiguration stream_configuration = 1;
   */
  streamConfiguration?: StreamConfiguration;

  constructor(data?: PartialMessage<StreamPeriodicCountryEventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamPeriodicCountryEventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stream_configuration", kind: "message", T: StreamConfiguration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamPeriodicCountryEventsRequest {
    return new StreamPeriodicCountryEventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamPeriodicCountryEventsRequest {
    return new StreamPeriodicCountryEventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamPeriodicCountryEventsRequest {
    return new StreamPeriodicCountryEventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StreamPeriodicCountryEventsRequest | PlainMessage<StreamPeriodicCountryEventsRequest> | undefined, b: StreamPeriodicCountryEventsRequest | PlainMessage<StreamPeriodicCountryEventsRequest> | undefined): boolean {
    return proto3.util.equals(StreamPeriodicCountryEventsRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.StreamPeriodicCountryEventsResponse
 */
export class StreamPeriodicCountryEventsResponse extends Message<StreamPeriodicCountryEventsResponse> {
  /**
   * @generated from field: wgtwo.events.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: wgtwo.subscription.v1.PeriodicCountryEvent periodic_country_event = 2;
   */
  periodicCountryEvent?: PeriodicCountryEvent;

  constructor(data?: PartialMessage<StreamPeriodicCountryEventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.StreamPeriodicCountryEventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "periodic_country_event", kind: "message", T: PeriodicCountryEvent },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamPeriodicCountryEventsResponse {
    return new StreamPeriodicCountryEventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamPeriodicCountryEventsResponse {
    return new StreamPeriodicCountryEventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamPeriodicCountryEventsResponse {
    return new StreamPeriodicCountryEventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StreamPeriodicCountryEventsResponse | PlainMessage<StreamPeriodicCountryEventsResponse> | undefined, b: StreamPeriodicCountryEventsResponse | PlainMessage<StreamPeriodicCountryEventsResponse> | undefined): boolean {
    return proto3.util.equals(StreamPeriodicCountryEventsResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckPeriodicCountryEventRequest
 */
export class AckPeriodicCountryEventRequest extends Message<AckPeriodicCountryEventRequest> {
  /**
   * @generated from field: wgtwo.events.v1.AckInfo ack_info = 1;
   */
  ackInfo?: AckInfo;

  constructor(data?: PartialMessage<AckPeriodicCountryEventRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckPeriodicCountryEventRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_info", kind: "message", T: AckInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckPeriodicCountryEventRequest {
    return new AckPeriodicCountryEventRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckPeriodicCountryEventRequest {
    return new AckPeriodicCountryEventRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckPeriodicCountryEventRequest {
    return new AckPeriodicCountryEventRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AckPeriodicCountryEventRequest | PlainMessage<AckPeriodicCountryEventRequest> | undefined, b: AckPeriodicCountryEventRequest | PlainMessage<AckPeriodicCountryEventRequest> | undefined): boolean {
    return proto3.util.equals(AckPeriodicCountryEventRequest, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.AckPeriodicCountryEventResponse
 */
export class AckPeriodicCountryEventResponse extends Message<AckPeriodicCountryEventResponse> {
  /**
   * @generated from field: wgtwo.events.v1.AckStatus ack_status = 1;
   */
  ackStatus?: AckStatus;

  constructor(data?: PartialMessage<AckPeriodicCountryEventResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.AckPeriodicCountryEventResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_status", kind: "message", T: AckStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckPeriodicCountryEventResponse {
    return new AckPeriodicCountryEventResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckPeriodicCountryEventResponse {
    return new AckPeriodicCountryEventResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckPeriodicCountryEventResponse {
    return new AckPeriodicCountryEventResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AckPeriodicCountryEventResponse | PlainMessage<AckPeriodicCountryEventResponse> | undefined, b: AckPeriodicCountryEventResponse | PlainMessage<AckPeriodicCountryEventResponse> | undefined): boolean {
    return proto3.util.equals(AckPeriodicCountryEventResponse, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.Handset
 */
export class Handset extends Message<Handset> {
  /**
   * @generated from field: wgtwo.common.v1.ImeiSv imei_sv = 1;
   */
  imeiSv?: ImeiSv;

  constructor(data?: PartialMessage<Handset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.Handset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "imei_sv", kind: "message", T: ImeiSv },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Handset {
    return new Handset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Handset {
    return new Handset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Handset {
    return new Handset().fromJsonString(jsonString, options);
  }

  static equals(a: Handset | PlainMessage<Handset> | undefined, b: Handset | PlainMessage<Handset> | undefined): boolean {
    return proto3.util.equals(Handset, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.HandsetChangeEvent
 */
export class HandsetChangeEvent extends Message<HandsetChangeEvent> {
  /**
   * The international number of the subscriber.
   *
   * @generated from field: wgtwo.common.v1.E164 number = 4;
   */
  number?: E164;

  /**
   * The IMSI for the SIM card that has been observed. This is PII sensitive information, and
   * needs to be handled with care.
   *
   * @generated from field: wgtwo.common.v1.Imsi imsi = 3;
   */
  imsi?: Imsi;

  /**
   * The previously stored handset info, may be empty.
   *
   * @generated from field: wgtwo.subscription.v1.Handset previous = 1;
   */
  previous?: Handset;

  /**
   * The updated handset info
   *
   * @generated from field: wgtwo.subscription.v1.Handset current = 2;
   */
  current?: Handset;

  constructor(data?: PartialMessage<HandsetChangeEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.HandsetChangeEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: "number", kind: "message", T: E164 },
    { no: 3, name: "imsi", kind: "message", T: Imsi },
    { no: 1, name: "previous", kind: "message", T: Handset },
    { no: 2, name: "current", kind: "message", T: Handset },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HandsetChangeEvent {
    return new HandsetChangeEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HandsetChangeEvent {
    return new HandsetChangeEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HandsetChangeEvent {
    return new HandsetChangeEvent().fromJsonString(jsonString, options);
  }

  static equals(a: HandsetChangeEvent | PlainMessage<HandsetChangeEvent> | undefined, b: HandsetChangeEvent | PlainMessage<HandsetChangeEvent> | undefined): boolean {
    return proto3.util.equals(HandsetChangeEvent, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.CountryChangeEvent
 */
export class CountryChangeEvent extends Message<CountryChangeEvent> {
  /**
   * The international number of the subscriber.
   *
   * @generated from field: wgtwo.common.v1.E164 number = 3;
   */
  number?: E164;

  /**
   * The country the subscriber moved from.
   *
   * @generated from field: wgtwo.common.v1.Country previous = 1;
   */
  previous?: Country;

  /**
   * The country the subscriber moved to.
   *
   * @generated from field: wgtwo.common.v1.Country current = 2;
   */
  current?: Country;

  constructor(data?: PartialMessage<CountryChangeEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.CountryChangeEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "number", kind: "message", T: E164 },
    { no: 1, name: "previous", kind: "message", T: Country },
    { no: 2, name: "current", kind: "message", T: Country },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountryChangeEvent {
    return new CountryChangeEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountryChangeEvent {
    return new CountryChangeEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountryChangeEvent {
    return new CountryChangeEvent().fromJsonString(jsonString, options);
  }

  static equals(a: CountryChangeEvent | PlainMessage<CountryChangeEvent> | undefined, b: CountryChangeEvent | PlainMessage<CountryChangeEvent> | undefined): boolean {
    return proto3.util.equals(CountryChangeEvent, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.FirstAttachmentEvent
 */
export class FirstAttachmentEvent extends Message<FirstAttachmentEvent> {
  /**
   * The international number of the subscriber.
   *
   * @generated from field: wgtwo.common.v1.E164 number = 1;
   */
  number?: E164;

  /**
   * The IMSI for the SIM card that has been observed. This is PII sensitive information, and
   * needs to be handled with care.
   *
   * @generated from field: wgtwo.common.v1.Imsi imsi = 2;
   */
  imsi?: Imsi;

  constructor(data?: PartialMessage<FirstAttachmentEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.FirstAttachmentEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "message", T: E164 },
    { no: 2, name: "imsi", kind: "message", T: Imsi },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FirstAttachmentEvent {
    return new FirstAttachmentEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FirstAttachmentEvent {
    return new FirstAttachmentEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FirstAttachmentEvent {
    return new FirstAttachmentEvent().fromJsonString(jsonString, options);
  }

  static equals(a: FirstAttachmentEvent | PlainMessage<FirstAttachmentEvent> | undefined, b: FirstAttachmentEvent | PlainMessage<FirstAttachmentEvent> | undefined): boolean {
    return proto3.util.equals(FirstAttachmentEvent, a, b);
  }
}

/**
 * @generated from message wgtwo.subscription.v1.PeriodicCountryEvent
 */
export class PeriodicCountryEvent extends Message<PeriodicCountryEvent> {
  /**
   * The international number of the subscriber.
   *
   * @generated from field: wgtwo.common.v1.E164 number = 1;
   */
  number?: E164;

  /**
   * The IMSI for the SIM card that has been observed. This is PII sensitive information, and
   * needs to be handled with care.
   *
   * @generated from field: wgtwo.common.v1.Imsi imsi = 2;
   */
  imsi?: Imsi;

  /**
   * The country for which the SIM card is observed.
   *
   * @generated from field: wgtwo.common.v1.Country country = 3;
   */
  country?: Country;

  constructor(data?: PartialMessage<PeriodicCountryEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wgtwo.subscription.v1.PeriodicCountryEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "message", T: E164 },
    { no: 2, name: "imsi", kind: "message", T: Imsi },
    { no: 3, name: "country", kind: "message", T: Country },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PeriodicCountryEvent {
    return new PeriodicCountryEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PeriodicCountryEvent {
    return new PeriodicCountryEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PeriodicCountryEvent {
    return new PeriodicCountryEvent().fromJsonString(jsonString, options);
  }

  static equals(a: PeriodicCountryEvent | PlainMessage<PeriodicCountryEvent> | undefined, b: PeriodicCountryEvent | PlainMessage<PeriodicCountryEvent> | undefined): boolean {
    return proto3.util.equals(PeriodicCountryEvent, a, b);
  }
}
