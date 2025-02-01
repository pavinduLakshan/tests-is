/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { EnvironmentConfig } from "../../configs";

/**
 * This class is used to manage Email Template Subject.
 */
export class EmailSubjectTypeConstants {

    private constructor() { }

    public static readonly USER_ONBOARD_INVITATION: string =
        "Here is your new account in the organization " + EnvironmentConfig.getTenant();
    public static readonly SUB_ORG_USER_ONBOARD_INVITATION: string = "Here is your new account in the organization ";
    public static readonly ADMIN_USER_FORGET_PASSWORD: string = "Reset your Asgardeo password";
    public static readonly USER_FORGET_PASSWORD: string = "Reset your password";
    public static readonly ADMIN_USER_REGISTRATION: string = "Complete your registration";
    public static readonly ADMIN_USER_REGISTRATION_RESEND: string = "Complete your registration (Resend)";
    public static readonly ADMIN_ACCOUNT_UNLOCK: string = "Your Asgardeo account is unlocked";
    public static readonly USER_TRY_FORGET_PASSWORD_MYACCOUNT: string = "Reset your password";
    public static readonly USER_RESET_PASSWORD_SUCCESSFULLY: string = "Password reset successful";
    public static readonly ADMIN_REQUEST_SET_USER_PASSWORD: string = "Password reset is required";
    public static readonly INVITED_ADMIN_USER_INVITE: string = "You are invited to join the "
        + EnvironmentConfig.getTenant() + " team on Asgardeo";
    public static readonly INVITED_ADMIN_USER_INVITE_TENANT1: string = "You are invited to join the "
        + EnvironmentConfig.getTenant1() + " team on Asgardeo";
    public static readonly ADMIN_ACCOUNT_LOCK: string = "Your Asgardeo account is locked";
    public static readonly EMAIL_OTP_FOR_LOGIN: string = "Here is your email OTP for login";
    public static readonly USER_ACCOUNT_LOCK: string = "Your account is locked";
    public static readonly MAGIC_LINK_EMAIL_SUBJECT: string = "Sign in to";
    public static readonly ACCOUNT_CONFIRMATION: string = "Confirm your account";
    public static readonly USER_ADD_EVENT_DETECTION: string = "A user self registered";
    public static readonly SMS_OTP_FOR_LOGIN: string = "Here is your SMS OTP for login";
    public static readonly CONFIRM_YOUR_EMAIL: string = "Confirm your email";
    public static readonly SUBSCRIPTION_UPGRADE_REQ_CUSTOMER_ACKNOWLEDGEMENT: string = 
    "Acknowledgement of Subscription Upgrade Request - Asgardeo";
    public static readonly SUBSCRIPTION_UPGRADE_SALES_TEAM_NOTIFICATION: string = "[NEW LEAD - ASGARDEO]["+ 
    EnvironmentConfig.getTenant() +"] Customer Subscription Upgrade"
}
