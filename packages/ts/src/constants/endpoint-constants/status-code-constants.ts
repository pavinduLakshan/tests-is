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
export class StatusCodeConstants {
   
   // Successful responses.
   public static readonly OK: number = 200;
   public static readonly CREATED: number = 201;
   public static readonly ACCEPTED: number = 202;
   public static readonly NO_CONTENT: number = 204;

   // Redirection messages
   public static readonly FOUND: number = 302;
   public static readonly NOT_MODIFIED: number = 304;

   // Client error responses
   public static readonly BAD_REQUEST: number = 400;
   public static readonly UNAUTHORIZED: number = 401;
   public static readonly FORBIDDEN: number = 403;
   public static readonly NOT_FOUND: number = 404;
   public static readonly METHOD_NOT_ALLOWED: number = 405;
   public static readonly NOT_ACCEPTABLE: number = 406;
   public static readonly CONFLICT: number = 409;
   public static readonly UNSUPPORTED_MEDIA_TYPE: number = 415;

   // Server error responses,
   public static readonly INTERNAL_SERVER_ERROR: number = 500;
   public static readonly NOT_IMPLEMENTED: number = 501;
   public static readonly BAD_GATEWAY: number = 502;
   public static readonly SERVICE_UNAVAILABLE: number = 503;
}
