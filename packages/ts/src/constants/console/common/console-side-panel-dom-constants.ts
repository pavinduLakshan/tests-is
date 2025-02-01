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

import {
    ConsoleSidePanelDomConstants as CommonConsoleSidePanelDomConstants
} from "@wso2/identity-cypress-test-base/ui";

/**
 * Class containing Asgardeo Console Side Panel DOM constants.
 * @remarks Extended from `ConsoleSidePanelDomConstants` from `@wso2/identity-cypress-test-base/ui`.
 * @see {@link https://github.com/wso2/identity-cypress-test-base/blob/main/src/ui/constants/console/console-side-panel-dom-constants.ts}
 */
export class ConsoleSidePanelDomConstants extends CommonConsoleSidePanelDomConstants {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() {
        super();
    }

    // Extended Develop Features
    public static readonly CONNECTIONS_MENU_ITEM_DATA_ATTR: string = CommonConsoleSidePanelDomConstants
        .IDP_MENU_ITEM_DATA_ATTR;

    // Manage Features
    public static readonly ACCOUNT_RECOVERY_MENU_ITEM_DATA_ATTR: string = "side-panel-items-account-recovery";
    public static readonly SELF_REGISTRATION_MENU_ITEM_DATA_ATTR: string = "side-panel-items-user-onboarding";
    public static readonly ACCOUNT_SECURITY_MENU_ITEM_DATA_ATTR: string = "side-panel-items-account-security";
}
