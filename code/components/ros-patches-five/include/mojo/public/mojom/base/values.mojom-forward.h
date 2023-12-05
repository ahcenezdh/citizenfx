// vendor/chromium/mojo/public/mojom/base/values.mojom-forward.h is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef VENDOR_CHROMIUM_MOJO_PUBLIC_MOJOM_BASE_VALUES_MOJOM_FORWARD_H_
#define VENDOR_CHROMIUM_MOJO_PUBLIC_MOJOM_BASE_VALUES_MOJOM_FORWARD_H_



#include "mojo/public/cpp/bindings/struct_forward.h"




#include "mojo/public/interfaces/bindings/native_struct.mojom-forward.h"






namespace mojo_base {
namespace mojom {
class DictionaryValueDataView;

class ListValueDataView;

class ValueDataView;
class DictionaryValue;
using DictionaryValuePtr = mojo::StructPtr<DictionaryValue>;

class ListValue;
using ListValuePtr = mojo::StructPtr<ListValue>;

class Value;

typedef mojo::StructPtr<Value> ValuePtr;




}  // namespace mojom
}  // namespace mojo_base
#include "base/values.h"

#endif  // VENDOR_CHROMIUM_MOJO_PUBLIC_MOJOM_BASE_VALUES_MOJOM_FORWARD_H_