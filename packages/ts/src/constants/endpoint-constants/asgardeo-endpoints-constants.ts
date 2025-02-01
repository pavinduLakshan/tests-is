/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/**
 * This class is containing Asgardeo Authentication Endpoints constants.
 */
 export class AsgardeoEndPointsConstants {

    // Authentication Based Endpoints.
    public static readonly OAuth2_CONSENT_APPROVAL_ENDPOINT: string = "authenticationendpoint/oauth2_consent.do";
    public static readonly SAML_CONSENT_APPROVAL_ENDPOINT: string = "authenticationendpoint/consent.do";
    public static readonly LOGIN_ENDPOINT: string = "authenticationendpoint/login.do";
    public static readonly RETRY_ENDPOINT: string = "authenticationendpoint/retry.do";
    public static readonly EMAIL_OTP_ENDPOINT: string = "authenticationendpoint/email_otp.do?";
    public static readonly SMS_OTP_ENDPOINT: string = "authenticationendpoint/smsOtp.jsp";
    public static readonly COMMON_AUTH_ENDPOINT: string = "commonauth";
    public static readonly TOTP_ENROLL_PAGE: string = "authenticationendpoint/totp_enroll.do";
    public static readonly ERROR_PAGE: string = "authenticationendpoint/error.do";
    public static readonly LOGIN_CONTEXT: string = "logincontext";
    public static readonly PROMPT_ENDPOINT: string = "authenticationendpoint/dynamic_prompt.do";
    public static readonly EMAIL_OTP_ERROR_ENDPOINT: string = "authenticationendpoint/email_otp_error.do"

    // Application Based Endpoints.
    public static readonly APPLICATION_SERVLET_ENDPOINT = "api/server/v1/applications";
    public static readonly SECRETS_API_ENDPOINT = "api/server/v1/secrets/ADAPTIVE_AUTH_CALL_CHOREO";
    public static readonly APPLICATION_OIDC_INBOUND_PROTOCOL = "inbound-protocols/oidc";
    public static readonly APPLICATION_SAML_INBOUND_PROTOCOL = "/inbound-protocols/saml";
    public static readonly APPLICATION_GENERAL_ENDPOINT = "**/api/server/v1/applications";
    public static readonly APPLICATIONS_ENDPOINT = "/applications";

    // Organization Based Endpoints.
    public static readonly ORGANIZATION_ENDPOINT = "api/server/v1/organizations";

    //Oauth2 token endpoints
    public static readonly OAUTH_ACCESS_ENDPOINT = "oauth2/token";

    //Idp Endpoints
    public static readonly IDP_LIST_ENDPOINT = "api/server/v1/identity-providers";

    // Forget password Endpoints
    public static readonly PASSWORD_RESET_ENDPOINT = "accountrecoveryendpoint/completepasswordreset.do";
    public static readonly PASSWORD_RECOVERY_ENDPOINT = "accountrecoveryendpoint/confirmrecovery.do";

    //Email Template Endpoints
    public static readonly EMAIL_TEMPLATE_ENDPOINT = "api/server/v1/email/template-types";

    //SMS Template Endpoints
    public static readonly SMS_TEMPLATE_ENDPOINT = "api/server/v1/notification/sms";

    // Email provider endpoints
    public static readonly EMAIL_PROVIDER_ENDPOINT: string = "api/server/v1/notification-senders/email/EmailPublisher"

    //Console page Endpoints
    public static readonly CONSOLE_OVERVIEW_PAGE = "overview";
    //Branding Preference Endpoints
    public static readonly BRANDING_PREFERENCE_ENDPOINT = "api/server/v1/branding-preference";
    //Custom Text Preference Endpoints
    public static readonly CUSTOM_TEXT_PREFERENCE_ENDPOINT = 
        AsgardeoEndPointsConstants.BRANDING_PREFERENCE_ENDPOINT + "/text";
    //Common Custom Text Preference Endpoints
    public static readonly COMMON_CUSTOM_TEXT_PREFERENCE_ENDPOINT = 
        AsgardeoEndPointsConstants.CUSTOM_TEXT_PREFERENCE_ENDPOINT + "?screen=common";

    //Validation Management Endpoints
    public static readonly VALIDATION_MANAGEMENT_ENDPOINT = "api/server/v1/validation-rules";

    //Event configuration Endpoints
    public static readonly EVENT_CONFIGURATION_ENDPOINT = "api/event-configurations/v1/events";

    //Userstore Management Endpoints
    public static readonly ONPREM_USERSTORE_ENDPOINT = "api/server/v1/userstores/";
    public static readonly CREATE_USERSTORE_API_ENDPOINT = "api/server/v1/userstores";
    public static readonly USERSTORE_AGENT_INSTALLATION_TOKEN_ENDPOINT = "api/onprem-userstore/v1/token";

    // User Registration Based Endpoints.
    public static readonly SIGNUP_ENDPOINT: string = "signup";
    public static readonly REGISTER_ENDPOINT: string = "register";
    public static readonly ACCOUNT_REGISTER_ENDPOINT: string = "/account-register";

    //Connector end points
    public static readonly CONNECTOR_ENDPOINT: string = "connectors/";
    public static readonly GOVERNANCE_CONNECTOR_API_ENDPOINT: string = "api/server/v1/identity-governance";


    // Governance connector ID constant
    public static readonly CONNECTOR_ID_ACCOUNT_MANAGEMENT: string = "QWNjb3VudCBNYW5hZ2VtZW50";
    public static readonly CONNECTOR_ID_USER_ONBOARDING: string = "VXNlciBPbmJvYXJkaW5n";
    public static readonly CONNECTOR_ID_ACCOUNT_SECURITY: string = "TG9naW4gQXR0ZW1wdHMgU2VjdXJpdHk";
    public static readonly CONNECTOR_ID_SELF_SIGN_UP: string = "c2VsZi1zaWduLXVw";
    public static readonly CONNECTOR_ID_SSO_LOGIN_RECAPTCHA: string = "c3NvLmxvZ2luLnJlY2FwdGNoYQ";
    public static readonly CONNECTOR_ID_ACCOUNT_LOCK_HANDLER: string = "YWNjb3VudC5sb2NrLmhhbmRsZXI";
    public static readonly CONNECTOR_ID_ACCOUNT_RECOVERY: string = "YWNjb3VudC1yZWNvdmVyeQ";
    public static readonly CONNECTOR_ID_OTHER_SETTINGS: string = "T3RoZXIgU2V0dGluZ3M";
    public static readonly IDENTITY_GOVERNANCE_PASSWORD_POLICIES_ID: string = "UGFzc3dvcmQgUG9saWNpZXM";
    public static readonly CONNECTOR_ID_ANALYTIC_ENGIN: string = "QW5hbHl0aWNzIEVuZ2luZQ";
    public static readonly CONNECTOR_ID_CONSENT_MANAGEMENT: string = "Q29uc2VudCBNYW5hZ2VtZW50";
    public static readonly CONNECTOR_ID_LOGIN_POLICIES: string = "TG9naW4gUG9saWNpZXM";
    public static readonly CONNECTOR_ID_ACCOUNT_MANAGEMENT_POLICIES: string = "QWNjb3VudCBNYW5hZ2VtZW50IFBvbGljaWVz";
    public static readonly CONNECTOR_ID_PASSWORD_POLICIES: string = "cGFzc3dvcmRQb2xpY3k";
    public static readonly CONNECTOR_ID_PASSWORD_Expiry: string = "cGFzc3dvcmRFeHBpcnk";

    public static readonly TENANT_PATH = "t/";
    public static readonly ORGANIZATION_PATH = "o/";

    public static readonly SEPERATOR = "/";

    // Self-registration configuration endpoints.
    public static readonly SELF_REGISTRATION_ENDPOINT: string = "VXNlciBPbmJvYXJkaW5n/connectors/c2VsZi1zaWduLXVw";

    // Invited Admin user Endpoints.
    public static readonly INVITED_ADMIN_USER_ENDPOINT: string = "api/asgardeo-guest/v1/users/invite";

    // Claim and Attribute Endpoints
    public static readonly CLAIM_DIALECT_ENDPOINT: string = "api/server/v1/claim-dialects/";
    public static readonly CLAIMS_ENDPOINT: string = "/claims";
    public static readonly SCOPE_ENDPOINT: string = "api/server/v1/oidc/scopes";
    public static readonly LOCAL_CLAIMS_ENDPOINT: string = "local/claims";
    public static readonly DEFAULT_ATTRIBUTE_ENDPOINT: string = "**/scim2/Users?attributes=id&domain=DEFAULT"

    // Group based Endpoints.
    public static readonly GROUP_ENDPOINT: string = "/Groups";

    // Font endpoint constants
    public static readonly FONT_ENDPOINT: string = "**/fonts/montserrat/montserrat-v18-latin-600.woff2";

    // API security endpoint constants
    public static readonly API_RESOURCE_ENDPOINT: string = "api/server/v1/api-resources";
    public static readonly AUTHORIZED_APIS_ENDPOINT: string = "/authorized-apis";
    public static readonly ROLES_ENDPOINT: string = "/roles";
    public static readonly AUTHORIZED_API_APPLICATIONS_ENDPOINT: string = "/applications/";
    public static readonly GROUPS_ENDPOINT: string = "/groups/";
    public static readonly ROLE_MAPPING_ENDPOINT: string = "/role-mapping";
    public static readonly CROSS_ORG_GROUP_MAPPING_ENDPOINT: string = "/cross-org-group-mapping";

    // JWKS based endpoints
     public static readonly JWKS_ENDPOINT: string = "oauth2/jwks";
     
    public static readonly SCIM2_BULK_ENDPOINT: string = "**/scim2/Bulk";

    // Organization domain discovery based endpoints.
    public static readonly ORGANIZATION_DOMAIN_DISCOVERY_ENDPOINT: string 
        = "api/server/v1/organization-configs/discovery";
    public static readonly SCIM2_ROLES_SEARCH_ENDPOINT: string = "scim2/v2/Roles/.search";

    // My Account based end points
    public static readonly MY_ACCOUNT_OVERVIEW: string = "overview";

    // Parameters
    public static readonly USER_ACCOUNT_LOCK: string = "authFailureMsg=user.account.locked";
    public static readonly USER_ACCOUNT_LOCK_REASON_MAX_ATTEMPTS: string = "lockedReason=MAX_ATTEMPTS_EXCEEDED";

    // Action Management based endpoints.
    public static readonly ACTIONS_ENDPOINT: string = "api/server/v1/actions";

    // Identity Verification Providers related endpoints.
    public static readonly IDVP_ENDPOINT: string = "api/server/v1/idv-providers";
}
