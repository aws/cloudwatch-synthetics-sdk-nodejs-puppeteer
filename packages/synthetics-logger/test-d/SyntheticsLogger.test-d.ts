// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import { SyntheticsLogger } from '../lib/SyntheticsLogger';

declare const logger: SyntheticsLogger;

// Test logging methods
expectType<void>(logger.debug('debug message'));
expectType<void>(logger.debug('debug message', new Error('test')));
expectType<void>(logger.error('error message'));
expectType<void>(logger.error('error message', new Error('test')));
expectType<void>(logger.info('info message'));
expectType<void>(logger.info('info message', new Error('test')));
expectType<void>(logger.log('log message'));
expectType<void>(logger.log('log message', new Error('test')));
expectType<void>(logger.warn('warn message'));
expectType<void>(logger.warn('warn message', new Error('test')));