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
 * Class containing application list page constants.
 */
export class ApplicationListPageConstants {

    /**
     * This method is used to filter specific application name via UI advanced search.
     */
    public static readonly FILTER_APPLICATION_BY_ADVANCED_SEARCH =
        {
            "expectedAppCount": 1,
            "filterAttribute": "Name",
            "filterCondition": "Equals"
        }
    
    public static readonly APPLICATION_PAGE_HEADER_TITLE: string = "Applications";

    public static readonly FRAGMENT_APPLICATION_LIST_ITEM: string = "Shared app";

    public static readonly ENTERPRISE_APPLICATION_NAME: string = "WSO2_LOGIN_FOR_CONSOLE";
}
