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

/**
 * This class is used to maintain cypress browser based constants.
 */
 export class BrowserBasedConstants {

    public static readonly CYPRESS_CHROMIUM_BROWSER_FAMILY: string= "chromium";

    public static readonly CYPRESS_ELECTRON_BROWSER_FAMILY: string= "electron";

    public static readonly BROWSER_PERMISSION_PROTOCOL: string= "remote:debugger:protocol";

    public static readonly BROWSER_PERMISSION_COMMAND: string= "Browser.grantPermissions";

    public static readonly CLIPBOARD_READ_WRITE_BROWSER_PERMISSION: string= "clipboardReadWrite";
    
    public static readonly CLIPBOARD_SANITIZED_WRITE_BROWSER_PERMISSION: string= "clipboardSanitizedWrite";
}
