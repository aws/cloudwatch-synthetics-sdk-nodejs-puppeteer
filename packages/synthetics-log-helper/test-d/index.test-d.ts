// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType, expectAssignable } from 'tsd';
import syntheticsLogHelper = require('../lib');

// Test basic log helper export - should be an instance
expectType<typeof syntheticsLogHelper>(syntheticsLogHelper);

// Test methods on the instance
expectType<string>(syntheticsLogHelper.getSanitizedUrl('https://example.com'));
expectType<string>(syntheticsLogHelper.getSanitizedErrorMessage('error'));
expectType<string>(syntheticsLogHelper.getSanitizedErrorMessage(new Error('test')));
expectType<Record<string, string>>(syntheticsLogHelper.getSanitizedHeaders({}));

// Test with override configuration
const config = { key: 'value', flag: true, list: ['a', 'b'], count: 42 };
expectType<string>(syntheticsLogHelper.getSanitizedUrl('https://example.com', config));
expectType<string>(syntheticsLogHelper.getSanitizedErrorMessage('error', config));
expectType<Record<string, string>>(syntheticsLogHelper.getSanitizedHeaders({}, config));

// Test OverrideConfiguration type
expectAssignable<Record<string, string | boolean | string[] | number>>({ key: 'value' });
expectAssignable<Record<string, string | boolean | string[] | number>>({ flag: true });
expectAssignable<Record<string, string | boolean | string[] | number>>({ list: ['a', 'b'] });
expectAssignable<Record<string, string | boolean | string[] | number>>({ count: 42 });