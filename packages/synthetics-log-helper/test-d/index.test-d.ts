// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import syntheticsLogHelper = require('../lib');
import { SyntheticsLogHelper } from '../lib/SyntheticsLogHelper';

// Test basic log helper export
expectType<SyntheticsLogHelper>(syntheticsLogHelper);

// Import other test files
import './SyntheticsLogHelper.test-d';
import './utils.test-d';