// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import brokenLinkCheckerReport = require('../lib');
import { BrokenLinkCheckerReport } from '../lib/BrokenLinkCheckerReport';
import SyntheticsLink from '@aws/synthetics-link';

expectType<typeof BrokenLinkCheckerReport>(brokenLinkCheckerReport);

const report = new BrokenLinkCheckerReport();
expectType<BrokenLinkCheckerReport>(report);

const link = new SyntheticsLink('https://example.com');
expectType<void>(report.addLink(link));
expectType<void>(report.addLink(link, true));
expectType<void>(report.addLink(undefined));
expectType<void>(report.addLink(null));

expectType<Record<string, SyntheticsLink>>(report.getLinks());
expectType<number>(report.getTotalBrokenLinks());
expectType<number>(report.getTotalLinksChecked());