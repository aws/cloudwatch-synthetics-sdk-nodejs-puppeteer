// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import { Page, LaunchOptions } from 'puppeteer-core';
import { Synthetics } from '../lib/synthetics-puppeteer';
import ScreenshotResult = require('../lib/screenshot-result');

declare const synthetics: Synthetics;

// Test canary information methods
expectType<string>(synthetics.getCanaryName());
expectType<string>(synthetics.getCanaryArn());
expectType<string>(synthetics.getRuntimeVersion());

// Test configuration methods
expectType<Synthetics>(synthetics.getConfiguration());
expectType<void>(synthetics.setConfig({}));

// Test metric methods
expectType<void>(synthetics.disableRequestMetrics());
expectType<void>(synthetics.enableRequestMetrics());
expectType<boolean>(synthetics.get2xxMetric());
expectType<Synthetics>(synthetics.with2xxMetric(true));

// Test reporting methods
expectType<Synthetics>(synthetics.withHarFile(true));
expectType<boolean>(synthetics.getHarFile());

// Test screenshot methods
expectType<void>(synthetics.enableStepScreenshots());
expectType<boolean>(synthetics.getScreenshotOnStepFailure());
expectType<Synthetics>(synthetics.withScreenshotOnStepStart(true));

// Test UI canary methods
declare const page: Page;
expectType<Promise<void>>(synthetics.executeStep('test', async () => {}));
expectType<Promise<LaunchOptions>>(synthetics.getDefaultLaunchOptions());
expectType<Promise<Page>>(synthetics.getPage());
expectType<Promise<void>>(synthetics.launch());
expectType<Promise<ScreenshotResult | undefined>>(synthetics.takeScreenshot('test'));

// Test API canary methods
expectType<Promise<void>>(synthetics.executeHttpStep('api-test', {}));