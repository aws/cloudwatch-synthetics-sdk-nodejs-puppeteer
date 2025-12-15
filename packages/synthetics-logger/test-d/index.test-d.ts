// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import log = require('../lib');
import { SyntheticsLogger } from '../lib/SyntheticsLogger';

// Test basic logger export
expectType<SyntheticsLogger>(log);

// Import other test files
import './SyntheticsLogger.test-d';