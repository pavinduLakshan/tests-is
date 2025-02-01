/**
 * Copyright (c) 2021, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * Class containing Invited Admin Registration Page constants.
 */
export class InvitedAdminRegisterPageConstants {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    public static readonly DUPLICATE_ERROR_MESSAGE = "A user already exists with this username.";
    public static readonly INVALID_PASSWORD_ERROR_MESSAGE = "The password should satisfy the below constraints.";
}
