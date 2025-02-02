/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

export class InvitedAdminPayLoad {

    public static readonly INVITED_ADMIN_FILTER_SUPER_TENANT = {
        attributes: { attributes: "id,userName" },
        count: { count: "1" },
        domain: { domain: "ASGARDEO-USER" },
        filter: {},
        startIndex: { startIndex: "1" }
    }

    public static readonly INVITED_ADMIN_FILTER_TENANT = {
        attributes: { attributes: "id,userName" },
        count: { count: "1" },
        startIndex: { startIndex: "1" }
    }
}
