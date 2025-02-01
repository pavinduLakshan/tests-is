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
 * This class is used to manage Application API based constants.
 */
export class ApplicationAPIPayloadConstants {

    public static readonly APPLICATION_FILTER_NAME_EQ: string = "filter=name+eq+";
    public static readonly APPLICATION_FILTER_NAME_SW: string = "filter=name+sw+";
    public static readonly APPLICATION_FILTER_NAME_CO: string = "?filter=name+co+";
    public static readonly APPLICATION_PAYLOAD_PROPERTY: string = "applications";
    public static readonly FILTER_APPLICATION_BASED_ON_ID =
        {
            "attributes": { filter: "id" },
            "count": { count: "1" },
            "startIndex": { startIndex: "1" }
        };
    public static readonly ANDROID_DISCOVERY_ENDPOINT: string = "/assetlinks.json";
    public static readonly APPLE_DISCOVERY_ENDPOINT: string = "/apple-app-site-association";
}
