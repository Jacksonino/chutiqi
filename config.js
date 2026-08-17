// ============================================================
//  出题器配置文件 —— 你只需要改这个文件
//  把密钥直接填进下面 apiKey，就能「永不再输」。
// ============================================================

window.APP_CONFIG = {
  // ★ 把密钥（sk- 开头的一串）粘贴到下面两个引号中间，就永不再要求输入。
  // 注意：填了之后密钥会公开在 GitHub 仓库里——请保持账户余额较低，必要时去后台重置 key。
  apiKey: "sk-qihfeovhoizgqfknsxcbejbtenukaoxysfdoqayqcrxqtfxj",

  // 接口地址（硅基流动，OpenAI 兼容格式，一般不用改）
  baseUrl: "https://api.siliconflow.cn/v1/chat/completions",

  // 部署版专用：如果走 Cloudflare 代理（密钥放服务端），把这一行改成 "/api/chat"，
  // 并可以把上面的 apiKey 清空。本地直接用 apiKey 时，保持下面为 null 即可。
  proxyUrl: null,

  // 两种速度的模型（界面上有「快/慢」切换按钮）：
  modelFast: "deepseek-ai/DeepSeek-V3",   // 快：速度快、日常出题够用
  modelSlow: "deepseek-ai/DeepSeek-R1",   // 慢：推理模型，数学更难更稳，但可能 1~3 分钟
  // 如果报“模型不存在”，去 https://cloud.siliconflow.cn/models 挑可用的填进来。

  // 拍照识别题目用的视觉模型（能把图片里的题目读成文字 + LaTeX）：
  modelVision: "Qwen/Qwen3.6-35B-A3B",
  // 若识别报“模型不存在”，去 https://cloud.siliconflow.cn/models 选一个带“视觉/VL”的模型填进来。

  // 出题“发散程度”：0.3 更稳更规范，0.8 更多样。默认 0.6 即可。
  temperature: 0.6,

  // 单次生成的最大长度，默认够用
  maxTokens: 4096
};
