/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from "./request";
// @ts-ignore
import makeRequestHook from "./makeRequestHook";

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult
> = (TRequestConfig["requestDataOptional"] extends true
  ? (
      requestData?: TRequestData,
      ...args: RequestFunctionRestArgs<typeof request>
    ) => TRequestResult
  : (
      requestData: TRequestData,
      ...args: RequestFunctionRestArgs<typeof request>
    ) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_0 = "http://127.0.0.1:50505/mock/0" as any;
const devUrl_0_0_0_0 = "" as any;
const prodUrl_0_0_0_0 = "" as any;
const dataKey_0_0_0_0 = undefined as any;

/**
 * 接口 注册账号 的 **请求类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
export interface PostAccountPhoneRequest {
  password: string;
  code: string;
}

/**
 * 接口 注册账号 的 **返回类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
export interface PostAccountPhoneResponse {
  uuid: string;
  phone: string;
}

/**
 * 接口 注册账号 的 **请求配置的类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
type PostAccountPhoneRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/account/phone",
    undefined,
    string,
    string,
    false
  >
>;

/**
 * 接口 注册账号 的 **请求配置**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
const postAccountPhoneRequestConfig: PostAccountPhoneRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: "/account/phone",
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: "postAccountPhone",
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 注册账号 的 **请求函数**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
export const postAccountPhone = /*#__PURE__*/ (
  requestData: PostAccountPhoneRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountPhoneResponse>(
    prepare(postAccountPhoneRequestConfig, requestData),
    ...args
  );
};

postAccountPhone.requestConfig = postAccountPhoneRequestConfig;

/**
 * 接口 注册账号 的 **React Hook**
 *
 * @分类 accounts
 * @请求头 `POST /account/phone`
 */
export const usePostAccountPhone = /*#__PURE__*/ makeRequestHook<
  PostAccountPhoneRequest,
  PostAccountPhoneRequestConfig,
  ReturnType<typeof postAccountPhone>
>(postAccountPhone);

/**
 * 接口 账号登陆 的 **请求类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
export interface PostAccountLoginRequest {
  account: string;
  password: string;
}

/**
 * 接口 账号登陆 的 **返回类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
export interface PostAccountLoginResponse {
  token: string;
  uuid: string;
  time: string;
}

/**
 * 接口 账号登陆 的 **请求配置的类型**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
type PostAccountLoginRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/account/login",
    undefined,
    string,
    string,
    false
  >
>;

/**
 * 接口 账号登陆 的 **请求配置**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
const postAccountLoginRequestConfig: PostAccountLoginRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: "/account/login",
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: "postAccountLogin",
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 账号登陆 的 **请求函数**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
export const postAccountLogin = /*#__PURE__*/ (
  requestData: PostAccountLoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginResponse>(
    prepare(postAccountLoginRequestConfig, requestData),
    ...args
  );
};

postAccountLogin.requestConfig = postAccountLoginRequestConfig;

/**
 * 接口 账号登陆 的 **React Hook**
 *
 * @分类 accounts
 * @请求头 `POST /account/login`
 */
export const usePostAccountLogin = /*#__PURE__*/ makeRequestHook<
  PostAccountLoginRequest,
  PostAccountLoginRequestConfig,
  ReturnType<typeof postAccountLogin>
>(postAccountLogin);

/**
 * 接口 获取账号验证码 的 **请求类型**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
export interface GetAccountCodePhoneRequest {}

/**
 * 接口 获取账号验证码 的 **返回类型**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
export interface GetAccountCodePhoneResponse {
  code: string;
  phone: string;
}

/**
 * 接口 获取账号验证码 的 **请求配置的类型**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
type GetAccountCodePhoneRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/account/code/phone",
    undefined,
    string,
    string,
    true
  >
>;

/**
 * 接口 获取账号验证码 的 **请求配置**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
const getAccountCodePhoneRequestConfig: GetAccountCodePhoneRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: "/account/code/phone",
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: "getAccountCodePhone",
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 获取账号验证码 的 **请求函数**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
export const getAccountCodePhone = /*#__PURE__*/ (
  requestData?: GetAccountCodePhoneRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountCodePhoneResponse>(
    prepare(getAccountCodePhoneRequestConfig, requestData),
    ...args
  );
};

getAccountCodePhone.requestConfig = getAccountCodePhoneRequestConfig;

/**
 * 接口 获取账号验证码 的 **React Hook**
 *
 * @分类 accounts
 * @请求头 `GET /account/code/phone`
 */
export const useGetAccountCodePhone = /*#__PURE__*/ makeRequestHook<
  GetAccountCodePhoneRequest,
  GetAccountCodePhoneRequestConfig,
  ReturnType<typeof getAccountCodePhone>
>(getAccountCodePhone);

/**
 * 接口 重制密码 的 **请求类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
export interface PutAccountResetRequest {
  phone: string;
  old_password?: string;
  new_password: string;
  code?: string;
}

/**
 * 接口 重制密码 的 **返回类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
export interface PutAccountResetResponse {
  phone: string;
  message: string;
}

/**
 * 接口 重制密码 的 **请求配置的类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
type PutAccountResetRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/account/reset",
    undefined,
    string,
    string,
    false
  >
>;

/**
 * 接口 重制密码 的 **请求配置**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
const putAccountResetRequestConfig: PutAccountResetRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: "/account/reset",
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: "putAccountReset",
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 重制密码 的 **请求函数**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
export const putAccountReset = /*#__PURE__*/ (
  requestData: PutAccountResetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutAccountResetResponse>(
    prepare(putAccountResetRequestConfig, requestData),
    ...args
  );
};

putAccountReset.requestConfig = putAccountResetRequestConfig;

/**
 * 接口 重制密码 的 **React Hook**
 *
 * @分类 accounts
 * @请求头 `PUT /account/reset`
 */
export const usePutAccountReset = /*#__PURE__*/ makeRequestHook<
  PutAccountResetRequest,
  PutAccountResetRequestConfig,
  ReturnType<typeof putAccountReset>
>(putAccountReset);

/**
 * 接口 更新账号信息 的 **请求类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
export interface PutAccountUpdateRequest {
  phone: string;
  code: string;
}

/**
 * 接口 更新账号信息 的 **返回类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
export interface PutAccountUpdateResponse {
  status: string;
  uuid: string;
}

/**
 * 接口 更新账号信息 的 **请求配置的类型**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
type PutAccountUpdateRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/account/update",
    undefined,
    string,
    string,
    false
  >
>;

/**
 * 接口 更新账号信息 的 **请求配置**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
const putAccountUpdateRequestConfig: PutAccountUpdateRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: "/account/update",
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: "putAccountUpdate",
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 更新账号信息 的 **请求函数**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
export const putAccountUpdate = /*#__PURE__*/ (
  requestData: PutAccountUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutAccountUpdateResponse>(
    prepare(putAccountUpdateRequestConfig, requestData),
    ...args
  );
};

putAccountUpdate.requestConfig = putAccountUpdateRequestConfig;

/**
 * 接口 更新账号信息 的 **React Hook**
 *
 * @分类 accounts
 * @请求头 `PUT /account/update`
 */
export const usePutAccountUpdate = /*#__PURE__*/ makeRequestHook<
  PutAccountUpdateRequest,
  PutAccountUpdateRequestConfig,
  ReturnType<typeof putAccountUpdate>
>(putAccountUpdate);

const mockUrl_0_0_0_1 = "http://127.0.0.1:50505/mock/0" as any;
const devUrl_0_0_0_1 = "" as any;
const prodUrl_0_0_0_1 = "" as any;
const dataKey_0_0_0_1 = undefined as any;

/**
 * 接口 文件上传 的 **请求类型**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
export interface PostUploadRequest {}

/**
 * 接口 文件上传 的 **返回类型**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
export interface PostUploadResponse {
  url: string;
}

/**
 * 接口 文件上传 的 **请求配置的类型**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
type PostUploadRequestConfig = Readonly<
  RequestConfig<
    "http://127.0.0.1:50505/mock/0",
    "",
    "",
    "/upload",
    undefined,
    string,
    string,
    true
  >
>;

/**
 * 接口 文件上传 的 **请求配置**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
const postUploadRequestConfig: PostUploadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: "/upload",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postUpload",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 文件上传 的 **请求函数**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
export const postUpload = /*#__PURE__*/ (
  requestData?: PostUploadRequest,
  ...args: UserRequestRestArgs
) => {
  console.log(prepare(postUploadRequestConfig, requestData));

  return request<PostUploadResponse>(
    prepare(postUploadRequestConfig, requestData),
    ...args
  );
};

postUpload.requestConfig = postUploadRequestConfig;

/**
 * 接口 文件上传 的 **React Hook**
 *
 * @分类 upload
 * @请求头 `POST /upload`
 */
export const usePostUpload = /*#__PURE__*/ makeRequestHook<
  PostUploadRequest,
  PostUploadRequestConfig,
  ReturnType<typeof postUpload>
>(postUpload);

/* prettier-ignore-end */
