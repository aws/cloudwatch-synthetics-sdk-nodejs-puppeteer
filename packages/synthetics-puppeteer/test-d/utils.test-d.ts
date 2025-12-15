// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType, expectAssignable } from 'tsd';
import { StepConfiguration, OverrideConfiguration } from '../lib/utils';

// Test StepConfiguration interface
declare const stepConfig: StepConfiguration;
expectType<boolean | undefined>(stepConfig.screenshotOnStepStart);
expectType<boolean | undefined>(stepConfig.screenshotOnStepSuccess);
expectType<boolean | undefined>(stepConfig.screenshotOnStepFailure);
expectType<boolean | undefined>(stepConfig.stepSuccessMetric);
expectType<boolean | undefined>(stepConfig.stepDurationMetric);
expectType<boolean | undefined>(stepConfig.continueOnStepFailure);
expectType<boolean | undefined>(stepConfig.continueOnHttpStepFailure);
expectType<boolean | undefined>(stepConfig.stepsReport);

// Test OverrideConfiguration type
declare const overrideConfig: OverrideConfiguration;
expectAssignable<OverrideConfiguration>({ key: 'value' });
expectAssignable<OverrideConfiguration>({ flag: true });
expectAssignable<OverrideConfiguration>({ list: ['a', 'b'] });
expectAssignable<OverrideConfiguration>({ count: 42 });