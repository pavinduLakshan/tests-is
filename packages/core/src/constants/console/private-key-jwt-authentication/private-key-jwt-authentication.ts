/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * Class containing private key jwt authentication section constants.
 */
export class PrivateKeyJWTAuthenticationConstants {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    public static readonly UNCHECKED_TOGGLE_BUTTON_CLASS: string = "ui toggle checkbox";
    public static readonly CHECKED_TOGGLE_CLASS: string = "ui checked toggle checkbox";
    public static readonly OPEN_ID: string = "openid";
    public static readonly JWT_BEARER: string = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
}
