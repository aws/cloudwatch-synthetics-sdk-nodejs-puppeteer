// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import { SyntheticsLogHelper } from '../lib/SyntheticsLogHelper';
import { OverrideConfiguration } from '../lib/utils';

// Test constructor
expectType<SyntheticsLogHelper>(new SyntheticsLogHelper({}));

declare const logHelper: SyntheticsLogHelper;
declare const config: OverrideConfiguration;

// Test sanitization methods
expectType<string>(logHelper.getSanitizedUrl('https://example.com'));
expectType<string>(logHelper.getSanitizedUrl('https://example.com', config));
expectType<string>(logHelper.getSanitizedErrorMessage('error'));
expectType<string>(logHelper.getSanitizedErrorMessage(new Error('test')));
expectType<string>(logHelper.getSanitizedErrorMessage('error', config));
expectType<Record<string, string>>(logHelper.getSanitizedHeaders({}));
expectType<Record<string, string>>(logHelper.getSanitizedHeaders({}, config));