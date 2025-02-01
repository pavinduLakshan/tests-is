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
 * This class is containing advance search constants.
 */
export class AdvanceSearchConstants {

    public static readonly ADVANCE_SEARCH_HEADER: string = "Advanced search";

    // Advance search bar input query constants.
    public static readonly QUERY_NAME_EQ: string = "name eq ";
    public static readonly QUERY_NAME_SW: string = "name sw ";
    public static readonly QUERY_NAME_EW: string = "name ew ";
    public static readonly QUERY_NAME_CO: string = "name co ";

    public static readonly QUERY_META_ATTRIBUTE_EQ: string = "attributes.{key} eq ";
    public static readonly QUERY_META_ATTRIBUTE_SW: string = "attributes.{key} sw ";
    public static readonly QUERY_META_ATTRIBUTE_EW: string = "attributes.{key} ew ";
    public static readonly QUERY_META_ATTRIBUTE_CO: string = "attributes.{key} co ";

    public static readonly QUERY_NAME_AND_META_ATTRIBUTE: string = "attributes.{key} eq {attributeValue} " +
        "and name eq ";
    
    // Filter types
    public static readonly FILTER_TYPE_EQUALS: string = "Equals";
    public static readonly FILTER_TYPE_STARTS_WITH: string = "Starts with";
    public static readonly FILTER_TYPE_ENDS_WITH: string = "Ends with";
    public static readonly FILTER_TYPE_CONTAINS: string = "Contain";

    // Attribute types
    public static readonly ATTRIBUTE_TYPE_NAME: string = "Name";
    public static readonly ATTRIBUTE_TYPE_META_ATTRIBUTES: string = "Meta Attributes";

    // Meta attributes
    public static readonly META_ATTRIBUTE_EMPLOYEES: string = "employees";
    public static readonly META_ATTRIBUTE_COUNTRY: string = "country";

    //Placeholders
    public static readonly PLACEHOLDER_KEY: string = "{key}";
    public static readonly PLACEHOLDER_ATTRIBUTE_VALUE: string = "{attributeValue}";
}
