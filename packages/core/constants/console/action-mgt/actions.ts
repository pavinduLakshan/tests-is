/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

class ActionsConstants {
    
    public static readonly PRE_ISSUE_ACCESS_TOKEN_API_PATH: string = "/preIssueAccessToken";
    public static readonly ACTIVATE_ACTION: string = "activate";
    public static readonly DEACTIVATE_ACTION: string = "deactivate";

    public static readonly ACTION_TYPE_PRE_ISSUE_ACCESS_TOKEN: string = "pre-issue-access-token";
    public static readonly ACTION_TYPE_PRE_UPDATE_PASSWORD: string = "pre-update-password";
    public static readonly ACTION_TYPE_PRE_UPDATE_PROFILE: string = "pre-update-profile";
    public static readonly ACTION_TYPE_PRE_REGISTRATION: string = "pre-registration";

    public static readonly AUTHENTICATION_TYPE_DISPLAY_NAME_BASIC: string = "Basic";
    public static readonly AUTHENTICATION_TYPE_DISPLAY_NAME_API_KEY: string = "API Key";
    public static readonly AUTHENTICATION_TYPE_DISPLAY_NAME_BEARER: string = "Bearer";
    public static readonly AUTHENTICATION_TYPE_DISPLAY_NAME_NONE: string = "None";

    public static readonly AUTHENTICATION_TYPE_BASIC: string = "BASIC";
    public static readonly AUTHENTICATION_TYPE_API_KEY: string = "API_KEY";
    public static readonly AUTHENTICATION_TYPE_BEARER: string = "BEARER";
    public static readonly AUTHENTICATION_TYPE_NONE: string = "NONE";

    public static readonly STATUS_ACTIVE : string = "Active";
    public static readonly STATUS_INACTIVE : string = "Inactive";

    public static readonly AUTHENTICATION_PROPERTY_USERNAME: string = "username";
    public static readonly AUTHENTICATION_PROPERTY_PASSWORD: string = "password";
    public static readonly AUTHENTICATION_PROPERTY_HEADER: string = "header";
    public static readonly AUTHENTICATION_PROPERTY_VALUE: string = "value";
    public static readonly AUTHENTICATION_PROPERTY_ACCESS_TOKEN: string = "accessToken";
}

export default ActionsConstants;
