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

import { AsgardeoEndPointsConstants } from "../constants/endpoint-constants/asgardeo-endpoints-constants";
import { ConsoleConfigInterface, MyaccountConfigInterface } from "../models";

/**
 * Class containing getters to retrieve Environment Configurations.
 */
export class ProductConfig {

    static readonly appConsole = "console";
    static readonly authEndPoint = "authenticationendpoint/";
    static readonly scimEndPoint = "scim2/";
    static readonly meEndPoint = "Me";
    static readonly asgardeoUserEndPoint = "ASGARDEO-USER/";
    static readonly carbonSuperEndPoint = "@carbon.super";
    static readonly userEndPoint = "Users/";
    static readonly rolesEndPoint = "v2/Roles/";
    static readonly logInUrlQuery = "login.do";
    static readonly bulkEndPoint = "Bulk/";
    static readonly applicationEndPoint = "applications/";
    static readonly applicationsSettingsEndPoint = "applications-settings/";
    static readonly searchEndPoint = ".search/";
    static readonly idpEndPoint = "identity-providers";
    static readonly idpTemplateEndPoint = "/templates";
    public static readonly manageEndPoint = "";
    public static readonly userStore = "DEFAULT";
    public static readonly authorizeEndPoint = "oauth2/authorize";
    public static readonly pushedAuthorizeEndPoint = "oauth2/par";
    public static readonly tokenEndPoint = "oauth2/token";
    public static readonly introspectionEndPoint = "oauth2/introspect";
    public static readonly jwksEndPoint = "oauth2/jwks";
    static readonly invitedAdminEndpoint =  "api/asgardeo-guest/v1/users";
    static readonly invitedAdminInviteEndpoint = "api/asgardeo-guest/v1/users/invite";
    static readonly logInError = "login.fail";
    static readonly myaccountAuthOptionUpdateEndpoint = "api/identity/config-mgt/v1.0/resource/myaccount";
    static readonly businessUserLoginEndpoint = "api/asgardeo-enterprise-login/v2/business-user-login";
    static readonly userInforEndpoint = "oauth2/userinfo?schema=openid";
    static readonly organizationEndpoint = "/api/organizations/";
    static readonly billingCleanUp = "/clean-up";
    static readonly emailProviderEndpoint = "api/server/v1/notification-senders/email/EmailPublisher";
    static readonly accountRecoveryEndPoint = "accountrecoveryendpoint/verify.do";
    static readonly expiredPasswordIdentificationEndpoint = "api/server/v1/password-expired-users";
    static readonly dcrEndpoint = "api/identity/oauth2/dcr/v1.1/register";
    static readonly dcrServerConfigurationsApi = "api/server/v1/configs/dcr";

    static readonly devServerOrigin = "https://dev.api.asgardeo.io/";
    static readonly  stageServerOrigin = "https://stage.api.asgardeo.io/";
    static readonly  prodServerOrigin = "https://api.asgardeo.io/";
    static readonly websiteURL = "https://wso2.com/asgardeo/";
    static readonly tenantEndpoint = "t/";
    static readonly passwordRecoveryEnableEndpoint = "QWNjb3VudCBNYW5hZ2VtZW50/connectors/YWNjb3VudC1yZWNvdmVyeQ";
    static readonly multiAttributeLoginEnableEndpoint = 
        "QWNjb3VudCBNYW5hZ2VtZW50/connectors/bXVsdGlhdHRyaWJ1dGUubG9naW4uaGFuZGxlcg";
    static readonly userClaimUpdateEndpoint = "T3RoZXIgU2V0dGluZ3M/connectors/dXNlci1jbGFpbS11cGRhdGU";
    static  readonly associatedTenantsApiEndpoint: string = "api/asgardeo/v1/tenant/me";

    // MFA based login.
    static readonly totpEndPoint = "totp.do";
    static readonly backupCodeEndPoint = "backup_code.do";
    static readonly totpEnrollmentEndpoint = "totp_enroll.do";
    static readonly backupCodeErrorEndpoint = "backup_code_error.do";

    // MyAccount 2FA configs.
    static readonly myAccount2FAConfigEndpoint = "myaccount-2FA-config";
    static readonly myAccountTOTPConfigEndpoint = "myaccount-TOTP-config";
    static readonly validationRules = "api/server/v1/validation-rules";

    //Provision Call
    static readonly provisionEndpoint = "provision";

    // Application Managemnt.
    static readonly asgardeoConsoleAppName = "Console";
    static readonly asgardeoMyaccountAppName = "My Account";

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    /**
     * Returns the application myaccount configurations
     * @return { appName: string; endPoint: string }
     */
    public static getAppMyaccountConfig(environment?: string): MyaccountConfigInterface {
        let appBaseName: string = "app/";

        if(environment === "local")
        {
            appBaseName = "";
        }

        return {
            appName: "myaccount",
            endPoint: "myaccount/",
            routes: {
                default: `${appBaseName}overview`,
                personal_info: `${appBaseName}personal-info`,
                security: `${appBaseName}security`
            }
        };
    }

    /**
     * Returns the application console configurations
     * @return { appName: string; endPoint: string }
     */
    public static getAppConsoleConfig(appBaseName: string): ConsoleConfigInterface {

        return {
            appName: "console",
            endPoint: "console/",
            routes: {
                default: `${appBaseName}getting-started`,
                develop: {
                    apiResources: `${appBaseName}api-resources`,
                    applications: `${appBaseName}applications`,
                    connections: `${appBaseName}connections`,
                    default: `${appBaseName}getting-started`,
                    identityVerificationProviders: `${appBaseName}identity-verification-providers`
                },
                manage: {
                    accountRecovery: `${appBaseName}connector/${
                        AsgardeoEndPointsConstants.CONNECTOR_ID_ACCOUNT_MANAGEMENT}`,
                    accountSecurity: `${appBaseName}connector/${
                        AsgardeoEndPointsConstants.CONNECTOR_ID_ACCOUNT_SECURITY}`,
                    administrator: `${appBaseName}administrators`,
                    attributes: `${appBaseName}attributes-and-mappings`,
                    default: `${appBaseName}getting-started`,
                    editRemoteUserStore: `${appBaseName}edit-remote-user-store`,
                    groups: `${appBaseName}groups`,
                    insights: `${appBaseName}insights`,
                    logoutEndPoint: "authenticationendpoint/login.do",
                    oidcScopes: `${appBaseName}oidc-scopes`,
                    roles: `${appBaseName}roles`,
                    selfRegistration: `${appBaseName}connector/${
                        AsgardeoEndPointsConstants.CONNECTOR_ID_USER_ONBOARDING
                    }/${AsgardeoEndPointsConstants.CONNECTOR_ID_SELF_SIGN_UP}`,
                    selfServicePortal: `${appBaseName}edit-my-account`,
                    userStores: `${appBaseName}user-stores`,
                    users: `${appBaseName}users`
                }
            }
        };
    }

    /**
      * Returns the grant types
      * @return { oauthCustomGrantAsgardeo: string }
      * @return { basicSuperAdminAuthGrantType: string }
      */
    public static getGrantType(): {
        basicSuperAdminAuthGrantType: string,
        clientCredentialsGrantType: string,
        code_grant: string,
        implicit_grant: string,
        oauthCustomGrantAsgardeo: string,
        passwordGrantType: string,
        refreshTokenGrantType: string,
        organizationSwitchGrantType: string
    } {

        return {
            basicSuperAdminAuthGrantType: "basicAuth",
            clientCredentialsGrantType: "client_credentials",
            code_grant: "authorization_code",
            implicit_grant: "implicit",
            oauthCustomGrantAsgardeo: "asg_api",
            passwordGrantType: "password",
            refreshTokenGrantType: "refresh_token",
            organizationSwitchGrantType: "organization_switch"
        };
    }

    /**
     * Returns the identity-governance endpoint.
     * ex: api/server/v1/identity-governance/
     *
     * @return {identityGovernanceEndPoint: string}
     */
    public static getGovernanceEndpoint(): {
        identityGovernanceEndPoint: string } {

        return {
            identityGovernanceEndPoint: "api/server/v1/identity-governance/"
        };
    }

     /**
     * It returns the URL of the authorize endpoint.
     * 
     * @param {string} serverOrigin - base URL.
     * @param {string} tenantDomain - The domain of the tenant.
     * @returns {string}.
     */
      public static getAsgardeoAuthorizeEndPoint(serverOrigin: string, tenantDomain : string): string {

        return serverOrigin + tenantDomain + this.authorizeEndPoint;
    }

    /**
     * It returns the URL of the token endpoint for the given tenant domain.
     * 
     * @param {string} serverOrigin - base URL.
     * @param {string} tenantDomain - The domain of the tenant.
     * 
     * @returns {string}
     */
    public static getAsgardeoTokenEndPoint(serverOrigin: string, tenantDomain : string): string {

        return serverOrigin + tenantDomain + this.tokenEndPoint;
    }

    /**
     * It returns the URL of the introspection endpoint for the given tenant domain.
     * 
     * @param {string} serverOrigin - base URL.
     * @param {string} tenantDomain - The domain of the tenant.
     * 
     * @returns introspection endpoint URL
     */
    public static getAsgardeoIntrospectionEndPoint(serverOrigin: string, tenantDomain : string): string {

        return serverOrigin + tenantDomain + this.introspectionEndPoint;
    }

    /**
     * It returns the URL of the JWKS endpoint for the tenant domain passed in
     * 
     * @param {string} serverOrigin - base URL.
     * @param {string} tenantDomain - The domain of the tenant.
     * 
     * @returns {string} the JWKS endpoint URL for the provided tenant.
     */
    public static getAsgardeoJWKSEndPoint(serverOrigin: string, tenantDomain : string): string {

        return serverOrigin + tenantDomain + this.jwksEndPoint;
    }

    public static getInvitedAdminEndpoint(): string {
        return this.invitedAdminEndpoint;
    }

    public static getInvitedAdminInviteEndpoint(): string {
        return this.invitedAdminInviteEndpoint;
    }

    /**
     * It returns the URL of Asgardeo website.
     * @returns {string}
     */
    public static getAsgardeoWebsiteURL(): string {

        return this.websiteURL;
    }

    /**
     * It returns the URL of the expired password identification endpoint url for the given tenant domain.
     * 
     * @param {string} serverOrigin - base URL.
     * @param {string} tenantDomain - The domain of the tenant.
     * @param {string} expiredAfter - The date that password will be expired.
     * @param {string} excludeAfter - The date after which should be excluded.
     * 
     * @returns {string} the expired password identification endpoint URL
     */
    public static getExpiredPasswordIdentificationEndPoint(serverOrigin: string, tenantDomain : string, expiredAfter : string,
                    excludeAfter : string): string {

        let url = serverOrigin + (tenantDomain) + this.expiredPasswordIdentificationEndpoint
                    + `?expiredAfter=${expiredAfter}`;
        if (excludeAfter != null) {
            url += `&excludeAfter=${excludeAfter}`;
        }

        return url;
    }
}
