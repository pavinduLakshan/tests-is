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
 * Myaccount applications configurations interface.
 */
 export interface MyaccountConfigInterface {
    /**
     * App Name.
     * @example "Myaccount"
     */
    appName: string;
    /**
     * App base path.
     * @example "/myaccount"
     */
    endPoint: string;
    /**
     * Asgardeo myaccount routes path.
     */
    routes: MyaccountRoutesInterface
}

/**
 * Common interface which is common for routes configs.
 */
export interface MyaccountCommonRoutesInterface {
    /**
     * Default landing route of a section.
     * @example "/overview"
     */
     default: string;
}

/**
 * Myaccount application's routes config.
 */
export interface MyaccountRoutesInterface extends MyaccountCommonRoutesInterface {
   
    /**
     * Personal-info section routes.
     */
     personal_info: string;
    /**
     * Security section routes.
     */
     security: string;
}
