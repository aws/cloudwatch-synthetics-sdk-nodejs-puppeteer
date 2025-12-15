// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

declare class ScreenshotResult {
  constructor(filename: string, pageUrl: string);
  
  get filename(): string;
  set filename(newFilename: string);
  
  get pageUrl(): string;
  set pageUrl(newPageUrl: string);
}

export = ScreenshotResult;