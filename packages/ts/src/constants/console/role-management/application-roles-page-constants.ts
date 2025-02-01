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
 * Class containing application list page constants.
 */
export class ApplicationRolesPageConstants {
    
    public static readonly APPLICATION_ROLES_PAGE_HEADER_TITLE: string = "Application Roles";
    public static readonly APPLICATION_ROLES_EDIT_PAGE_GROUPS_TAB_TITLE = "Groups";
    public static readonly APPLICATION_ROLES_EDIT_PAGE_USERS_TAB_TITLE = "Users";
    public static readonly APPLICATION_ROLES_EDIT_PAGE_CROSS_USERS_TAB_TITLE = "Invited User Groups";
    public static readonly APPLICATION_ROLES_APP_FILTER_NAME_EQ = "name eq ";
    public static readonly APPLICATION_ROLES_SCIM2_USERS_ORG_API_RESOURCE_FILER = 
        "filter=name co SCIM2 Users API and type eq ORGANIZATION";
    public static readonly APPLICATION_ROLES_SCIM2_GROUPS_API_RESOURCE_FILER = 
        "filter=name co SCIM2 Groups API and type eq ORGANIZATION";
    public static readonly ROLES_PERMISSION_TAB_HEADING = "Permissions";
}
