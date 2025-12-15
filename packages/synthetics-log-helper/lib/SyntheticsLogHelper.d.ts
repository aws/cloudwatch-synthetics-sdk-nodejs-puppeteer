// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { OverrideConfiguration } from "./utils";

/**
 * SyntheticsLogHelper enables you to sanitize URLs, headers, and error messages to redact sensitive information.
 * Available in runtime syn-nodejs-puppeteer-3.2 and later.
 */
export declare class SyntheticsLogHelper {
    constructor(synthetics: any);
    
    /**
     * Returns sanitized URL strings based on configuration. Redacts sensitive URL parameters.
     * @param url The URL to sanitize
     * @param stepConfig Optional override configuration for this function
     * @throws Error if the URL is not valid
     */
    getSanitizedUrl(url: string, stepConfig?: OverrideConfiguration): string;
    
    /**
     * Returns sanitized error strings by sanitizing any URLs present based on configuration.
     * @param error The error to sanitize (Error object or string)
     * @param stepConfig Optional override configuration for this function
     */
    getSanitizedErrorMessage(error: string | Error, stepConfig?: OverrideConfiguration): string;
    
    /**
     * Returns sanitized headers based on restrictedHeaders configuration.
     * @param headers Object containing headers to sanitize
     * @param stepConfig Optional override configuration for this function
     */
    getSanitizedHeaders(headers: Record<string, string>, stepConfig?: OverrideConfiguration): Record<string, string>;
}
