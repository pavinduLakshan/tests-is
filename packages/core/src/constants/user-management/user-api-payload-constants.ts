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
 * This class is used to maintain API Filter Criteria Constants.
 */
export class UserAPIFilterCriteriaConstants {

    public static USER_FILTER_CRITERIA: string = "userName+sw+";
    public static USER_FILTER_BY_EMAIL_CRITERIA: string = "emails+sw+";
}

/**
 * This class is used to maintain User API based payload constants.
 */
 export class UserAPIPayloadConstants extends UserAPIFilterCriteriaConstants {

    constructor() {
        super();
    }
    
    public static readonly FILTER_USER_BASED_ON_ID: any =
        {
            "attributes": { filter: "id" },
            "count": { count: "1" },
            "startIndex": { startIndex: "1" }
        }
}
