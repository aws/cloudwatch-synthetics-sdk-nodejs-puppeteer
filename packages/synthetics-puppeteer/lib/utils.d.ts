// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * Configuration options for individual steps in Synthetics canaries.
 * These options can override global Synthetics configuration at the step level.
 */
export interface StepConfiguration {
    /** Whether to take a screenshot before starting a step. */
    screenshotOnStepStart?: boolean | undefined;
    /** Whether to take a screenshot after completing a step successfully. */
    screenshotOnStepSuccess?: boolean | undefined;
    /** Whether to take a screenshot after a step fails. */
    screenshotOnStepFailure?: boolean | undefined;
    /** Whether to emit the StepSuccess metric for this step. */
    stepSuccessMetric?: boolean | undefined;
    /** Whether to emit the Duration metric for this step. */
    stepDurationMetric?: boolean | undefined;
    /** Whether to continue with running the canary script after a step fails (executeStep function). */
    continueOnStepFailure?: boolean | undefined;
    /** Whether to continue with running the canary script after an HTTP step fails (executeHttpStep function). */
    continueOnHttpStepFailure?: boolean | undefined;
    /** Whether to include this step in the steps execution report. */
    stepsReport?: boolean | undefined;
}

export type OverrideConfiguration = Record<string, string | boolean | string[] | number>;