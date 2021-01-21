#!/bin/bash

DEST_DIR=./codegen

rm -rf ${DEST_DIR}

mkdir -p ${DEST_DIR}

SRC_DIR=./protos
DEST_DIR=./codegen


# # TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${DEST_DIR} \
    --grpc_out=${DEST_DIR} \
    --proto_path=${SRC_DIR} \
    ${SRC_DIR}/**/*.proto

./node_modules/.bin/grpc_tools_node_protoc \
  --proto_path=${SRC_DIR} \
  --js_out=import_style=commonjs,binary:${DEST_DIR} \
  --grpc_out=${DEST_DIR} \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  ${SRC_DIR}/**/*.proto

node_modules/.bin/pbjs \
  --target static-module \
  --wrap commonjs \
  --keep-case \
  --path ${SRC_DIR} \
  --out ${DEST_DIR}/rpc/rpc.js \
  ${SRC_DIR}/**/*.proto

node_modules/.bin/pbts \
  --out ${DEST_DIR}/rpc/rpc.d.ts \
  ${DEST_DIR}/rpc/rpc.js
