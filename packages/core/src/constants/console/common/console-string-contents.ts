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

 export class ConsoleStringContents  {

    /* Private constructor to avoid object instantiation from outside
    * the class.
    *
    * @hideconstructor
    */
   private constructor() { }
    
    //Common console warning/error/success messages
    public static readonly ALERT_UPDATE_SUCCESS_HEADER: string = "Update Successful"; 
    public static readonly ALERT_REVERT_SUCCESS_HEADER: string = "Revert successful";
    public static readonly INVALID_PASSWORD_CONFIG_ERROR_MESSAGE: string = "This value should be less than or equal to";
    public static readonly WARNING_SUCCESS_BRANDING_MESSAGE: string = "Updating branding preferences";


  }
