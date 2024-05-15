// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetModeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeRequest): GetModeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeRequest;
  static deserializeBinaryFromReader(message: GetModeRequest, reader: jspb.BinaryReader): GetModeRequest;
}

export namespace GetModeRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetModeResponse extends jspb.Message {
  getMode(): ModeMap[keyof ModeMap];
  setMode(value: ModeMap[keyof ModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeResponse): GetModeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeResponse;
  static deserializeBinaryFromReader(message: GetModeResponse, reader: jspb.BinaryReader): GetModeResponse;
}

export namespace GetModeResponse {
  export type AsObject = {
    mode: ModeMap[keyof ModeMap],
  }
}

export class SetModeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMode(): ModeMap[keyof ModeMap];
  setMode(value: ModeMap[keyof ModeMap]): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetModeRequest): SetModeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetModeRequest;
  static deserializeBinaryFromReader(message: SetModeRequest, reader: jspb.BinaryReader): SetModeRequest;
}

export namespace SetModeRequest {
  export type AsObject = {
    name: string,
    mode: ModeMap[keyof ModeMap],
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetModeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetModeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetModeResponse): SetModeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetModeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetModeResponse;
  static deserializeBinaryFromReader(message: SetModeResponse, reader: jspb.BinaryReader): SetModeResponse;
}

export namespace SetModeResponse {
  export type AsObject = {
  }
}

export class Waypoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_v1_common_pb.GeoPoint | undefined;
  setLocation(value?: common_v1_common_pb.GeoPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Waypoint.AsObject;
  static toObject(includeInstance: boolean, msg: Waypoint): Waypoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Waypoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Waypoint;
  static deserializeBinaryFromReader(message: Waypoint, reader: jspb.BinaryReader): Waypoint;
}

export namespace Waypoint {
  export type AsObject = {
    id: string,
    location?: common_v1_common_pb.GeoPoint.AsObject,
  }
}

export class GetLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
  static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_v1_common_pb.GeoPoint | undefined;
  setLocation(value?: common_v1_common_pb.GeoPoint): void;

  getCompassHeading(): number;
  setCompassHeading(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
  static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
  export type AsObject = {
    location?: common_v1_common_pb.GeoPoint.AsObject,
    compassHeading: number,
  }
}

export class GetWaypointsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWaypointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWaypointsRequest): GetWaypointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWaypointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWaypointsRequest;
  static deserializeBinaryFromReader(message: GetWaypointsRequest, reader: jspb.BinaryReader): GetWaypointsRequest;
}

export namespace GetWaypointsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetWaypointsResponse extends jspb.Message {
  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWaypointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWaypointsResponse): GetWaypointsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWaypointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWaypointsResponse;
  static deserializeBinaryFromReader(message: GetWaypointsResponse, reader: jspb.BinaryReader): GetWaypointsResponse;
}

export namespace GetWaypointsResponse {
  export type AsObject = {
    waypointsList: Array<Waypoint.AsObject>,
  }
}

export class AddWaypointRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_v1_common_pb.GeoPoint | undefined;
  setLocation(value?: common_v1_common_pb.GeoPoint): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWaypointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWaypointRequest): AddWaypointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWaypointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWaypointRequest;
  static deserializeBinaryFromReader(message: AddWaypointRequest, reader: jspb.BinaryReader): AddWaypointRequest;
}

export namespace AddWaypointRequest {
  export type AsObject = {
    name: string,
    location?: common_v1_common_pb.GeoPoint.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddWaypointResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWaypointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddWaypointResponse): AddWaypointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWaypointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWaypointResponse;
  static deserializeBinaryFromReader(message: AddWaypointResponse, reader: jspb.BinaryReader): AddWaypointResponse;
}

export namespace AddWaypointResponse {
  export type AsObject = {
  }
}

export class RemoveWaypointRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWaypointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWaypointRequest): RemoveWaypointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveWaypointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWaypointRequest;
  static deserializeBinaryFromReader(message: RemoveWaypointRequest, reader: jspb.BinaryReader): RemoveWaypointRequest;
}

export namespace RemoveWaypointRequest {
  export type AsObject = {
    name: string,
    id: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RemoveWaypointResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWaypointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWaypointResponse): RemoveWaypointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveWaypointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWaypointResponse;
  static deserializeBinaryFromReader(message: RemoveWaypointResponse, reader: jspb.BinaryReader): RemoveWaypointResponse;
}

export namespace RemoveWaypointResponse {
  export type AsObject = {
  }
}

export class GetObstaclesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObstaclesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObstaclesRequest): GetObstaclesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObstaclesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObstaclesRequest;
  static deserializeBinaryFromReader(message: GetObstaclesRequest, reader: jspb.BinaryReader): GetObstaclesRequest;
}

export namespace GetObstaclesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetObstaclesResponse extends jspb.Message {
  clearObstaclesList(): void;
  getObstaclesList(): Array<common_v1_common_pb.GeoGeometry>;
  setObstaclesList(value: Array<common_v1_common_pb.GeoGeometry>): void;
  addObstacles(value?: common_v1_common_pb.GeoGeometry, index?: number): common_v1_common_pb.GeoGeometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObstaclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObstaclesResponse): GetObstaclesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObstaclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObstaclesResponse;
  static deserializeBinaryFromReader(message: GetObstaclesResponse, reader: jspb.BinaryReader): GetObstaclesResponse;
}

export namespace GetObstaclesResponse {
  export type AsObject = {
    obstaclesList: Array<common_v1_common_pb.GeoGeometry.AsObject>,
  }
}

export class Path extends jspb.Message {
  getDestinationWaypointId(): string;
  setDestinationWaypointId(value: string): void;

  clearGeopointsList(): void;
  getGeopointsList(): Array<common_v1_common_pb.GeoPoint>;
  setGeopointsList(value: Array<common_v1_common_pb.GeoPoint>): void;
  addGeopoints(value?: common_v1_common_pb.GeoPoint, index?: number): common_v1_common_pb.GeoPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Path.AsObject;
  static toObject(includeInstance: boolean, msg: Path): Path.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Path, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Path;
  static deserializeBinaryFromReader(message: Path, reader: jspb.BinaryReader): Path;
}

export namespace Path {
  export type AsObject = {
    destinationWaypointId: string,
    geopointsList: Array<common_v1_common_pb.GeoPoint.AsObject>,
  }
}

export class GetPathsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPathsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPathsRequest): GetPathsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPathsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPathsRequest;
  static deserializeBinaryFromReader(message: GetPathsRequest, reader: jspb.BinaryReader): GetPathsRequest;
}

export namespace GetPathsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPathsResponse extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<Path>;
  setPathsList(value: Array<Path>): void;
  addPaths(value?: Path, index?: number): Path;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPathsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPathsResponse): GetPathsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPathsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPathsResponse;
  static deserializeBinaryFromReader(message: GetPathsResponse, reader: jspb.BinaryReader): GetPathsResponse;
}

export namespace GetPathsResponse {
  export type AsObject = {
    pathsList: Array<Path.AsObject>,
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesRequest): GetPropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesRequest;
  static deserializeBinaryFromReader(message: GetPropertiesRequest, reader: jspb.BinaryReader): GetPropertiesRequest;
}

export namespace GetPropertiesRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPropertiesResponse extends jspb.Message {
  getMapType(): MapTypeMap[keyof MapTypeMap];
  setMapType(value: MapTypeMap[keyof MapTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesResponse): GetPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesResponse;
  static deserializeBinaryFromReader(message: GetPropertiesResponse, reader: jspb.BinaryReader): GetPropertiesResponse;
}

export namespace GetPropertiesResponse {
  export type AsObject = {
    mapType: MapTypeMap[keyof MapTypeMap],
  }
}

export interface MapTypeMap {
  MAP_TYPE_UNSPECIFIED: 0;
  MAP_TYPE_NONE: 1;
  MAP_TYPE_GPS: 2;
}

export const MapType: MapTypeMap;

export interface ModeMap {
  MODE_UNSPECIFIED: 0;
  MODE_MANUAL: 1;
  MODE_WAYPOINT: 2;
  MODE_EXPLORE: 3;
}

export const Mode: ModeMap;

