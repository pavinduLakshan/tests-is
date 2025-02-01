/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/**
 * This class is used to manage Governance Connector API based constants.
 */
export class GovernanceConnectorApiPayloadConstants {

    public static readonly ENABLE_PASSWORD_EXPIRY_KEY: string = "passwordExpiry.enablePasswordExpiry";
    public static readonly ENABLE_PASSWORD_EXPIRY_VALUE: string = "false";

    public static readonly PASSWORD_EXPIRY_IN_DAYS_KEY: string = "passwordExpiry.passwordExpiryInDays";
    public static readonly PASSWORD_EXPIRY_IN_DAYS_VALUE: string = "30";

    public static readonly PASSWORD_EXPIRY_SKIP_IF_NO_APPLICABLE_RULES_KEY: string =
        "passwordExpiry.skipIfNoApplicableRules";
    public static readonly PASSWORD_EXPIRY_SKIP_IF_NO_APPLICABLE_RULES_VALUE: string = "false";

    public static readonly PASSWORD_EXPIRY_RULE_KEY_PREFIX: string = "passwordExpiry.rule";
    public static readonly PASSWORD_EXPIRY_RULE_VALUE: string = "";
}
