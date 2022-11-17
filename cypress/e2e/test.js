/// <reference types="cypress" />

//Synpress will run a global beforeAll where it loads metamask in browser and does the setup using the PRIVATE_KEY passed in environment variable and .env credentials

before(function () {
  //cypress custom command to login to your application and click Connect Wallet Button;check commands.js
  cy.connectWallet();
});

after(function () {
  //synpress command to disconnect wallet
  cy.disconnectMetamaskWalletFromDapp();
});

describe("Cypress Metamask Integration", function () {
  it("should continue tests after metamask setup");
  //write tests here after wallet connection is established
  //Example: go to NFT page and do purchases.
  cy.switchToMetamaskNotification();
  cy.confirmMetamaskTransaction();
  //if you want to switch metamask accounts or do any activities on metamask window
  cy.switchToMetamaskWindow();
  cy.activateEnhancedGasFeeUIInMetamask();
  cy.switchToCypressWindow();
});
