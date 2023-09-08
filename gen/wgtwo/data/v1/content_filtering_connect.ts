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

// @generated by protoc-gen-connect-es v0.13.2 with parameter "target=ts"
// @generated from file wgtwo/data/v1/content_filtering.proto (package wgtwo.data.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetGlobalFilterRequest, GetGlobalFilterResponse, SetGlobalFilterRequest, SetGlobalFilterResponse } from "./content_filtering_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for configuring content filtering
 *
 * @generated from service wgtwo.data.v1.ContentFilteringService
 */
export const ContentFilteringService = {
  typeName: "wgtwo.data.v1.ContentFilteringService",
  methods: {
    /**
     * Set filter for all subscriptions using the product
     *
     * @generated from rpc wgtwo.data.v1.ContentFilteringService.SetGlobalFilter
     */
    setGlobalFilter: {
      name: "SetGlobalFilter",
      I: SetGlobalFilterRequest,
      O: SetGlobalFilterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the current configured global filter
     *
     * @generated from rpc wgtwo.data.v1.ContentFilteringService.GetGlobalFilter
     */
    getGlobalFilter: {
      name: "GetGlobalFilter",
      I: GetGlobalFilterRequest,
      O: GetGlobalFilterResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
