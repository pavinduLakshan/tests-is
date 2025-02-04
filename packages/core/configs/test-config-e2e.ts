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

/**
 * Class containing getters to retrieve Environment Configurations.
 */
export class TestE2EConfig {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    // retrieve json file of SCIM user creation payload in fixtures.
    public static readonly scimUserCreationPayload: string = "user-onboard/scim-user-payload";
    // Retrieve json file of SCIM user update with custom scim attribute payload in fixtures.
    public static readonly scimUserUpdateWithCustomScimAttributePayload: string =
        "user-onboard/scim-patch-user-with-custom-attribute-payload";
    public static readonly privilegedBusinessUserCreationPayload: string = 
        "user-onboard/privileged-business-user-payload";

    // Claim uniqueness check user.
    public static readonly checkClaimUniquenessUserPayload: string =
        "user-onboard/e2e_check_claim_unique_user_data.json";
        
    public static readonly spAppCreationPayload: string =
        "application-management/single-page-app-create-payload.json";
    public static readonly oidcWebAppCreationPayload: string =
        "application-management-input-data/e2e-oidc-web-app-payload.json";
    public static readonly choreoAuthScriptTestData: string = "choreo_authentication_script.txt";
    public static readonly oidcWebAppCreationTestData: string =
        "application-management-input-data/e2e_oidc_app_test_data.json";
    public static readonly totpEnrollmentEnableScriptData: string = 
        "totp_enrollment_during_login_flow_enable_script.txt";
    public static readonly totpEnrollmentDisableScriptData: string = 
        "totp_enrollment_during_login_flow_disable_script.txt";
    public static readonly oidcEnterpriseIdpTestData: string = 
    "connection-management-input-data/e2e_enterprise_idp_oidc_data.json";
    public static readonly samlEnterpriseIdpTestData: string = 
    "connection-management-input-data/e2e_enterprise_idp_saml_data.json";
    public static readonly defaultSignOnMethodPatchPayload: string = 
    "application-management-input-data/e2e_sign_on_method_default_config_payload.json";
    public static readonly signOnMethodPatchPayload: string = 
    "application-management-input-data/e2e_sign_on_method_config_payload.json";
    public static readonly eventConfigurationAPIBody: string = 
    "event-publishing/e2e-event-publishing-configuration-enable-user-add-API-body.json";
    public static readonly promptForUserInputScriptTestData: string = "prompt_for_user_input_script.txt";
    public static readonly promptForInternalWaitScriptTestData: string = 
        "authenticationScripts/prompt_for_internal_wait_script.txt";

    public static readonly totpEnrollmentConfigurationDuringLoginPayload: string = 
        "configuration-management/totp-enrollment-configuration-during-login.json";
    public static readonly changeBotDetectionForSelfRegPayload: string =
    "application-management-input-data/e2e_bot_detection_self_registration_data.json";
    public static readonly changeBotDetectionForSSOLoginPayload: string =
        "application-management-input-data/e2e_bot_detection_sso_login_data.json";
    public static readonly samlWebAppCreationPayload: string =
    "application-management-input-data/e2e_saml_web_app_payload.json";
    public static readonly commonAuthLoginPaylaod: string =
        "application-management-input-data/e2e_commonauth_login_payload.json";
    public static readonly sessionBasedAuthScriptTestData: string = 
        "session_based_authentication_script.txt";

    public static readonly scimGroupCreationPayload: string = "group-management/scim-group-payload";

    // Retrieve data for group deletion.
    public static readonly groupDeletion: string="group-management/group_deletion_input_data.json";

    // retrieve json file of B2B organization creation payload in fixtures.
    public static readonly b2bOrganizationCreationTestData: string =
        "organization-management-input-data/e2e_b2b_organization_test_data.json";
    public static readonly b2bAdminUserTestData: string =
        "organization-management-input-data/e2e_b2b_admin_user_data.json";
    public static readonly b2bNonAdminUserTestData: string =
        "organization-management-input-data/e2e_b2b_non_admin_user_data.json";
    public static readonly b2bOidcWebAppCreationPayload: string =
        "organization-management-input-data/e2e_b2b_oidc_web_app_payload.json";
    public static readonly b2bOidcMgtAppCreationPayload: string =
        "organization-management-input-data/e2e_b2b_oidc_mgt_app_payload.json";
    public static readonly b2bOrganizationOidcMgtAppCreationPayload: string =
        "organization-management-input-data/e2e_b2b_org_oidc_mgt_app_payload.json";
    public static readonly b2bSecondOrganizationTestData: string =
        "organization-management-input-data/e2e_b2b_second_organization_test_data.json";
    public static readonly b2bAPIResourceCreationPayload: string =
        "organization-management-input-data/e2e_b2b_api_resource_payload.json";
    public static readonly b2bApplicationRolesTestData: string =
        "organization-management-input-data/e2e_b2b_application_roles.json";
    public static readonly b2bOidcStandardBasedAppPayload: string =
        "organization-management-input-data/e2e_b2b_oidc_standard_based_app_payload.json";
    
    // Retrieve Patch payload for adding parent organization group to sub organization.
    public static readonly b2bAddParentOrgGroupToSubOrgAppRolePayload: string =
        "organization-management-input-data/e2e_b2b_add_parent_org_group_to_sub_org_app_role_payload.json";

    //SCIM Patch payloads
    public static readonly replaceMobileNumberSCIMPayload: string =
        "user-attribute-management/replace-mobile-number-scim-payload.json";

    // Retrieve json file for mobile app
    public static readonly testDataMobileApp: string = "application-management-input-data/e2e_mobile_app_test_data";

    // Retrieve json file for google workspace app
    public static readonly testDataGoogleWorkspaceApp: string = "application-management-input-data/e2e_google_workspace_app_test_data";
     
    // Retrieve json file for salesforce app
    public static readonly testDataSalesforceApp: string = "application-management-input-data/e2e_salesforce_app_test_data";

    // Retrieve json file for microsoft 365 app
    public static readonly testDataMicrosoftApp: string = "application-management-input-data/e2e_microsoft_365_app_test_data";

    // Retrieve json file for Zoom app.
    public static readonly testDataZoomApp: string = "application-management-input-data/e2e_zoom_app_test_data";

    // Retrieve json file for Slac app.
    public static readonly testDataSlackApp: string = "application-management-input-data/e2e_slack_app_test_data";

    // Invite new admin user payload path.
    public static readonly inviteNewAdminPayloadPath: string =
        "user-onboard/e2e-invite-admin-create-api-payload.json";
    public static readonly inviteAdminUIPayload: string =
        "user-onboard/invited-admin-ui-payload.json";

    // Sample app based configurations.
    public static readonly sampleAppRootDirectory: string = "cypress/utils";
    public static readonly tomcatDownloadDirectory: string = "cypress/utils/tomcat";
    public static readonly javaSampleAppExtractedDirectory: string =
        "cypress/utils/tomcat/apache-tomcat-9.0.45/webapps";
    public static readonly nodeSampleAppConfigFileLocation: string = "/src/config.json";
    public static readonly b2bSampleAppConfigFileLocation: string = "/config.json";
    public static readonly jsSampleAppConfigFileLocation: string = "cypress/fixtures/javascript-sample-config.txt";
    public static readonly jsSampleAppConfigFile: string = "/sample-application/javascript-sample-configs.sh";
    public static readonly javaOIDCSampleAppConfigFileLocation: string =
    "/oidc-sample-app/WEB-INF/classes/oidc-sample-app.properties";
    public static readonly javaSAMLSampleAppConfigFileLocation: string =
    "/sample-app/WEB-INF/classes/sample-app.properties";
    public static readonly tomcatServerLocation: string =
    TestE2EConfig.tomcatDownloadDirectory + "/apache-tomcat-9.0.45/bin";
    public static readonly oidcJavaSampleAppAccessUrl: string = "/oidc-sample-app/index.html";
    public static readonly samlJavaSampleAppAccessUrl: string = "/sample-app/index.html";
    public static readonly mobileApplicationRedirectUrl: string = "https://myapp.io/login";
    public static readonly mobileApplicationInvalidRedirectUrl: string = "myapp.io";
    public static readonly additionalReactAppDownloadDirectory: string = 
    "/sample-application/single-page-application/react_second/asgardeo-react-app";
    
    public static readonly samlMetaDataFile: string = "cypress/fixtures/meta_data.xml";

    // node sample app sub directories
    public static reactAppDownloadDirectory: string =
        "/sample-application/single-page-application/react/asgardeo-react-app";
    public static reactJsAppDownloadDirectory: string =
        "/sample-application/single-page-application/react-js/asgardeo-react-js-app";
    public static readonly jsAppDownloadDirectory: string =
        "/sample-application/single-page-application/javascript/asgardeo-html-js-app";
    public static readonly b2bAppDownloadDirectory: string =
        "/sample-application/b2b-sample-application/guardio-insurance-sample-application";
    public static readonly b2bSampleAppDownloadDirectory: string =
        "/sample-application/b2b-sample-application/b2b-sample";

    // java sample app sub directories    
    public static readonly oidcJavaSampleAppDownloadDirectory: string =
        "/sample-application/oidc-web-application";
    public static readonly samlJavaSampleAppDownloadDirectory: string =
        "/sample-application/saml-web-application";
    public static readonly javaSampleAppTomcatLocation: string =
        "cypress/utils/tomcat/apache-tomcat-9.0.45/webapps";
    public static readonly oidcJavaSampleAppDirectory: string = "/oidc-sample-app";
    public static readonly samlJavaSampleAppDirectory: string = "/sample-app";
    public static readonly tomcatDirectory: string = "/apache-tomcat-9.0.45";

     // User store data.
     public static readonly onPremUserAgent: string = "agent-v1.1.0.zip";
     public static readonly onPremUserAgentName: string = "agent-v1.1.0";
     public static readonly accessTokenFilePath = "cypress/utils/onprem-userstore/accessToken";
     public static readonly dockerLdapScriptPath = "cypress/utils/onprem-userstore/configure-docker-readonly-ldap.sh";
     public static readonly setupAndRunAgentPath = "cypress/utils/onprem-userstore/setup-and-run-agent.sh";
     public static readonly onpremUserStorePath = "cypress/utils/onprem-userstore";
     public static readonly renamedOnpremUserStorePath = "cypress/utils/onprem-userstore/wso2agent";
     public static readonly userstorePath = "cypress/utils/onprem-userstore/";
     public static readonly remoteUserData = "userstore-management-remote-user-data/userstore-remote-user-data.json";
     public static readonly userstoreAgentExtractDirectory = "cypress/utils/onprem-userstore/agent-v1.1.11";
     public static readonly createSecondoryUserstoreData: string = 
     "userstore-management-remote-user-data/create-userstore-with-api-data.json";
     public static readonly createReadWriteSecondoryUserstoreData: string =
     "userstore-management-remote-user-data/create-readwrite-userstore-with-api-data.json";

    // Input data for third-party integrations
    public static readonly enterpriseUserPayload: string = "third-party-integrations/enterprise_login.json";
    public static readonly callChoreoAdaptiveAuthPayload: string = 
        "third-party-integrations/callChoreo_for_adaptive_authentication.txt"; 

    // Payload for updating 2FA options for My Account portal.
    public static readonly myaccount2FAOptionConfigUpdatePayload: string 
        = "configuration-management/myaccount-2fa-option-config-update-payload";
    public static readonly myaccountSelfServiceStatus: string 
        = "configuration-management/myaccount-enable-config";
    public static readonly applicationAccessibleStatus : string
        = "application-management-input-data/e2e_application_accessible_data"

    //Cypress Download Directory
    public static readonly downloadDirectory: string = "cypress/downloads/";

    // Retrieve json file for oidc sample application
    public static readonly oidcDataCongigfFile: string = "home.jsp";
    public static readonly oidcPropertiesCongigfFile: string = "/WEB-INF/classes/oidc-sample-app.properties";
    // Payload for password validation.
    public static readonly testDataConfigFromUI: string = "passwordValidation/e2e-password-validation-UI-body.json";
    public static readonly testDataValidationAPIBody: string = 
        "passwordValidation/e2e-password-validation-API-body.json";
    public static readonly testDataValidationDefaultAPIBody: string = 
        "passwordValidation/e2e-password-validation-default-API-body.json";
    public static readonly testusernameValidationDefaultAPIBody: string = 
        "usernameValidation/e2e-username-validation-default-API-body.json";
    public static readonly testUsersWithCustomUsername: string =
        "usernameValidation/e2e-users-with-custom-username.json"
    
    // Retrieve data for group creation for rule-based password expiry.
    public static readonly groupCreationForPasswordExpiry: string = 
        "passwordValidation/group_creation_input_data.json";

    public static readonly testDataPrivateKeyJWTValidationConfigurationAPIBody: string = 
        "privateKeyJWTValidation/e2e-privateKey-JWT-API-body.json";
    public static readonly testDataJWTApplicationCreationAPIBody: string = 
        "privateKeyJWTValidation/e2e-jwt_test_app_payload.json";
    public static readonly testDataJWTPrivateKey: string = 
        "privateKeyJWTValidation/e2e-jwt_private_key.pem";
    public static readonly testDataPubCert: string = 
        "JWTkeyPair/pubcert.pem";

    // Data for SMS templates
    public static readonly testDataSmsTemplates: string = "notificaiton-templates/sms-templates/sms-templates.json";

    // Payload for saml application settings.
    public static readonly enableAttributeProfileAPIBody: string = 
        "application-management-input-data/e2e_enable_attribute_profile_saml_API_body.json";

    // Retrieve data for group creation.
    public static readonly groupCreation: string="group-management/group_creation_input_data.json"    

    // Data related to billing portal.
    public static readonly testDataBillingPortalAccount: string = "billing/e2e-billing-account-UI-body.json";
    public static readonly testDataBillingPortalPayment: string = "billing/e2e-payment-data-UI-body.json";

    // Data related to trusted token issuer.
    public static readonly trustedTokenIssuerTemplate: string =  
        "connection-management-input-data/e2e_trusted_token_issuer_data.json";
    public static readonly tokenExchangepPayload: string = 
        "connections/e2e_token_exchange_data.json";
    
    /**
     * Returns the application configurations
     * @return { appNtestDataSinglePageAppame: string }
     */
    public static getAppConfig(): {
        testDataCustomApp: string,
        testDataCustomOIDCApp: string,
        testDataCustomOIDCStandardBasedApp: string,
        testDataOIDCStandardBasedApp: string,
        testDataSinglePageApp: string,
        testDataTraditionalSAMLApp: string,
        testDataTraditionalOIDCApp: string
    } {
        return {
            testDataCustomApp: "application-management-input-data/e2e_custom_app_payload.json",
            testDataCustomOIDCApp: "application-management-input-data/e2e_custom_oidc_web_app_API_body.json",
            testDataCustomOIDCStandardBasedApp: "application-management-input-data/e2e_custom_oidc_standard_based_app_API_body.json",
            testDataOIDCStandardBasedApp: "application-management-input-data/e2e_oidc_standard_based_app_API_body.json",
            testDataSinglePageApp: "application-management-input-data/e2e_single_app_ui_test_data.json",
            testDataTraditionalSAMLApp: "application-management-input-data/e2e_saml_web_app_test_data",
            testDataTraditionalOIDCApp: "application-management-input-data/e2e_oidc_app_test_data.json"
        };
    }

    /**
      * Returns Enterprise Identity Provider data
      * @return { testDataEnterpriseIdp: string }
      */
    public static getEnterpriseIdpConfig(): { testDataOidcEnterpriseIdp: string, testDataSamlEnterpriseIdp: string } {

        return {
            testDataOidcEnterpriseIdp: "connection-management-input-data/e2e_enterprise_idp_oidc_data.json",
            testDataSamlEnterpriseIdp: "connection-management-input-data/e2e_enterprise_idp_saml_data.json"
        };
    }

    /**
      * Returns Federated Identity Provider data
      * @return { testDataFederatedIdp: string }
      */
     public static getFederatedIdpConfig(): { testDataFederatedIdp: string, testDataSocialIdp: string } {

        return {
            testDataFederatedIdp: "connection-management-input-data/e2e_federated_idp_data.json",
            testDataSocialIdp: "connection-management-input-data/e2e_social_idp_data.json"
        };
    }

    /**
      * Returns MFA Provider data
      * @return string - MFA Provider data
      */
    public static getMFAProvidersConfig(): string {
        return "connection-management-input-data/e2e_mfa_providers_data.json";
    }

    /**
     * Returns Branding data
     * @return { testDataBranding: string }
     */
    public static getBrandingData(): {
        testDataBrandingAPIBody: string; 
        testDataBrandingConfigFromUI: string;
        testDataAppBrandingConfigFromUI: string;
        testDataBrandingCustomText: string;
        testDataBrandingCustomTextDefaults: string;
        testDataBrandingUnpublishAPIBody: string;
        testDataBrandingUpdateAPIBody: string;
        testDataBrandingRightAlignedLayoutAPIBody: string;
        testDataBrandingRightImageLayoutAPIBody:string;
        testDataBrandingCenteredLayoutAPIBody: string;
        testDataAppBrandingCenteredLayoutAPIBody: string;
        testDataCustomTextPreferenceAPIBody: string;
        testDataSubOrgBrandingPreferenceFromUI: string;
    } {

        return {
            testDataBrandingAPIBody: "branding/e2e-branding-preference-API-body.json",
            testDataBrandingConfigFromUI: "branding/e2e-branding-preference-update-config-from-UI.json",
            testDataAppBrandingConfigFromUI: "branding/e2e-app-branding-preference-update-config-from-UI.json",
            testDataBrandingCustomText: "branding/e2e-branding-preference-custom-text.json",
            testDataBrandingCustomTextDefaults: "branding/e2e-branding-preference-custom-text-defaults.json",
            testDataBrandingRightAlignedLayoutAPIBody: "branding/e2e-branding-preference-with-right-aligned-layout-API-body.json",
            testDataBrandingUnpublishAPIBody: "branding/e2e-branding-preference-unpublish-API-body.json",
            testDataBrandingUpdateAPIBody: "branding/e2e-branding-preference-update-API-body.json",
            testDataBrandingRightImageLayoutAPIBody:"branding/e2e-branding-preference-with-right-image-layout-API-body.json",
            testDataBrandingCenteredLayoutAPIBody: "branding/e2e-branding-preference-with-centered-layout-API-body.json",
            testDataAppBrandingCenteredLayoutAPIBody: "branding/e2e-app-branding-preference-with-centered-layout-API-body.json",
            testDataCustomTextPreferenceAPIBody: "branding/e2e-branding-preference-custom-text-API-body.json",
            testDataSubOrgBrandingPreferenceFromUI: "branding/e2e-branding-preference-update-from-sub-org-UI.json"
        };
    }

    /**
     * Returns the user configurations
     * @return { testDataUserProfile: string }
     */
    public static getUserConfig(): { testDataUserProfile: string } {

        return {
            testDataUserProfile: "user-onboard/e2e_user_optional_profile_data.json"
        };
    }

    /**
     * Returns the attributes related configurations
     * @return { testDataAttributes: string }
     */
    public static getAttributesConfig(): { testDataAttributesUI: string, testDataAttributesAPI: string } {

        return {
            testDataAttributesUI: "user-attribute-management/e2e-user-add-attributes-ui-payload.json",
            testDataAttributesAPI: "user-attribute-management/e2e-user-add-attributes-api-payload.json"
        };
    }

    /**
      * Returns Java sample application configuration data
      */
    public static getJavaSampleApplicationConfigData(): {
        sampleAccessUrl: string; samlResponseUrl: string
        tomcatZipLocation: string; tomcatServerScriptLocation: string
        sampleJavaAppFileName: string; tomcatWebappsFolderLocation: string
        sampleJavaAppExtractLocation: string; sampleJavaAppConfigFilePath: string
    } {

        return {
            sampleAccessUrl: "http://localhost:8080/sample-app/index.html",
            samlResponseUrl: "http://localhost:8080/sample-app/home.jsp",
            tomcatZipLocation: "cypress/utils/tomcat/apache-tomcat-9.0.45.zip",
            tomcatServerScriptLocation: "apache-tomcat-9.0.45/bin",
            sampleJavaAppFileName: "sample-app.war",
            tomcatWebappsFolderLocation: "apache-tomcat-9.0.45/webapps",
            sampleJavaAppExtractLocation: "/sample-app",
            sampleJavaAppConfigFilePath: "/sample-app/WEB-INF/classes/sample-app.properties"
        };
    }

    /**
     * Returns email templates.
     * @return { brandingPreferenceTemplate: string }
     */
    public static getEmailTemplates(): { brandingPreferenceTemplate : string } {

        return {
            brandingPreferenceTemplate: "branding/e2e-branding-preference-update-email-templates.json"
        };
    }

    /**
     * Returns the API resources templates
     * @returns { apiResourcesWithPermissions: string, apiResourcesWithoutPermissions: string }
     */
    public static getAPIResourcesTemplates(): 
        { apiResourcesWithPermissions: string, apiResourcesWithPermissionsAPI: string,
            apiResourcesWithoutPermissions: string,
        impersonationApiResource: string } {
            
        return {
            apiResourcesWithPermissions: "api-resources/e2e-api-resource-with-permissions.json",
            apiResourcesWithPermissionsAPI: "api-resources/e2e-api-resource-with-permissions-API-body.json",
            apiResourcesWithoutPermissions: "api-resources/e2e-api-resource-without-permissions.json",
            impersonationApiResource: "api-resources/e2e-impersonation-api-resource.json"
        };
    }

    /**
     * Returns the action configurations
     * @return { testActionData: string }
     */
    public static getActionConfig(): {
        testPreIssueAccessTokenActionAuthenticationUpdateData: string;
        testPreIssueAccessTokenActionEndpointUpdateData: string;
        testPreIssueAccessTokenActionData: string;
        testPreIssueAccessTokenActionUpdateData: string;
        testUriPreIssueAccessTokenAddCustomClaims: string;
        testUriPreIssueAccessTokenUpdateAudience: string;
        testUriPreIssueAccessTokenUpdateOidcClaims: string;
        testUriPreIssueAccessTokenUpdateScopes: string;
        testUriPreIssueAccessTokenUpdateTokenExpiryTime: string;
    } {
        return {
            testPreIssueAccessTokenActionAuthenticationUpdateData: "action-mgt/e2e_pre_issue_access_token_action_authentication_update_body.json",
            testPreIssueAccessTokenActionEndpointUpdateData: "action-mgt/e2e_pre_issue_access_token_action_endpoint_update_body.json",
            testPreIssueAccessTokenActionData: "action-mgt/e2e_pre_issue_access_token_action_body.json",
            testPreIssueAccessTokenActionUpdateData: "action-mgt/e2e_pre_issue_access_token_action_update_body.json",
            testUriPreIssueAccessTokenAddCustomClaims: "https://d83e807a-3e9b-40d8-8f00-828b095f98f9-prod.e1" +
                "-us-east-azure.choreoapis.dev/extensions/execute-action/v1.0/preIssueAccessTokenAddCustomClaims",
            testUriPreIssueAccessTokenUpdateAudience: "https://d83e807a-3e9b-40d8-8f00-828b095f98f9-prod.e1" +
                "-us-east-azure.choreoapis.dev/extensions/execute-action/v1.0/preIssueAccessTokenUpdateAudience",
            testUriPreIssueAccessTokenUpdateOidcClaims: "https://d83e807a-3e9b-40d8-8f00-828b095f98f9-prod.e1" +
                "-us-east-azure.choreoapis.dev/extensions/execute-action/v1.0/preIssueAccessTokenUpdateOidcClaims",
            testUriPreIssueAccessTokenUpdateScopes: "https://d83e807a-3e9b-40d8-8f00-828b095f98f9-prod.e1" +
                "-us-east-azure.choreoapis.dev/extensions/execute-action/v1.0/preIssueAccessTokenUpdateScopes",
            testUriPreIssueAccessTokenUpdateTokenExpiryTime: "https://d83e807a-3e9b-40d8-8f00-828b095f98f9-prod.e1" +
                "-us-east-azure.choreoapis.dev/extensions/execute-action/v1.0/preIssueAccessTokenUpdateTokenExpiryTime"
        };
    }

    /**
     * Returns the IdVP configurations.
     */
    public static getIdVPConfig(): {
        testOnfidoCreateConfigFilePath: string;
        testOnfidoUpdateConfigFilePath: string;
    } {
        return {
            testOnfidoCreateConfigFilePath: "idvp-mgt/Onfido/create-data.json",
            testOnfidoUpdateConfigFilePath: "idvp-mgt/Onfido/update-data.json"
        }
    }

    // Alphanumeric username config.
    public static readonly enableAlphanumericFeature: string = 
    "configuration-management/alphanumeric-feature-enable";
    public static readonly disableAlphanumericFeature: string = 
        "configuration-management/alphanumeric-feature-disable";

    // Application sign in method configuration.
    public static readonly signInMethodPayload2FA: string =
        "application-management-input-data/e2e-2fa-sign-in-method-payload";
    public static readonly setAdaptiveScript: string =
        "application-management-input-data/e2e_set_adaptive_script";
    public static readonly singInMethodTOTPandEmailOTPPayload:string =  
        "application-management-input-data/e2e_application_signon_method_totp_emailotp_enable_data";
    public static readonly singInMethodHttpGetAdaptiveScriptPayload:string =  
        "application-management-input-data/e2e_application_httpget_adaptive_script";
    public static readonly singInMethodHttpPostAdaptiveScriptPayload:string =  
        "application-management-input-data/e2e_application_httppost_adaptive_script";

    public static readonly userValidationInIDFEnableScriptData: string = 
    "identifier_first_user_validation_authentication_script.txt";

    public static readonly groupBasedAccess: string = "authenticationScripts/group_based_access.txt";
    public static readonly lastUsedAuthenticator: string = "authenticationScripts/last_used_authenticator.txt";

    public static readonly bulkUserImportTestData: string = "bulk-user-import/e2e_bulk_user_import_validation.json";
    
    // Bulk user import csv file.
    public static readonly bulkUserImportCSVFile: string = "bulk-user-import/users.csv"; 
    public static readonly bulkUserImportCSVFileWithMissingHeaders: string =
        "bulk-user-import/users-missing-header.csv";
    public static readonly bulkUserImportCSVFileWithInvalidHeaders: string =
        "bulk-user-import/users-invalid-header.csv";
    public static readonly bulkUserImportCSVFileWithRestrictedHeaders: string =
        "bulk-user-import/users-restricted-header.csv";
    
    // Parent user invitation json files.
    public static readonly parentUserWithEmail: string = "parent-user-invitation/parent-user-with-email.json";
    public static readonly parentUserWithoutEmail: string = "parent-user-invitation/parent-user-without-email.json";
    public static readonly parentSecondUserWithEmail: string = 
        "parent-user-invitation/parent-second-user-with-email.json";

    // Organization domain discovery data.
    public static readonly userWithOrganizationDomain: string = 
        "organization-domain-discovery/e2e_b2b_domain_discovery_user_with_org_domain.json";
    public static readonly userWithoutOrganizationDomain: string = 
        "organization-domain-discovery/e2e_b2b_domain_discovery_user_without_org_domain.json";

    // API resource templates.
    public static readonly apiGroupResourceWithPermissions: string = 
        "api-resources/e2e-api-resource-group-based-auth.json";
}
