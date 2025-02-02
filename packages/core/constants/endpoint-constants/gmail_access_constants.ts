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
 * This class is containing Asgardeo Authentication Endpoints constants.
 */
 export class GmailAccessConstant {

    // Authentication Based Endpoints.
    public static readonly ACCESS_TOKEN_URL : string = "https://accounts.google.com/o/oauth2/token";

    //User Endpoint
    public static readonly USER_ENDPOINT_URL : string = "https://gmail.googleapis.com/gmail/v1/users/";

    //Messages Endpoint
    public static readonly MESSAGE_ENDPOINT : string = "/messages/";
    public static readonly MESSAGE_QUERY_ENDPOINT : string = "/messages?q=";
    public static readonly MESSAGE_RESULT_FILTER: string = "&maxResults=1";

}
