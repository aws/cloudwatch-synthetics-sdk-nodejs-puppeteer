// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import syntheticsLink = require('../lib');
import { SyntheticsLink } from '../lib/SyntheticsLink';

// Test basic link export - should be the constructor
expectType<typeof SyntheticsLink>(syntheticsLink);

// Test constructor and methods
const link = new SyntheticsLink('https://example.com');
expectType<SyntheticsLink>(link);
expectType<SyntheticsLink>(link.withUrl('https://test.com'));
expectType<SyntheticsLink>(link.withText('Test Link'));
expectType<SyntheticsLink>(link.withParentUrl('https://parent.com'));
expectType<SyntheticsLink>(link.withStatusCode('200'));
expectType<SyntheticsLink>(link.withFailureReason('Network error'));
expectType<SyntheticsLink>(link.withStatusText('OK'));
expectType<void>(link.addScreenshotResult('screenshot.png'));