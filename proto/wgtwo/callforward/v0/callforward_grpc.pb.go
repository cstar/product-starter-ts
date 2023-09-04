// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: wgtwo/callforward/v0/callforward.proto

package v0

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CallForwardingServiceClient is the client API for CallForwardingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CallForwardingServiceClient interface {
	Disable(ctx context.Context, in *DisableCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error)
	SetToNumber(ctx context.Context, in *NumberCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error)
	SetToTrunk(ctx context.Context, in *TrunkCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error)
	SetToVoicemail(ctx context.Context, in *VoicemailCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error)
}

type callForwardingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCallForwardingServiceClient(cc grpc.ClientConnInterface) CallForwardingServiceClient {
	return &callForwardingServiceClient{cc}
}

func (c *callForwardingServiceClient) Disable(ctx context.Context, in *DisableCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error) {
	out := new(CallForwardingResponse)
	err := c.cc.Invoke(ctx, "/wgtwo.callforward.v0.CallForwardingService/Disable", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *callForwardingServiceClient) SetToNumber(ctx context.Context, in *NumberCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error) {
	out := new(CallForwardingResponse)
	err := c.cc.Invoke(ctx, "/wgtwo.callforward.v0.CallForwardingService/SetToNumber", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *callForwardingServiceClient) SetToTrunk(ctx context.Context, in *TrunkCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error) {
	out := new(CallForwardingResponse)
	err := c.cc.Invoke(ctx, "/wgtwo.callforward.v0.CallForwardingService/SetToTrunk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *callForwardingServiceClient) SetToVoicemail(ctx context.Context, in *VoicemailCallForwardingRequest, opts ...grpc.CallOption) (*CallForwardingResponse, error) {
	out := new(CallForwardingResponse)
	err := c.cc.Invoke(ctx, "/wgtwo.callforward.v0.CallForwardingService/SetToVoicemail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CallForwardingServiceServer is the server API for CallForwardingService service.
// All implementations should embed UnimplementedCallForwardingServiceServer
// for forward compatibility
type CallForwardingServiceServer interface {
	Disable(context.Context, *DisableCallForwardingRequest) (*CallForwardingResponse, error)
	SetToNumber(context.Context, *NumberCallForwardingRequest) (*CallForwardingResponse, error)
	SetToTrunk(context.Context, *TrunkCallForwardingRequest) (*CallForwardingResponse, error)
	SetToVoicemail(context.Context, *VoicemailCallForwardingRequest) (*CallForwardingResponse, error)
}

// UnimplementedCallForwardingServiceServer should be embedded to have forward compatible implementations.
type UnimplementedCallForwardingServiceServer struct {
}

func (UnimplementedCallForwardingServiceServer) Disable(context.Context, *DisableCallForwardingRequest) (*CallForwardingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Disable not implemented")
}
func (UnimplementedCallForwardingServiceServer) SetToNumber(context.Context, *NumberCallForwardingRequest) (*CallForwardingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetToNumber not implemented")
}
func (UnimplementedCallForwardingServiceServer) SetToTrunk(context.Context, *TrunkCallForwardingRequest) (*CallForwardingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetToTrunk not implemented")
}
func (UnimplementedCallForwardingServiceServer) SetToVoicemail(context.Context, *VoicemailCallForwardingRequest) (*CallForwardingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetToVoicemail not implemented")
}

// UnsafeCallForwardingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CallForwardingServiceServer will
// result in compilation errors.
type UnsafeCallForwardingServiceServer interface {
	mustEmbedUnimplementedCallForwardingServiceServer()
}

func RegisterCallForwardingServiceServer(s grpc.ServiceRegistrar, srv CallForwardingServiceServer) {
	s.RegisterService(&CallForwardingService_ServiceDesc, srv)
}

func _CallForwardingService_Disable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DisableCallForwardingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CallForwardingServiceServer).Disable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/wgtwo.callforward.v0.CallForwardingService/Disable",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CallForwardingServiceServer).Disable(ctx, req.(*DisableCallForwardingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CallForwardingService_SetToNumber_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NumberCallForwardingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CallForwardingServiceServer).SetToNumber(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/wgtwo.callforward.v0.CallForwardingService/SetToNumber",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CallForwardingServiceServer).SetToNumber(ctx, req.(*NumberCallForwardingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CallForwardingService_SetToTrunk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TrunkCallForwardingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CallForwardingServiceServer).SetToTrunk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/wgtwo.callforward.v0.CallForwardingService/SetToTrunk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CallForwardingServiceServer).SetToTrunk(ctx, req.(*TrunkCallForwardingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CallForwardingService_SetToVoicemail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VoicemailCallForwardingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CallForwardingServiceServer).SetToVoicemail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/wgtwo.callforward.v0.CallForwardingService/SetToVoicemail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CallForwardingServiceServer).SetToVoicemail(ctx, req.(*VoicemailCallForwardingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CallForwardingService_ServiceDesc is the grpc.ServiceDesc for CallForwardingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CallForwardingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "wgtwo.callforward.v0.CallForwardingService",
	HandlerType: (*CallForwardingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Disable",
			Handler:    _CallForwardingService_Disable_Handler,
		},
		{
			MethodName: "SetToNumber",
			Handler:    _CallForwardingService_SetToNumber_Handler,
		},
		{
			MethodName: "SetToTrunk",
			Handler:    _CallForwardingService_SetToTrunk_Handler,
		},
		{
			MethodName: "SetToVoicemail",
			Handler:    _CallForwardingService_SetToVoicemail_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "wgtwo/callforward/v0/callforward.proto",
}
