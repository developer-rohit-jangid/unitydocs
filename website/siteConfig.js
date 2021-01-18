/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  url: 'https://developer-rohit-jangid.github.io', // Replace USERNAME with your GitHub username.
  baseUrl: '/unitydocs/', // The name of your GitHub project.
  projectName: 'unitydocs',  // The name of your GitHub project. Same as above.
  organizationName: 'developer-rohit-jangid' // Your GitHub username.
}

module.exports = siteConfig;
