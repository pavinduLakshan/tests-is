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
 * This class is containing connection edit page constants.
 */
export class ConnectionEditPageConstants {

  // Connection resource-tabs constants.
  public static readonly ADVANCED_TAB: string = "Advanced";
  public static readonly ATTRIBUTES_TAB: string = "Attributes";
  public static readonly CONNECTED_APPS_TAB: string = "Connected Apps";
  public static readonly GENERAL_TAB: string = "General";
  public static readonly JIT_PROVISIONING_TAB: string = "Just-in-Time Provisioning";
  public static readonly OUTBOUND_PROVISIONING_TAB: string = "Outbound Provisioning";
  public static readonly SETTINGS_TAB: string = "Settings";
  public static readonly GROUPS_TAB: string = "Groups";

  public static CONNECTED_APPS_PAGE_EMPTY_PLACEHOLDER_SUBHEADER: string = 
  "There are no applications connected to {idpName} at the moment.";
  public static CONNECTED_APPS_PAGE_EMPTY_SEARCH_PLACEHOLDER_SUBHEADER: string = 
  "We couldn't find any results for \"{search_query}\"";

}
