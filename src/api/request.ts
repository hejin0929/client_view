import type { RequestFunctionParams } from "yapi-to-typescript";
import { Get, Post } from "./server";

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: "prod" | "dev" | "mock";
  ["Content-Type"]?: string;
}

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: "prod",
  }
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    // 基本地址
    // const baseUrl = options.server === 'mock'
    //   ? payload.mockUrl
    //   : options.server === 'dev'
    //     ? payload.devUrl
    //     : payload.prodUrl

    const baseUrl = "http://localhost:8080/api";

    // 请求地址
    const url = `${baseUrl}${payload.path}`;

    // 具体请求逻辑
    switch (payload.method) {
      case "GET":
        Get(url, payload.data);
        break;

      case "POST":
        Post(url, payload.rawData, { ...options });
      default:
        break;
    }
  });
}
