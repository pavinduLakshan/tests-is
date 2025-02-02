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
 * This class is containing application create page constants.
 */
export class ApplicationCreatePageConstants {

  // Application resource-tabs constants.
  public static readonly DUPLICATE_APP_NAME_MESSAGE: string
    = "There is already an application with this name. Please enter a different name.";

  public static readonly DUPLICATE_ISSUER_MESSAGE: string = "The issuer already exists.";

  public static readonly APPLICATION_MANDATORY_MESSAGE: string = "Application name is required.";

  public static readonly OIDC_CREATE_WIDGET_NAME: string = "OpenID Connect";

  public static readonly NEW_APPLICATION_BUTTON_LABEL = "New Application";

  public static readonly WEB_APPLICATION_HEADER = "Web Application";

  public static readonly SINGLE_PAGE_APPLICATION_HEADER = "Single-Page Application";

  public static readonly STANDARD_BASED_APPLICATION = "Standard-Based Application";

  public static readonly INVALID_URL_MESSAGE = 
    "Please enter a valid URI. Valid formats include HTTP, HTTPS, or private-use URI scheme.";
}
