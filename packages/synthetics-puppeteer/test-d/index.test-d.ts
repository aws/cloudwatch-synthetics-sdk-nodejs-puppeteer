// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import synthetics = require('../lib');
import { Synthetics } from '../lib/synthetics-puppeteer';

// Test basic synthetics export
expectType<Synthetics>(synthetics);

// Import other test files
import './synthetics-puppeteer.test-d';
import './screenshot-result.test-d';
import './utils.test-d';