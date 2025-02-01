/**
 * Copyright 2021 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { ConsoleHeaderDomConstants as CommonConsoleHeaderDomConstants } from "@wso2/identity-cypress-test-base/ui";

/**
 * Class containing Asgardeo Console Header DOM constants.
 * @remarks Extended from `ConsoleHeaderDomConstants` from `@wso2/identity-cypress-test-base/ui`.
 * @see {@link https://github.com/wso2/identity-cypress-test-base/blob/main/src/ui/constants/console/console-header-dom-constants.ts}
 */
export class ConsoleHeaderDomConstants extends CommonConsoleHeaderDomConstants {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() {
        super();
    }

    public static readonly GETTING_STARTED_SWITCH_DATA_ATTR: string = "app-header-quick-start-switch";

    public static readonly USER_DROPDOWN_DATA_ATTR: string = "[data-componentid=\"app-header-user-avatar\"]";

    public static readonly UPGRADE_BUTTON_DATA_ATTR: string = "[data-componentid=\"upgrade-button-link\"]";

    public static readonly UPGRADE_BUTTON_HREF_ATTR: string = "[data-componentid=\"upgrade-button-link\"]";

    public static readonly BILLING_PORTAL_LINK_DATA_ATTR: string = "[data-testid=\"app-switch-billingPortal\"]";
}
