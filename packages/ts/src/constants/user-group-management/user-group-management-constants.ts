/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * This class is containing asgardeo user groups constants.
 */
export class UserGroupConstants {

    public static readonly GROUPS_PAGE_HEADER_TXT = "Groups";
    public static readonly GROUP_NAME = "manager";
    public static readonly GROUPS_SIMPLE = "groups";
    public static readonly GROUP_EDIT_PAGE_USERS_TAB_TITLE = "Users in the Group";
    public static readonly GROUP_USER_TAB_TITLE = "Users";
    public static readonly GROUP_DELETE_FILTER = "displayName+eq+DEFAULT/";
    public static readonly GROUP_FILTER = { "filter": { "filter": "displayName+eq+" + this.GROUP_NAME } };
}
