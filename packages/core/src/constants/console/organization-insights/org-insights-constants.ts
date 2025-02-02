/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

export class OrgInsightsConstants {
    public static readonly ORG_INSIGHTS_PAGE_TITLE: string = "Insights";

    public static readonly ORG_INSIGHTS_PAGE_SUBTITLE: string = 
        "Understand user behavior better with usage statistics.";

    public static getInsightsEndpoint(serverOrigin: string, tenantPath: string): string {
        return serverOrigin + tenantPath 
        + "api/asgardeo/insights/v1/user";
    }
    public static readonly ORG_INSIGHTS_PRIMARY_USERSTRORE_FILTER_EXPRESSION: string = "userstoreDomain+eq+PRIMARY";

    public static readonly ORG_INSIGHTS_PRIMARY_USERSTRORE_FILTER_EXPR_FOR_DISPLAY: string = "User Store = PRIMARY";
}
