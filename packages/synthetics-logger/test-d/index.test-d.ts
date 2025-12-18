// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import log = require('../lib');

// Test basic logger export - should be an instance
expectType<typeof log>(log);

// Test logging methods
expectType<void>(log.debug('debug message'));
expectType<void>(log.debug('debug message', new Error('test')));
expectType<void>(log.error('error message'));
expectType<void>(log.error('error message', new Error('test')));
expectType<void>(log.info('info message'));
expectType<void>(log.info('info message', new Error('test')));
expectType<void>(log.log('log message'));
expectType<void>(log.log('log message', new Error('test')));
expectType<void>(log.warn('warn message'));
expectType<void>(log.warn('warn message', new Error('test')));