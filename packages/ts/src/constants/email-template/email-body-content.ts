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


export class EmailBodyContentConstants {

    private constructor() { }

    public static readonly ADMIN_TRY_FORGET_PASSWORD: string = "reset the password of your account in Asgardeo: "
        + "Reset your password";
    public static readonly ADMIN1_ACCOUNT_LOCKED: string = "Your account {{adminUsername}}" 
        + " in Asgardeo is temporarily locked due to an excessive number of failed sign-in attempts.";
    public static readonly INVITED_ADMIN_USER_INVITE: string = "You are invited to join the {{tenantName}} team";
    public static readonly USER_ONBOARD_INVITATION: string = "Here is your new account in the organization {{tenantName}}";
    public static readonly USER_FORGET_PASSWORD: string = "reset the password of "
        + "your account in the organization {{tenantName}}: Reset your password";
    public static readonly USER_RESET_PASSWORD_SUCCESSFULLY: string = "The password of your account {{username}"
        + " in the organization {{tenantName}} is successfully reset.";
    public static readonly USER_ACCOUNT_LOCK: string = "Your account is temporarily locked due to " + 
    "excessive failed sign-in attempts. Please check your email for more details.";
}
