/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/// <reference types="cypress" />

type UserCredentials = { userName: string; password: string };

type EmailProviderConfiguration = {
    serverHost: string,
    serverPort: string,
    fromAddress: string,
    replyToAddress: string,
    userName: string,
    password: string,
    displayName: string
};

type SMSProviderConfiguration = {
    apiKey?: string,
    apiSecret?: string,
    sender?: string
    providerURL?: string,
    contentType?: string,
    httpMethod?: string,
    headers?: string
    payload?: string
};

/**
 * Class containing getters to retrieve Environment Configurations.
 */
export class EnvironmentConfig {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    /**
     * Returns the server origin.
     * ex: https://dev.accounts.asgardeo.io/
     *
     * @return {string}
     */
    public static getServerOrigin(): string {

        return Cypress.env("serverOrigin");
    }

    public static getClientId(): string {
        return Cypress.env("clientId")
    }

    public static getClientSecret(): string {
        return Cypress.env("clientSecret")
    }

    /**
     * Returns the console app base path
     * ex: app/
     *
     * @return {string}
     */
    public static getConsoleAppBasePath(): string {

        return Cypress.env("consoleAppBasePath");
    }

    /**
     * Returns the cross region server origin.
     * ex: https://dev.accounts.asgardeo.io/
     *
     * @return {string}
     */
    public static getCrossRegionServerOrigin(): string {

        return Cypress.env("crossRegionServerOrigin");
    }

    /**
     * Returns the portal endpoint origin.
     * ex: https://dev.accounts.asgardeo.io/
     *
     * @return {string}
     */
     public static getPortalEndpointOrigin(): string {

        return Cypress.env("portalEndpointOrigin");
    }

    /**
     * Returns the cross region portal endpoint origin.
     * ex: https://dev.accounts.asgardeo.io/
     *
     * @return {string}
     */
    public static getCrossRegionPortalEndpointOrigin(): string {

        return Cypress.env("portalCrossRegionEndpointOrigin");
    }

    /**
     * Returns the product landing page.
     * ex: https://dev.asgardeo.io/
     *
     * @return {string}
     */
    public static getProductLanding(): string {

        return Cypress.env("productLanding");
    }

    /**
     * Returns Tenant Admin Credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getTenantAdminCredentials(): { userName: string; password: string } {

        return {
            password: Cypress.env("tenantUserPassword"),
            userName: this.getGroupedUserName(Cypress.env("tenantUserName"))
        };
    }

    public static getNonGroupedTenantAdminCredentials(): { userName: string; password: string } {

        return {
            password: Cypress.env("tenantUserPassword"),
            userName: Cypress.env("tenantUserName")
        };
    }

    /**
     * Returns Billing Admin Credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     * 
     * @returns {UserCredentials}
     */
    public static getBillingAdminCredentials(): UserCredentials {

        return {
            userName: Cypress.env("billingAdminUserName"),
            password: Cypress.env("billingAdminPassword")
        };
    }

    /**
     * Get billing tenant name.
     * ex: test
     * 
     * @returns {string}
     */
    public static getBillingTenant(): string {

        return Cypress.env("billingTenant");
    }

    /**
     * Returns cross region Tenant Admin Credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getCrossRegionTenantAdminCredentials(): UserCredentials {

        return {
            password: Cypress.env("crossRegionTenantUserPassword"),
            userName: Cypress.env("crossRegionTenantUserName")
        };
    }

    /**
     * Returns asgardeo2choreo Tenant Admin Credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getAsgardeo2ChoreoAdminCredentials(): UserCredentials {

        return {
            password: Cypress.env("asgardeoSocialTenantUserPassword"),
            userName: Cypress.env("asgardeoSocialTenantUserName")
        };
    }

    /**
     * Returns Super Tenant Admin Credentials.
     * ex: { userName: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getSuperAdminCredentials(): UserCredentials {

        return {
            password: Cypress.env("superAdminPassword"),
            userName: Cypress.env("superAdminUserName")
        };
    }

    /**
     * Returns Tenant Admin1 Credentials.
     * ex: { username: "<TENANT_ID>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getTenantAdmin1Credentials(): UserCredentials {

        return {
            password: Cypress.env("tenantUser1Password"),
            userName: this.getGroupedUserName(Cypress.env("tenantUser1Name"))
        };
    }

    /**
     * Returns Tenant Admin2 Credentials.
     * ex: { username: "<TENANT_ID>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getTenantAdmin2Credentials(): UserCredentials {

        return {
            password: Cypress.env("tenantUser2Password"),
            userName: this.getGroupedUserName(Cypress.env("tenantUser2Name"))
        };
    }

    /**
     * Returns Tenant B2B Admin Credentials.
     * ex: { username: "<TENANT_ID>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getB2BTenantAdminCredentials(): UserCredentials {

        return {
            password: Cypress.env("b2bAdminUserPassword"),
            userName: this.getGroupedUserName(Cypress.env("b2bAdminUserName"))
        };
    }

    /**
     * Returns Invalid Tenant User Credentials.
     * ex: { username: "<TENANT_ID>" }
     *
     * @return {username: string}
     */
     public static getInvalidCredentials(): { username: string } {

        return {
            username: Cypress.env("tenantInvalidUserName")
        };
    }
    
    /**
     * Returns Console Access URL.
     * ex: https://dev.console.asgardeo.io/
     *
     * @return {string}
     */
    public static getConsoleAccessURL(): string {

        return Cypress.env("accessUrlConsole");
    }

    /**
     * Returns Billing Portal Access URL.
     * ex: https://subscriptions.dv.wso2.com/
     * 
     * @return {string} 
     */
    public static getBillingPortalAccessURL(): string {

        return Cypress.env("accessUrlBillingPortal");
    }

    /**
     * Returns cross region Console Access URL.
     * ex: https://dev.console.asgardeo.io/
     *
     * @return {string}
     */
    public static getCrossRegionConsoleAccessURL(): string {

        return Cypress.env("crossRegionAccessUrlConsole");
    }

    /**
     * Returns the tenant qualified Console Access URL
     * ex: https://dev.console.asgardeo.io/t/mytenant/
     * @param {string} tenantPath - Tenant Path `t/test.com/`.
     *
     * @return {string}
     */
    public static getTenantQualifiedConsoleAccessURL(tenantPath?: string): string {

        return this.getConsoleAccessURL() + (tenantPath ?? this.getTenantPath());
    }

    /**
     * Returns My Account Access URL.
     * ex: https://dev.myaccount.asgardeo.io/
     *
     * @return {string}
     */
    public static getMyAccountAccessURL(): string {

        return Cypress.env("accessUrlMyaccount");
    }

    /**
     * Returns cross region My Account Access URL.
     * ex: https://dev.myaccount.eu.asgardeo.io/
     *
     * @return {string}
     */
    public static getCrossRegionMyAccountAccessURL(): string {

        return Cypress.env("crossRegionAccessUrlMyaccount");
    }

    /**
     * Returns the Tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
    public static getTenant(): string {

        return this.getGroupedTenantName(Cypress.env("tenantName"));
    }

    /**
     * Returns the Tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
    public static getCrossRegionTenant(): string {

        return Cypress.env("crossRegionTenantName");
    }

    /**
     * It returns the value of the environment variable "tenantName1"
     * @returns {string}
     */
     public static getTenant1(): string {

        return this.getGroupedTenantName(Cypress.env("tenantName1"));
    }

    /**
     * It returns the value of the environment variable "tenantName2"
     * @returns {string}
     */
    public static getTenant2(): string {

        return this.getGroupedTenantName(Cypress.env("tenantName2"));
    }

    /**
     * Returns Tenant Path.
     * ex: "t/test.com/"
     *
     * @return {string}
     */
    public static getTenantPath(): string {

        return "t/" +  EnvironmentConfig.getTenant() + "/";
    }

    /**
     * Returns cross region Tenant Path.
     * ex: "t/test.com/"
     *
     * @return {string}
     */
    public static getCrossRegionTenantPath(): string {

        return Cypress.env("crossRegionTenantDomainEndPoint");
    }


    /**
     * Returns Tenant1 Path.
     * ex: "t/testasgardeo1/"
     *
     * @return {string}
     */
    public static getTenant1Path(): string {

        return "t/" +  EnvironmentConfig.getTenant1() + "/";
    }

    /**
     * Returns Tenant2 Path.
     * ex: "t/testasgardeo2/"
     *
     * @return {string}
     */
    public static getTenant2Path(): string {

        return "t/" +  EnvironmentConfig.getTenant2() + "/";
    }

    /**
     * Returns the B2B Tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
     public static getB2BTenant(): string {

        return this.getGroupedTenantName(Cypress.env("b2bOrgName"));
    }

    /**
     * Returns the asgardeo2choreo Tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
     public static getAsgardeo2ChoreoTenant(): string {

        return Cypress.env("asgardeoSocialTenantName");   
    }

    /**
     * Returns Super Tenant Path.
     * ex: "t/carbon.super/"
     *
     * @return {string}
     */
    public static getSuperTenantPath(): string {

        return Cypress.env("superDomainEndPoint");
    }

    /**
     * Returns the Invited admins email.
     * ex: "bob@test.com"
     *
     * @return {string}
     */
    public static getInvitedAdminEmail(): string {

        return this.getGroupedUserName(Cypress.env("invitedAdmin"));
    }

    /**
     * Returns the InvitedAdmin users password.
     * ex: "password"
     *
     * @return {string}
     */
       public static getInvitedAdminPassword(): string {

        return Cypress.env("invitedAdminPassword");
    }

    /**
     * Returns the OAuth 2.0 credentials needed to access the Invited Admins mailbox.
     * ex: { clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; refreshToken: "<REFRESH_TOKEN>" }
     *
     * @return { clientID: string; clientSecret: string; refreshToken: string }
     */
    public static getInvitedAdminMailClientOAuth2Credentials(): {
        clientID: string; clientSecret: string; refreshToken: string; username : string} {

        return {
            clientID: Cypress.env("gmailInvitedAdminClientID"),
            clientSecret: Cypress.env("gmailInvitedAdminClientSecret"),
            refreshToken: Cypress.env("gmailInvitedAdminRefreshToken"),
            username: this.getGroupedUserName(Cypress.env("invitedAdmin"))
        };
    }

     /**
     * Returns the OAuth 2.0 credentials needed to access the User's mailbox.
     * ex: { clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; refreshToken: "<REFRESH_TOKEN>" }
     *
     * @return { clientID: string; clientSecret: string; refreshToken: string }
     */
    public static getUserMailClientOAuth2Credentials(): {
        clientID: string; clientSecret: string; refreshToken: string, username: string } {

        return {
            clientID: Cypress.env("gmailBusinessUserClientID"),
            clientSecret: Cypress.env("gmailBusinessUserClientSecret"),
            refreshToken: Cypress.env("gmailBusinessUserRefreshToken"),
            username: this.getGroupedUserName(Cypress.env("businessUser"))
        };
    }

    /**
     * Returns the client id of the email.
     * @returns {string}
     */
    public static getGmailClientId(): string {

        return Cypress.env("gmailAdminUserClientID");
    }

    /**
     * Returns the client secret of the email.
     * @returns {string}
     */
    public static getGmailClientSecret(): string {

        return Cypress.env("gmailAdminUserClientSecret");
    }

    /**
     * Returns the refresh token of the email.
     * @returns {string}
     */
    public static getRefreshToken(): string {

        return Cypress.env("gmailAdminUserRefreshToken");

    }

    public static getConsoleAppName(): string {

        return Cypress.env("appConsole");
    }

    /**
     * Returns Business user's credentials
     * @deprecated
     * @return {{userName: string, password: string, mailOAuth2ClientID:string,
     *  mailOAuth2ClientSecret: string, mailOAuth2RefreshToken:string }}
     */
    public static getUserCredentialsFromSystem(): 
    { username: string; password: string; mailOAuth2ClientID: string; mailOAuth2ClientSecret: string;
        mailOAuth2RefreshToken: string }{
        return {
            username :  this.getGroupedUserName(Cypress.env("businessUser")),
            password : Cypress.env("businessUserPassword"),
            mailOAuth2ClientID : Cypress.env("gmailBusinessUserClientID"),
            mailOAuth2ClientSecret : Cypress.env("gmailBusinessUserClientSecret"),
            mailOAuth2RefreshToken : Cypress.env("gmailBusinessUserRefreshToken")
        }
    }

    /**
     * Returns Business user's credentials
     * @return {{userName: string, password: string, mailOAuth2ClientID:string,
     *  mailOAuth2ClientSecret: string, mailOAuth2RefreshToken:string }}
     */
    public static getUserCredentials(): 
    { userName: string; password: string; mailOAuth2ClientID: string; mailOAuth2ClientSecret: string;
        mailOAuth2RefreshToken: string }{
        return {
            userName :  this.getGroupedUserName(Cypress.env("businessUser")),
            password : Cypress.env("businessUserPassword"),
            mailOAuth2ClientID : Cypress.env("gmailBusinessUserClientID"),
            mailOAuth2ClientSecret : Cypress.env("gmailBusinessUserClientSecret"),
            mailOAuth2RefreshToken : Cypress.env("gmailBusinessUserRefreshToken")
        };
    }

    /**
     * Returns the OAuth 2.0 credentials needed to access the Admin Users' mailbox.
     * ex: { clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; refreshToken: "<REFRESH_TOKEN>" }
     *
     * @return { clientID: string; clientSecret: string; refreshToken: string }
     */
    public static getAdminUserMailClientOAuth2Credentials():
        { username: string, clientID: string; clientSecret: string; refreshToken: string } {

        return {
            clientID: Cypress.env("gmailAdminUserClientID"),
            clientSecret: Cypress.env("gmailAdminUserClientSecret"),
            refreshToken: Cypress.env("gmailAdminUserRefreshToken"),
            username: Cypress.env("tenantUserName")

        };

    }

    /**
     * Returns the OAuth 2.0 credentials needed to access the Admin Users' mailbox.
     * ex: { clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; refreshToken: "<REFRESH_TOKEN>" }
     *
     * @return { username: string; clientID: string; clientSecret: string; refreshToken: string }
     */
    public static getAdminUser1MailClientOAuth2Credentials():
        { username: string, clientID: string; clientSecret: string; refreshToken: string } {

        return {
            clientID: Cypress.env("gmailAdminUser1ClientID"),
            clientSecret: Cypress.env("gmailAdminUser1ClientSecret"),
            refreshToken: Cypress.env("gmailAdminUser1RefreshToken"),
            username: Cypress.env("tenantUser1Name")

        };

    }

    /**
     * Returns Tenant Admin1 details.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string;firstName: string; lastName: string
     *  tenantPath: string; tenantName: string; gmailClientId: string; gmailClientSecreat: string
     * gmailRefreshToken: string; invitationLink:string}}
     */
    public static getTenantAdmin1Details(): { username: string; password: string
        firstName: string; lastName:string; tenantPath :string, tenantName:string;
        gmailClientId: string, gmailClientSecreat: string;gmailRefreshToken: string;invitationLink:string} {

        return {
            password: Cypress.env("tenantUser1Password"),
            username: this.getGroupedUserName(Cypress.env("tenantUser1Name")),
            firstName : Cypress.env("tenantUser1FirstName"),
            lastName : Cypress.env("tenantUser1LastName"),
            tenantPath : Cypress.env("tenantDomain1EndPoint"),
            tenantName : this.getGroupedTenantName(Cypress.env("tenantName1")),
            gmailClientId : Cypress.env("gmailAdminUser1ClientID"),
            gmailClientSecreat : Cypress.env("gmailAdminUser1ClientSecret"),
            gmailRefreshToken : Cypress.env("gmailAdminUser1RefreshToken"),
            invitationLink : Cypress.env("invitationLinkAdminUser1")
        };
    }

    /**
     * Returns the client id of the email.
     * @returns {string}
     */
    public static getEmailSender(): string {

        return Cypress.env("emailSender");
    }

    /**
     * Returns the from address of billing email notifications.
     * @returns {string}
     */
    public static getBillingEmailSender(): string {

        return Cypress.env("billingEmailSender");
    }

    /**
     * Returns the eventing email sender.
     * @returns {string}
     */
     public static getEventingEmailSender(): string {

        return Cypress.env("eventingEmailSender");
    }

    /**
     * Returns Google user credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getGoogleUserCredentials(): {
        username: string; password: string } {

        return {
            username: Cypress.env("googleUserName"),
            password: Cypress.env("googleUserPassword")
        };
    }

    /**
     * Returns GitHub user credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getGitHubUserCredentials(): {
        username: string; password: string } {

        return {
            username: Cypress.env("gitHubUserName"),
            password: Cypress.env("gitHubUserPassword")
        };
    }

    /**
     * Returns Facebook user credentials.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
       public static getFacebookUserCredentials(): {
        username: string; password: string } {

        return {
            username: Cypress.env("facebookUserName"),
            password: Cypress.env("facebookPassword")
        };
    }

    /**
     * Returns credentials of tenant admin used for non-critical test suite.
     * ex: { username: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getNonCriticalTenantUserCredentials(): {
        username: string; password: string } {

        return {
            username: Cypress.env("nonCriticalTenantUserName"),
            password: Cypress.env("nonCriticalTenantUserPassword")
        };
    }

    /**
     * Returns Google client ID and client secret used to create Google IDP.
     * ex: { clientId: "<GOOGLE_CLIENT_ID>", clientSecret: "<GOOGLE_CLIENT_SECRET>" }
     *
     * @return {{clientId: string; clientSecret: string}}
     */
    public static getGoogleClientCredentials(): {
        clientId: string; clientSecret: string } {

        return {
            clientId: Cypress.env("googleClientId"),
            clientSecret: Cypress.env("googleClientSecret")
        };
    }

    /**
     * Returns Facebook app ID and app secret used to create Facebook IDP.
     * ex: { appId: "<FACEBOOK_APP_ID>", appSecret: "<FACEBOOK_APP_SECRET>" }
     *
     * @return {{clientId: string; clientSecret: string}}
     */
     public static getFacebookAppCredentials(): {
        appId: string; appSecret: string } {

        return {
            appId: Cypress.env("facebookAppId"),
            appSecret: Cypress.env("facebookAppSecret")
        };
    }

    /**
     * Returns GitHub client ID and client secret used to create GitHub IDP.
     * ex: { clientId: "<GITHUB_CLIENT_ID>", clientSecret: "<GITHUB_CLIENT_SECRET>" }
     *
     * @return {{clientId: string; clientSecret: string}}
     */
    public static getGitHubClientCredentials(): {
        clientId: string; clientSecret: string } {

        return {
            clientId: Cypress.env("githubClientId"),
            clientSecret: Cypress.env("githubClientSecret")
        };
    }

     /**
     * Returns the Tenant's name for non-crtical test suite.
     * ex: "test.com"
     *
     * @return {string}
     */
      public static getNonCriticalTenant(): string {

        return Cypress.env("nonCriticalTenantName");
    }

    /**
     * Returns Tenant Path for non-crtical test suite.
     * ex: "t/test.com/"
     *
     * @return {string}
     */
     public static getNonCriticalTenantPath(): string {

        return Cypress.env("nonCriticalTenantDomainEndPoint");
    }

    /**
     * Returns whether sample applications should be downloaded inside the test suite or not.
     * @returns {boolean}
     */
    public static getSampleAppDownloadConfig(): boolean {

        return Cypress.env("downloadSampleApplications");
    }

     /**
     * Returns the allowed maximum retry attempts count.
     * @returns {number}
     */
    public static getAllowedMaximumRetryAttempt(): number {

        return Cypress.env("allowedMaximumRetryAttempt");
    }

    /**
     * Set skip test boolean to identify the previous failed testcases
     */
    public static setSkipTest(skipTest: boolean): void {
        Cypress.env("shouldSkip", skipTest);
    }

    /**
     * Returns whether the previous tests failed or not
     */
    public static getSkipTestValue(): boolean {
        return Cypress.env("shouldSkip");
    }

    /**
     * Set the os type of machine
     */
     public static setPlatform(osType: string): void {
        
        const platform = Cypress.platform;
        cy.log("platform name " + platform);
        Cypress.env("platform", osType);
    }

    /**
     * Returns the enterprise SP client ID
     */
    public static getEnterpriseSPClientID(): string {
        return Cypress.env("enterpriseSPClientID");
    }

    /**
     * Returns the enterprise SP client ID
     */
    public static getEnterpriseTenant(): string {
        return Cypress.env("enterpriseTenant");
    }

    /**
     * Returns the onprem userstore access Url
     */
     public static getOnpremUserstoreAccessUrl(): string {
        return Cypress.env("accessUrlOnpremUserStore");
    }

    /**
     * Set conditional state to decide whether a test should be skipped in local env
     * 
     * @returns {boolean}
     */
    public static skipTestInLocalEnv(): boolean {

        return ((Cypress.env("environment") === "local") ? true : false);
    }

    /**
     * Returns Custom Domain Admin Credentials.
     * ex: { userName: "<USER_NAME>", password: "<PASSWORD>" }
     *
     * @return {{username: string; password: string}}
     */
    public static getTenantAdminCredentialsCustomDomain(): { userName: string; password: string } {

        return {
            password: Cypress.env("customDomainTenantUserPassword"),
            userName: Cypress.env("customDomainTenantUserName")
        };
    }

    /**
     * Returns Custom Domain Tenant Path.
     *
     * @return {string}
     */
    public static getTenantPathCustomDomain(): string {

        return ("t/"+Cypress.env("customDomainTenantName")+"/");
    }

    /**
     * Returns the custom domain name
     * 
     * @returns {string}
     */
    public static getCustomDomainName(): string {
    
        return Cypress.env("customDomainName");     
    }
    
    /**
     * Returns the custom domain access url.
     * 
     * @returns {string}
     */
    public static getCustomDomainAccessUrl(): string {

        return Cypress.env("customDomainAccessUrl");
    }

    /**
     * Returns the custom domain api endpoint url.
     *
     * @returns {string}
     */
    public static getCustomDomainAPIEndpointUrl(): string {

        return Cypress.env("customDomainAPIEndpointUrl");
    }

    /**
     * Returns the custom domain tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
    public static getCustomDomainTenant(): string {

        return Cypress.env("customDomainTenantName");
    }

     /**
     * Returns the non default  tenant's name.
     * ex: "test.com"
     *
     * @return {string}
     */
    public static getNonDefaultTenantName(): string {

        return Cypress.env("nonDefaultTenantName");
    }

    /**
     * Returns the event receiver's email.
     *
     * @return {string}
     */
    public static getEventReceiverEmail(): string {

      return Cypress.env("eventReceiver");
    }
    
    /**
    * Returns the username of the temporary admin user dedicated for B2B org.
    * @return Temp admin username {string}
    */
    public static getB2BTempAdminUsername(): string {

        return this.getGroupedUserName(Cypress.env("b2bTempAdminUserName"));
    }

    /**
     * This method returns the base URL and the static path of the Asgardeo Try-it app
     * @return {string} Asgardeo Try-it app base URL 
     */
    public static getAsgardeoTruItAppBaseURL(): string {
        return Cypress.env("tryItAppBaseURL");
    }

    /**
     * Returns the OAuth 2.0 credentials needed to access the Invited Admins mailbox.
     * ex: { clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; refreshToken: "<REFRESH_TOKEN>" }
     *
     * @return { clientID: string; clientSecret: string; refreshToken: string }
     */
    public static getGmailClientOAuth2Credentials(): {
        clientID: string; clientSecret: string; refreshToken: string;
    } {

        return {
            clientID: Cypress.env("gmailClientID"),
            clientSecret: Cypress.env("gmailClientSecret"),
            refreshToken: Cypress.env("gmailRefreshToken")
        };
    }

    /**
     * Returns the OAuth 2.0 credentials needed to access the Choreo Service API 1.
     * ex: { url: "<URL>"; clientID: "<CLIENT_ID>"; clientSecret: "CLIENT_SECRET>"; 
     * tokenEndpoint: "TOKEN_ENDPOINT>"; scope: "<SCOPE>" }
     *
     * @return { url: string; clientID: string; clientSecret: string; tokenEndpoint: string; scope: string }
     */
    public static getHttpGethttpPostTestExternalServiceCredentials(): {
        url:string; clientID: string; clientSecret: string; tokenEndpoint: string; scope: string;
    } {

        return {
            clientID: Cypress.env("httpGethttpPostTestExternalServiceClientId"),
            clientSecret: Cypress.env("httpGethttpPostTestExternalServiceClientSecret"),
            scope: Cypress.env("httpGethttpPostTestExternalServiceScopes"),
            tokenEndpoint: Cypress.env("httpGethttpPostTestExternalServiceTokenEndpoint"),
            url: Cypress.env("httpGethttpPostTestExternalServiceAPI")
        };
    }

    /**
     * Returns Email Provider configurations.
     * ex: { displayName: "<displayName>", fromAddress: "<fromAddress>" }
     *
     * @return {{
     *      displayName: string;
     *      fromAddress: string;
     *      password: string;
     *      replyToAddress: string;
     *      serverHost: string;
     *      serverPort: string;
     *      userName: string
     * }}
     */
    public static getEmailProviderConfiguration(): EmailProviderConfiguration {
        const emailProviderUserNamePrefix = Cypress.env("emailProviderUserName").split("@")[0];
        const emailProviderUserNameSuffix = Cypress.env("emailProviderUserName").split("@")[1];

        return {
            displayName: "Asgardeo - Test SMTP",
            fromAddress: emailProviderUserNamePrefix + "+from@" + emailProviderUserNameSuffix,
            password: Cypress.env("emailProviderPassword"),
            replyToAddress: emailProviderUserNamePrefix + "+replyTo@" + emailProviderUserNameSuffix,
            serverHost: Cypress.env("emailProviderHost"),
            serverPort: Cypress.env("emailProviderPort"),
            userName: Cypress.env("emailProviderUserName")
        };
    }

    /**
     * Returns the SMS provider configurations.
     * @returns {{
     *      apiKey: string;
     *      apiSecret: string;
     *      contentType: string;
     *      headers: string;
     *      httpMethod: string;
     *      payload: string;
     *      providerURL: string;
     *      sender: string;
     * }}
     */
    public static getSMSProviderConfiguration(): SMSProviderConfiguration {

        return {
            apiKey: "dummy_key",
            apiSecret: "dummy_secret",
            contentType: "JSON",
            headers: "{\"Authorization: Bearer dummy_token\"}",
            httpMethod: "POST",
            payload: "{\"message\": \"dummy_message\"}",
            providerURL: "https://sms-provider.com",
            sender: "+1234567890"
        };
    }

    /**
     * Returns the updated SMS provider configurations.
     * @returns {{
     *      apiKey: string;
     *      apiSecret: string;
     *      contentType: string;
     *      headers: string;
     *      httpMethod: string;
     *      payload: string;
     *      providerURL: string;
     *      sender: string;
     * }}
     */
    public static getSMSProviderUpdatedConfiguration(): SMSProviderConfiguration {

        return {
            apiKey: "dummy_key_updated",
            apiSecret: "dummy_secret_updated",
            contentType: "FORM",
            headers: "{\"Authorization: Bearer dummy_token_updated\"}",
            httpMethod: "PUT",
            payload: "{\"message\": {{body}}}",
            providerURL: "https://sms-provider-updated.com",
            sender: "+0987654321"
        };
    }

    /**
     * Returns the authz base url.
     * ex: https://api.authz-dv.cloudservices.wso2.com/
     *
     * @return {string}
     */
    public static getAuthzBaseUrl(): string {
        return Cypress.env("authzBaseUrl");
    }

    /**
     * Returns the region of the deployment.
     * 
     * @returns {string} The region of the deployment `us` or `eu`.
     */
    public static getRegion(): string {
        return Cypress.env("region");
    }

    /**
     * Returns alphanumeric username and password.
     */
    public static getAlphanumericUserCredentials(): { userName: string; password: string } {

        return {
            userName: Cypress.env("alphanumericUserName"),
            password: Cypress.env("alphanumericPassword")           
        };
    }

    /**
     * Internal function to return the tenant user with group name
    */
    static getGroupedUserName(userName: string): string {
        return userName.replace(/(\w+)@(\w+)/, "$1" + EnvironmentConfig.getGroupName() +"@$2");
    }

    /**
     * Internal function to return the tenant with group name
    */
    static getGroupedTenantName(tenantName: string): string {
        return tenantName + EnvironmentConfig.getGroupName();
    }

    /**
     * This function retrieves the group name from the Cypress environment variables.
     * @returns If `groupName` is not null, it will return the value of `groupName`. Otherwise, it will
     * return an empty string.
    */
    public static getGroupName(): string {

        const groupName = Cypress.env("groupName");

        if(groupName != null){

            return groupName;
        }
        else {

            return "";
        }
    }

    /**
     * This function returns whether the execution enviornment is production.
     */
    public static isProductionEnv(): boolean {
        return this.getServerOrigin() === "https://api.asgardeo.io/" || 
        this.getServerOrigin() === "https://api.eu.asgardeo.io/";
    }
    
    /**
     * This function returns whether the execution enviornment is stage.
     */
    public static isStageEnv(): boolean {
        return this.getServerOrigin() === "https://stage.api.asgardeo.io/" || 
        this.getServerOrigin() === "https://stage.api.eu.asgardeo.io/";
    }

    /**
     * This function returns whether the execution environment is Dev.
     * @returns True if the execution environment is the Asgardeo Dev environment.
     */
    public static isDevEnv(): boolean {
        return this.getServerOrigin() === "https://dev.api.asgardeo.io/";
    }
    
    /**
    * The function `getABBTenant` returns the grouped tenant name based on the Cypress environment
    * variable "abbtenantName".
    * @returns The `getABBTenant` function is returning the result of calling the
    * `getGroupedTenantName` function with the value of the environment variable `abbtenantName`
    * retrieved using `Cypress.env("abbtenantName")`.
    */
     public static getABBTenant(): string {

        return this.getGroupedTenantName(Cypress.env("abbtenantName"));
    }
   
   /**
    * The function `getABBTenant1` returns the grouped tenant name for a specified ABB tenant.
    * @returns The `getABBTenant1` function is returning the result of calling the
    * `getGroupedTenantName` function with the value of the environment variable `abbtenantName1`
    * obtained using `Cypress.env("abbtenantName1")`.
    */
    public static getABBTenant1(): string {

        return this.getGroupedTenantName(Cypress.env("abbtenantName1"));
    }

    /**
     * The function `getABBTenantAdminCredentials` returns user credentials for an ABB tenant admin.
     * @returns The `getABBTenantAdminCredentials` function is returning an object with the following
     * properties:
     * - `password`: The value of the environment variable `abbCustomerUserName` retrieved using
     * `Cypress.env("abbCustomerUserName")`.
     * - `userName`: The result of calling the `getGroupedUserName` function with the value of the
     * environment variable `abbCustomerUserPassword` as an argument.
     */
    public static getABBTenantAdminCredentials(): UserCredentials {

        return {
                password: Cypress.env("abbCustomerUserPassword"),
                userName: this.getGroupedUserName(Cypress.env("abbCustomerUserName"))
        };
    }

   /**
    * The function `getABBTenantAdmin1Credentials` returns user credentials for an ABB tenant admin.
    * @returns The `getABBTenantAdmin1Credentials` function is returning an object with the following
    * properties:
    * - `password`: The value of the environment variable `abbCustomerUser1Name` retrieved using
    * `Cypress.env()`.
    * - `userName`: The result of calling the `getGroupedUserName` function with the value of the
    * environment variable `abbCustomerUser1Password` retrieved using `Cypress
    */
    public static getABBTenantAdmin1Credentials(): UserCredentials {

        return {
                password: Cypress.env("abbCustomerUser1Password"),
                userName: this.getGroupedUserName(Cypress.env("abbCustomerUser1Name"))
        };
    } 

    /**
    * The function `getABBTenant1Path` returns a string that includes the ABB tenant 1 value within a
    * specific format.
    * @returns The method `getABBTenant1Path()` returns a string that consists of "t/" followed by
    * the value returned by the method `EnvironmentConfig.getABBTenant1()` and then a trailing "/".
    */
    public static getABBTenant1Path(): string {

        return "t/" +  EnvironmentConfig.getABBTenant1() + "/";
    }
    
    /**
     * The function `getABBTenantPath` returns a string that includes the ABB tenant value within a
     * specific path.
     * @returns The `getABBTenantPath` method is returning a string that consists of "t/" followed by the
     * value returned by the `getABBTenant` method from the `EnvironmentConfig` class, and ending with a
     * forward slash "/".
     */
     public static getABBTenantPath(): string {

        return "t/" +  EnvironmentConfig.getABBTenant() + "/";
    }


}
