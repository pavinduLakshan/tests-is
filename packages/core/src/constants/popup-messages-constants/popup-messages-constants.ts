/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * This class is containing asgardeo popup messages constants.
 */
export class PopupMessagesConstants {

    // Error messages based constants.
    public static readonly LOGIN_FAILED_ERROR_MSG = "Login failed! Please check your username and password " +
        "and try again.";

    public static readonly INVALID_EMAIL_OTP_ERROR_MSG = "Authentication failed. The code you " +
        "entered is invalid or expired. Please retry.";

    public static readonly ACCOUNT_LOCKED_EMAIL_OTP_ERROR_MSG = 
        "Your user account is locked. Please try again after 1 minutes.";

    public static readonly INVALID_TOTP_ERROR_MSG = "Authentication failed! Please retry";

    public static readonly ACCOUNT_LOCKED_TOTP_ERROR_MSG = "Your account is temporarily locked due to excessive " +
        "failed sign-in attempts. Please check your email for more details.";

    public static readonly APPLICATION_PROTOCOL_UPDATE_SUCCESSFULLY =
        "Successfully updated the inbound protocol configurations.";

    public static readonly UNAUTHORIZED_MSG = "Unauthorized";
    
    public static readonly UNAUTHORIZED_MSG_DESCRIPTION = "You need to be over 18 years to login to this application.";

    public static readonly UNAUTHORIZED_MSG_DESC_GROUP_BASED = "You are not authorized to login to this application." ;
}
