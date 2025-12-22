// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { LaunchOptions, Page } from 'puppeteer-core';

/**
 * Class for CloudWatch Synthetics runtime using Node.js and Puppeteer to create and manage browser-based monitoring canaries.
 */
declare class Synthetics {
    // Functions that apply to all canaries
    /**
     * Use addExecutionError to set execution errors for the canary. It fails the canary without 
     * interrupting the script execution. It also doesn't impact the successPercent metrics.
     * @param errorMessage - Describes the error
     * @param ex - The exception that is encountered
     */
    addExecutionError(errorMessage: string, ex: Error): void;

    /**
     * Returns the name of the canary.
     * @returns The canary name
     */
    getCanaryName(): string;

    /**
     * Returns the ARN of the canary.
     * @returns The canary ARN
     */
    getCanaryArn(): string;
    
    /**
     * Returns the custom user agent of the canary.
     * @returns The canary user agent string
     */
    getCanaryUserAgentString(): string;
    
    /**
     * Returns the Synthetics runtime version of the canary. For example, the return value could be syn-nodejs-puppeteer-9.0.
     * This function is available in runtime version syn-nodejs-puppeteer-3.0 and later.
     * @returns The runtime version string
     */
    getRuntimeVersion(): string;

    /**
     * Retrieves the current log level for the Synthetics library. Possible values are:
     * - 0 – Debug
     * - 1 – Info
     * - 2 – Warn
     * - 3 – Error
     * @returns The current log level
     */
    getLogLevel(): number;
    
    /**
     * Sets the log level for the Synthetics library. Possible values are:
     * - 0 – Debug
     * - 1 – Info
     * - 2 – Warn
     * - 3 – Error
     * @param logLevel - The log level to set
     */
    setLogLevel(logLevel: number): void;

    /**
     * Gets the configuration instance for method chaining.
     * @returns The current Synthetics instance for configuration
     */
    getConfiguration(): this;

    /**
     * Sets configuration options for the Synthetics library.
     * @param options - Configuration options object
     */
    setConfig(options: OverrideConfiguration | undefined): void;

    /**
     * Disables the canary from emitting all request metrics that are emitted with no CanaryName dimension.
     */
    disableAggregatedRequestMetrics(): void;
    
    /**
     * Disables all request metrics, including both per-canary metrics and metrics aggregated across all canaries.
     */
    disableRequestMetrics(): void;
    
    /**
     * Disables all step metrics, including both step success metrics and step duration metrics.
     */
    disableStepMetrics(): void;
    
    /**
     * Enables the canary to emit all request metrics that are emitted with no CanaryName dimension.
     */
    enableAggregatedRequestMetrics(): void;
    
    /**
     * Enables all request metrics, including both per-canary metrics and metrics aggregated across all canaries.
     */
    enableRequestMetrics(): void;
    
    /**
     * Enables all step metrics, including both step success metrics and step duration metrics.
     */
    enableStepMetrics(): void;

    /** Returns whether the canary emits a 2xx metric with the CanaryName dimension. */
    get2xxMetric(): boolean;
    
    /** Returns whether the canary emits a 4xx metric with the CanaryName dimension. */
    get4xxMetric(): boolean;
    
    /** Returns whether the canary emits a 5xx metric with the CanaryName dimension. */
    get5xxMetric(): boolean;
    
    /** Returns whether the canary emits a 2xx metric with no dimension. */
    getAggregated2xxMetric(): boolean;
    
    /** Returns whether the canary emits a 4xx metric with no dimension. */
    getAggregated4xxMetric(): boolean;
    
    /** Returns whether the canary emits a 5xx metric with no dimension. */
    getAggregated5xxMetric(): boolean;
    
    /** Returns whether the canary emits a Failed metric with no dimension. */
    getAggregatedFailedCanaryMetric(): boolean;
    
    /** Returns whether the canary emits a Failed requests metric with no dimension. */
    getAggregatedFailedRequestsMetric(): boolean;
    
    /** Returns whether the canary emits a Failed metric with the CanaryName dimension. */
    getFailedCanaryMetric(): boolean;
    
    /** Returns whether the canary emits a Failed requests metric with the CanaryName dimension. */
    getFailedRequestsMetric(): boolean;
    
    /** Returns whether the canary emits a Duration metric with the CanaryName dimension for this canary. */
    getStepDurationMetric(): boolean;
    
    /** Returns whether the canary emits a StepSuccess metric with the CanaryName dimension for this canary. */
    getStepSuccessMetric(): boolean;

    /**
     * Specifies whether to emit a 2xx metric with the CanaryName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    with2xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a 4xx metric with the CanaryName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    with4xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a 5xx metric with the CanaryName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    with5xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a 2xx metric with no dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withAggregated2xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a 4xx metric with no dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withAggregated4xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a 5xx metric with no dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withAggregated5xxMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a Failed metric with no dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withAggregatedFailedCanaryMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a Failed requests metric with no dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withAggregatedFailedRequestsMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a Failed metric with the CanaryName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withFailedCanaryMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a Failed requests metric with the CanaryName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withFailedRequestsMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a Duration metric with the CanaryName and StepName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withStepDurationMetric(value: boolean): this;
    
    /**
     * Specifies whether to emit a SuccessPercent metric with the CanaryName and StepName dimension for this canary.
     * @param value - Boolean value to enable/disable the metric
     * @returns The current instance for method chaining
     */
    withStepSuccessMetric(value: boolean): this;

    /**
     * Specifies whether to create a HAR file for this canary.
     * @param value - Boolean value to enable/disable HAR file creation
     * @returns The current instance for method chaining
     */
    withHarFile(value: boolean): this;
    
    /**
     * Specifies whether to report a step execution summary for this canary.
     * @param value - Boolean value to enable/disable step execution summary
     * @returns The current instance for method chaining
     */
    withStepsReport(value: boolean): this;
    
    /**
     * Specifies whether to include passwords that appear in URLs in logs and reports.
     * @param value - Boolean value to enable/disable URL password inclusion
     * @returns The current instance for method chaining
     */
    withIncludeUrlPassword(value: boolean): this;
    
    /**
     * Specifies URL path or query parameters to redact from logs, reports, and errors.
     * @param value - Array of parameters to redact or asterisk (*) to redact all
     * @returns The current instance for method chaining
     */
    withRestrictedUrlParameters(value: string[] | string): this;
    
    /**
     * Specifies whether to log every request in the canary's logs.
     * @param value - Boolean value to enable/disable request logging
     * @returns The current instance for method chaining
     */
    withLogRequest(value: boolean): this;
    
    /**
     * Specifies whether to log every response in the canary's logs.
     * @param value - Boolean value to enable/disable response logging
     * @returns The current instance for method chaining
     */
    withLogResponse(value: boolean): this;
    
    /**
     * Specifies whether to log every request body in the canary's logs.
     * @param value - Boolean value to enable/disable request body logging
     * @returns The current instance for method chaining
     */
    withLogRequestBody(value: boolean): this;
    
    /**
     * Specifies whether to log every response body in the canary's logs.
     * @param value - Boolean value to enable/disable response body logging
     * @returns The current instance for method chaining
     */
    withLogResponseBody(value: boolean): this;
    
    /**
     * Specifies whether to log every request header in the canary's logs.
     * @param value - Boolean value to enable/disable request header logging
     * @returns The current instance for method chaining
     */
    withLogRequestHeaders(value: boolean): this;
    
    /**
     * Specifies whether to log every response header in the canary's logs.
     * @param value - Boolean value to enable/disable response header logging
     * @returns The current instance for method chaining
     */
    withLogResponseHeaders(value: boolean): this;

    /** Returns whether the canary creates a HAR file. */
    getHarFile(): boolean;
    
    /** Returns whether the canary reports a step execution summary. */
    getStepsReport(): boolean;
    
    /** Returns whether the canary includes passwords that appear in URLs in logs and reports. */
    getIncludeUrlPassword(): boolean;
    
    /** Returns the array of URL parameters that are redacted from logs, reports, and errors. */
    getRestrictedUrlParameters(): string[];
    
    /** Returns whether the canary logs every request in the canary's logs. */
    getLogRequest(): boolean;
    
    /** Returns whether the canary logs every response in the canary's logs. */
    getLogResponse(): boolean;
    
    /** Returns whether the canary logs every request body in the canary's logs. */
    getLogRequestBody(): boolean;
    
    /** Returns whether the canary logs every response body in the canary's logs. */
    getLogResponseBody(): boolean;
    
    /** Returns whether the canary logs every request header in the canary's logs. */
    getLogRequestHeaders(): boolean;
    
    /** Returns whether the canary logs every response header in the canary's logs. */
    getLogResponseHeaders(): boolean;

    /**
     * Specifies whether to include request headers in the report.
     * @param value - Boolean value to enable/disable request headers in reports
     * @returns The current instance for method chaining
     */
    withIncludeRequestHeaders(value: boolean): this;
    
    /**
     * Specifies whether to include response headers in the report.
     * @param value - Boolean value to enable/disable response headers in reports
     * @returns The current instance for method chaining
     */
    withIncludeResponseHeaders(value: boolean): this;
    
    /**
     * Specifies header values to ignore if headers are included in reports.
     * @param value - Array of header names to restrict or single header name
     * @returns The current instance for method chaining
     */
    withRestrictedHeaders(value: string[] | string): this;
    
    /**
     * Specifies whether to include the request body in the report.
     * @param value - Boolean value to enable/disable request body in reports
     * @returns The current instance for method chaining
     */
    withIncludeRequestBody(value: boolean): this;
    
    /**
     * Specifies whether to include the response body in the report.
     * @param value - Boolean value to enable/disable response body in reports
     * @returns The current instance for method chaining
     */
    withIncludeResponseBody(value: boolean): this;

    /** Enables all reporting options (includeRequestHeaders, includeResponseHeaders, includeRequestBody, and includeResponseBody). */
    enableReportingOptions(): void;
    
    /** Disables all reporting options (includeRequestHeaders, includeResponseHeaders, includeRequestBody, and includeResponseBody). */
    disableReportingOptions(): void;

    // Screenshot configuration
    /**
     * Disables all screenshot options (screenshotOnStepStart, screenshotOnStepSuccess, and screenshotOnStepFailure).
     */
    disableStepScreenshots(): void;
    
    /**
     * Enables all screenshot options (screenshotOnStepStart, screenshotOnStepSuccess, and screenshotOnStepFailure). 
     * By default, all these methods are enabled.
     */
    enableStepScreenshots(): void;
    
    /** Returns whether the canary takes a screenshot after a step fails. */
    getScreenshotOnStepFailure(): boolean;
    
    /** Returns whether the canary takes a screenshot before starting a step. */
    getScreenshotOnStepStart(): boolean;
    
    /** Returns whether the canary takes a screenshot after completing a step successfully. */
    getScreenshotOnStepSuccess(): boolean;
    
    /**
     * Indicates whether to take a screenshot before starting a step.
     * @param value - Boolean value to enable/disable screenshots on step start
     * @returns The current instance for method chaining
     */
    withScreenshotOnStepStart(value: boolean): this;
    
    /**
     * Indicates whether to take a screenshot after completing a step successfully.
     * @param value - Boolean value to enable/disable screenshots on step success
     * @returns The current instance for method chaining
     */
    withScreenshotOnStepSuccess(value: boolean): this;
    
    /**
     * Indicates whether to take a screenshot after a step fails.
     * @param value - Boolean value to enable/disable screenshots on step failure
     * @returns The current instance for method chaining
     */
    withScreenshotOnStepFailure(value: boolean): this;

    // Visual monitoring
    /**
     * Enables visual monitoring by comparing screenshots with a baseline run.
     * @param value - Whether to enable visual comparison with baseline run
     * @returns The current instance for method chaining
     */
    withVisualCompareWithBaseRun(value: boolean): this;
    
    /**
     * Sets the acceptable percentage for screenshot variance in visual comparisons.
     * @param value - The variance threshold percentage
     * @returns The current instance for method chaining
     */
    withVisualVarianceThresholdPercentage(value: number): this;
    
    /**
     * Sets the highlight color for variance areas in visual monitoring reports.
     * @param value - Hex color code (e.g., "#fafa00")
     * @returns The current instance for method chaining
     */
    withVisualVarianceHighlightHexColor(value: string): this;
    
    /**
     * Sets whether the canary fails when visual variance exceeds the threshold.
     * @param value - Whether to fail the canary on visual variance
     * @returns The current instance for method chaining
     */
    withFailCanaryRunOnVisualVariance(value: boolean): this;

    // Functions that apply to UI canaries only
    /**
     * Appends userAgentString to the specified page's user-agent header.
     * @param page - The page to modify the user agent for
     * @param userAgentString - The string to append to the user agent
     */
    addUserAgent(page: Page, userAgentString: string): Promise<void>;

    /**
     * Executes the provided step, wrapping it with start/pass/fail logging, start/pass/fail screenshots, 
     * and pass/fail and duration metrics.
     * @param stepName - The name of the step
     * @param func - The function to execute as part of this step
     * @param stepConfig - Optional step configuration to override global settings
     * @param pageObj - Optional page object to use for this step
     * @returns What functionToExecute returns
     */
    executeStep(
      stepName: string,
      func: () => Promise<void>,
      stepConfig?: StepConfiguration,
      pageObj?: Page
    ): Promise<void>;

    /**
     * Returns the browser launch options that are used by CloudWatch Synthetics.
     * @returns A promise that resolves to the default launch options
     */
    getDefaultLaunchOptions(): Promise<LaunchOptions>;

    /**
     * Gets the current page instance.
     * @returns A promise that resolves to the current page instance
     * @remarks This method is specifically for use with Puppeteer Canary.
     */
    getPage(): Promise<Page>;

    /**
     * Closes the existing browser and launches a new one. CloudWatch Synthetics always launches a browser 
     * before starting to run your script. You don't need to call launch() unless you want to launch a new 
     * browser with custom options.
     * @param options - A configurable set of options to set on the browser. For more information, see Launch options type.
     */
    launch(options?: LaunchOptions): Promise<void>;

    /**
     * Closes the browser and cleans up resources.
     */
    close(): Promise<void>;

    /**
     * Takes a screenshot (.PNG) of the current page with name and suffix.
     * You can take a screenshot for a particular canary step by passing the stepName as the first parameter. 
     * Screenshots are linked to the canary step in your reports, to help you track each step while debugging.
     * @param stepName - The name of the step for which to take the screenshot
     * @param suffix - Optional suffix to append to the screenshot filename
     * @param page - Optional page object to screenshot (defaults to current page)
     * @returns A promise that resolves to a ScreenshotResult or undefined if screenshot failed
     */
    takeScreenshot(
      stepName: string,
      suffix?: string,
      page?: Page | null
    ): Promise<ScreenshotResult | undefined>;


    // Functions that apply to API canaries only
    /**
     * Executes an HTTP request as a step in your canary. This function wraps the HTTP request
     * with start/pass/fail logging, metrics collection, and optional custom validation.
     * 
     * @param stepName - The name of the step for logging and metrics purposes
     * @param requestOptions - HTTP request configuration object containing URL, method, headers, body, etc.
     * @param func - Optional validation function to execute after the HTTP request completes.
     *               This function receives the response and can perform custom assertions.
     * @param stepConfig - Optional step configuration to override global settings for this step
     * @returns A promise that resolves when the HTTP request and optional validation complete
     */
    executeHttpStep(
      stepName: string, 
      requestOptions: any, 
      func?: () => Promise<void>, 
      stepConfig?: StepConfiguration
    ): Promise<void>;
} 

/**
 * Configuration options for individual steps in Synthetics canaries.
 * These options can override global Synthetics configuration at the step level.
 */
interface StepConfiguration {
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

/**
 * Configuration object for overriding default sanitization settings.
 * Allows customization of URL parameter filtering, header restrictions, and other sanitization options.
 */
type OverrideConfiguration = Record<string, string | boolean | string[] | number>;

/**
 * Represents the result of a screenshot operation in Amazon CloudWatch Synthetics.
 * Contains information about the captured screenshot including filename and page URL.
 */
declare class ScreenshotResult {
  constructor(filename: string, pageUrl: string);
  
  get filename(): string;
  set filename(newFilename: string);
  
  get pageUrl(): string;
  set pageUrl(newPageUrl: string);
}

declare const synthetics: Synthetics;
export = synthetics;