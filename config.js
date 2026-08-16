// ============================================================
//  出题器配置文件 —— 你只需要改这个文件
//  注意：这个文件里有你的 API 密钥，不要把它发给陌生人、不要公开分享。
// ============================================================

window.APP_CONFIG = {
  // 你的硅基流动密钥（sk- 开头的一串）
  apiKey: "sk-fbjrvoawbbkinytszsmplthydnnsdsimzwbgwgqfvijfzaph",

  // 接口地址（硅基流动，OpenAI 兼容格式，一般不用改）
  baseUrl: "https://api.siliconflow.cn/v1/chat/completions",

  // 部署版专用：如果走 Cloudflare 代理（密钥放服务端），把这一行改成 "/api/chat"，
  // 并可以把上面的 apiKey 清空。本地直接用 apiKey 时，保持下面为 null 即可。
  proxyUrl: null,

  // 使用的模型。出题推荐（改引号里的文字即可切换）：
  //   "deepseek-ai/DeepSeek-V3"     -> 快、便宜、日常够用（默认）
  //   "deepseek-ai/DeepSeek-R1"     -> 推理更强，数学更稳，但慢一些
  //   "Qwen/Qwen3-235B-A22B"        -> 数学好，速度适中
  // 如果报“模型不存在”，去 https://cloud.siliconflow.cn/models 挑一个可用的填进来。
  model: "deepseek-ai/DeepSeek-V3",

  // 出题“发散程度”：0.3 更稳更规范，0.8 更多样。默认 0.6 即可。
  temperature: 0.6,

  // 单次生成的最大长度，默认够用
  maxTokens: 4096
};
