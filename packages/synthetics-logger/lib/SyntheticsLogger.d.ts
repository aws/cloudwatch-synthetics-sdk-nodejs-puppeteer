// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * SyntheticsLogger writes logs out to both the console and to a local log file at the same log level.
 * This log file is written to both locations only if the log level is at or below the desired logging level.
 */
export declare class SyntheticsLogger {
    /**
     * Debug level logging
     * @param message The message to log
     * @param ex Optional exception to log
     */
    debug(message: string, ex?: Error): void;

    /**
     * Error level logging
     * @param message The message to log
     * @param ex Optional exception to log
     */
    error(message: string, ex?: Error): void;

    /**
     * Info level logging
     * @param message The message to log
     * @param ex Optional exception to log
     */
    info(message: string, ex?: Error): void;

    /**
     * Alias for info() method
     * @param message The message to log
     * @param ex Optional exception to log
     */
    log(message: string, ex?: Error): void;

    /**
     * Warning level logging
     * @param message The message to log
     * @param ex Optional exception to log
     */
    warn(message: string, ex?: Error): void;
}