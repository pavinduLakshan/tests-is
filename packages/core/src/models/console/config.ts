/**
 * Copyright (c) 2021, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * Console Applications configurations interface.
 */
export interface ConsoleConfigInterface {
    /**
     * App Name.
     * @example "Console"
     */
    appName: string;
    /**
     * App base path.
     * @example "/console"
     */
    endPoint: string;
    /**
     * 
     */
    routes: ConsoleRoutesInterface
}

/**
 * Common interface which is common for routes configs.
 */
export interface CommonRoutesInterface {
    /**
     * Default landing route of a section.
     * @example "/develop/applications"
     */
     default: string;
}

/**
 * Console Application's routes config.
 */
export interface ConsoleRoutesInterface extends CommonRoutesInterface {
    /**
     * Develop section routes.
     */
    develop: ConsoleDevelopRoutesInterface;
    /**
     * Manage section routes.
     */
    manage: ConsoleManageRoutesInterface;
}

/**
 * Console Application Develop section's routes config.
 */
export interface ConsoleDevelopRoutesInterface extends CommonRoutesInterface {
    /**
     * API Resources feature route.
     * @example "/develop/api-resources"
     */
    apiResources: string;
    /**
     * Applications feature route.
     * @example "/develop/applications"
     */
    applications: string;
    /**
     * Applications feature route.
     * @example "/develop/connections"
     */
    connections: string;
    /**
     * Identity Verification Providers feature route.
     * @example "/develop/identity-verification-providers"
     */
    identityVerificationProviders: string;
}

/**
 * Console Application Manage section's routes config.
 */
export interface ConsoleManageRoutesInterface extends CommonRoutesInterface {
    /**
     * Users feature route.
     * @example "/manage/users"
     */
    users: string;
    /**
     * Groups feature route.
     * @example "/manage/groups"
     */
     groups: string;
     /**
      * Roles feature route.
      * @example "/manage/roles"
      */
     roles: string;
    /**
     * Account Recovery feature route.
     * @example "/manage/connector/<RECOVERY_CONNECTOR_ID>"
     */
     accountRecovery: string;
    /**
     * Self Registration feature route.
     * @example "/manage/connector/<SELF_REG_CONNECTOR_ID>"
     */
     selfRegistration: string;
    /**
     * Self Service Portal feature route.
     * @example "/manage/self-service-portal"
     */
     selfServicePortal: string;
    /**
     * Account Security feature route.
     * @example "/manage/connector/<ACCOUNT_SECURITY_CONNECTOR_ID>"
     */
     accountSecurity: string;
    /**
     * Attributes feature route.
     * @example "/manage/attributes-and-mappings"
     */
     attributes: string;
    /**
     * Remote Userstores edit feature route. 
     * @example "/app/edit-remote-user-store"
     */ 
    editRemoteUserStore: string;
    /**
     * Attributes feature route.
     * @example "/manage/oidc-scopes"
     */
     oidcScopes: string;
     /**
     * Users feature route.
     * @example "/manage/administrators"
     */
      administrator: string;
       /**
     * LogoutEndPoint route.
     * @example ""authenticationendpoint/login.do"
     */
      logoutEndPoint:string;
     /**
     * user_stores feature route.
     * @example "/manage/user-stores"
     */
      userStores: string;
    /**
     * insights feature route.
     * @example "/manage/insights"
     */
    insights: string;
}
