# AWS CloudWatch Synthetics Type Support for Node.js Puppeteer Runtime

TypeScript type definitions for AWS CloudWatch Synthetics `syn-nodejs-puppeteer-*` runtime.

## Installation

```bash
npm install @aws/synthetics-puppeteer
```

## Usage

```typescript
const synthetics = require('@aws/synthetics-puppeteer');

const runCanary = async () => {
    // Launch browser with default options
    await synthetics.launch();
    
    // Get the current page
    const page = await synthetics.getPage();
    
    // Execute monitored steps
    await synthetics.executeStep('navigate', async () => {
        await page.goto('https://example.com');
    });
    
    await synthetics.executeStep('verify-content', async () => {
        await page.waitForSelector('h1');
    }, {
        screenshotOnStepFailure: true,
        continueOnStepFailure: false
    });
    
    // Take screenshots
    await synthetics.takeScreenshot('final-state');
    
    // Configure metrics and logging
    synthetics.getConfiguration()
        .withLogRequest(true)
        .withLogResponse(true)
        .withHarFile(true);
    
    // Clean up
    await synthetics.close();
};
```

## TypeScript Support

This package provides complete TypeScript type definitions for the AWS CloudWatch Synthetics Node.js Puppeteer runtime, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.