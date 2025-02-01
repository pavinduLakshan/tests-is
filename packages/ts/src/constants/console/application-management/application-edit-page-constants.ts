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
 * This class is containing application edit page constants.
 */
export class ApplicationEditPageConstants {

  // Application resource-tabs constants.
  public static readonly QUICK_START_TAB: string = "Quick Start";
  public static readonly GENERAL_TAB: string = "General";
  public static readonly PROTOCOL_TAB: string = "Protocol";
  public static readonly USER_ATTRIBUTES_TAB: string = "User Attributes";
  public static readonly SIGN_IN_METHOD_TAB: string = "Login Flow";
  public static readonly API_AUTHORIZATION_TAB: string = "API Authorization";
  public static readonly ROLES_TAB: string = "Roles";
  public static readonly ADVANCED_TAB: string = "Advanced";
  public static readonly INFO_TAB: string = "Info";
  public static readonly SETTINGS: string = "Settings";
  public static readonly SHARED_ACCESS_TAB: string = "Shared Access";
  public static readonly REGEX_SHARE_APPLICATION_ENDPOINT = /\/share$/;
  public static readonly LABEL_SHARE_APPLICATION_WITH_ALL_SUB_ORGS: string 
    = "Share with all organizations";
  public static readonly USER_ATTRIBUTES_UPDATE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Successfully updated the attribute settings.";
  public static readonly PROTOCOL_UPDATE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Successfully updated the inbound protocol configurations.";
  public static readonly SHARE_APPLICATION_UPDATE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Application shared with the organization(s) successfully";
  public static readonly SECRET_DELETE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Successfully deleted the secret.";
  public static readonly SECRET_CREATE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Successfully created the secret.";
  public static readonly UNSHARE_APPLICATION_UPDATE_SUCCESS_ALERT_DESCRIPTION: string 
    = "Application sharing stopped with all the organizations successfully";

  // Application sign-on method tab constants.
  public static readonly DEFAULT_AUTHENTICATION_SEQUENCE: string = "DEFAULT";
  public static readonly ALERT_WARNING_HEADER_CAN_NOT_ADD_AUTHENTICATION_STEP: string = "Cannot add to this step";

  // Application resource tab titles.
  public static readonly SIGN_IN_METHOD_TAB_TITLE: string = "Customize Login Flow";

  // Application scope related contants.
  public static readonly OPENID_SCOPE: string = "openid";
  public static readonly PROFILE_SCOPE: string = "profile";
  public static readonly RANDOM_SCOPE: string = "randomscope";

  // API Authorization policies
  public static readonly RBAC_POLICY: string = "Role Based Access Control (RBAC)";
  public static readonly NO_POLICY: string = "No Authorization Policy";

  // API Authorization scopes
  public static readonly SELECT_NONE_SCOPES: string = "Select None";

  // API Authorization success messages
  public static readonly API_AUTHORIZED_SUCCESS_BODY: string = "API resource authorized";
  public static readonly API_AUTHOIRZED_UPDATED_SUCCESS_BODY: string = "API resource updated";
  public static readonly API_UNAUTHORIZED_SUCCESS_BODY = "API resource unsubcribed";
  public static readonly APPLICATION_ROLE_CREATION_SUCCESS_BODY = "Create successful";
  public static readonly APPLICATION_ROLE_UPDATE_SUCCESS_BODY = "Update successful";
  public static readonly APPLICATION_ROLE_DELETION_SUCCESS_BODY = "Delete successful";

  // LoginFlow AI constants.
  public static readonly LOGINFLOW_AI_ERROR_ALERT_BODY: string = "Provided login flow is not valid.";

  // Trusted app constants.
  public static readonly ANDROID_PACKAGE_NAME: string = "com.wso2.sample.mobile";
  public static readonly ANDROID_THUMBPRINT: string = 
  "AA:1B:B9:95:FB:F2:4B:AA:96:08:5E:BF:78:D2:F4:10:BC:C1:8E:83:FF:2F:66:7A:04:DA:2A:E7:0A:48:1A:B4";
  public static readonly APPLE_APP_ID: string = "APPLETEAMID.com.wso2.sample";
}
