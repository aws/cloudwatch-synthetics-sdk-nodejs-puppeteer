// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import ScreenshotResult = require('../lib/screenshot-result');

// Test constructor
expectType<ScreenshotResult>(new ScreenshotResult('test.png', 'https://example.com'));

// Test properties
declare const result: ScreenshotResult;
expectType<string>(result.filename);
expectType<string>(result.pageUrl);

// Test setters - assignment returns the assigned value
declare const newFilename: string;
declare const newPageUrl: string;
expectType<string>(result.filename = newFilename);
expectType<string>(result.pageUrl = newPageUrl);