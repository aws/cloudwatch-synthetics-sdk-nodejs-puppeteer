// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * This class represents a link in the Synthetics Link Checker. It encapsulates information about the link,
 * including its URL, text, parent URL, status, failure reason, and screenshots.
 */
declare class SyntheticsLink {
    /**
     * Creates a new instance of the SyntheticsLink class.
     * @param {string} url - The URL of the link.
     */
    constructor(url: string);
    /**
     * Sets the URL for this SyntheticsLink instance.
     * @param {string} url - The URL of the link.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withUrl(url: string): SyntheticsLink;
    /**
     * Sets the text for this SyntheticsLink instance.
     * @param {string} text - The text of the link.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withText(text: string): SyntheticsLink;
    /**
     * Sets the parent URL for this SyntheticsLink instance.
     * @param {string} parentUrl - The URL of the parent page.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withParentUrl(parentUrl: string): SyntheticsLink;
    /**
     * Sets the status code for this SyntheticsLink instance.
     * @param {string} statusCode - The status code of the link.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withStatusCode(statusCode: string): SyntheticsLink;
    /**
     * Sets the failure reason for this SyntheticsLink instance.
     * @param {string} failureReason - The reason for the link failure.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withFailureReason(failureReason: string): SyntheticsLink;
    /**
     * Adds a screenshot result to this SyntheticsLink instance.
     * @param {string} screenshotResult - A string representing the screenshot result.
     * @returns {void}
     */
    addScreenshotResult(screenshotResult: string): void;
    /**
     * Sets the status text for this SyntheticsLink instance.
     * @param {string} statusText - The status text of the link.
     * @returns {SyntheticsLink} The current instance for method chaining.
     */
    withStatusText(statusText: string): SyntheticsLink;
}

export = SyntheticsLink;