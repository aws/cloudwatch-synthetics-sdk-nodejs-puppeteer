// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectAssignable } from 'tsd';
import { OverrideConfiguration } from '../lib/utils';

// Test OverrideConfiguration type
expectAssignable<OverrideConfiguration>({ key: 'value' });
expectAssignable<OverrideConfiguration>({ flag: true });
expectAssignable<OverrideConfiguration>({ list: ['a', 'b'] });
expectAssignable<OverrideConfiguration>({ count: 42 });