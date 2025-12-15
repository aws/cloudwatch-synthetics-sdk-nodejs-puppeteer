// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import SyntheticsLink from '@aws/synthetics-link';

export declare class BrokenLinkCheckerReport {
    /**
     * Creates a new instance of the BrokenLinkCheckerReport class.
     */
    constructor();
    /**
     * Adds a link to BrokenLinkCheckerResult.
     * @param {Object.<SyntheticsResult>} syntheticsLink - The Synthetics link object to be added.
     * @param {boolean} [isBrokenLink] - Optional flag to indicate whether the link is broken or not. If not passed, defaults to consider the link as broken if the status code is not available or if the status code is greater than or equal to 400.
     * @returns {void}
     */
    addLink(syntheticsLink: SyntheticsLink | undefined | null, isBrokenLink?: boolean): void;
    /**
     * Returns an object containing all the links checked.
     * @returns {Object} An object where the keys are link URLs and the values are Synthetics link objects.
     */
    getLinks(): Record<string, SyntheticsLink>;
    /**
     * Returns the total number of broken links.
     * @returns {number} The total number of broken links.
     */
    getTotalBrokenLinks(): number;
    /**
     * Returns the total number of links checked.
     * @returns {number} The total number of links checked.
     */
    getTotalLinksChecked(): number;
}