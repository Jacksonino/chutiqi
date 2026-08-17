// ============================================================
//  出题器配置文件 —— 你只需要改这个文件
//  说明：API 密钥【不再写在本文件里】，避免泄露到公开仓库。
//        改成首次使用时在网页里点「🔑 密钥」粘贴一次。
// ============================================================

window.APP_CONFIG = {
  // ★ 密钥这里保持为空 "" 即可（不要填！）。
  //   首次打开网页时，点右上角「🔑 密钥」粘贴你的硅基流动密钥，
  //   它会只保存在你自己的手机/电脑浏览器里，不会上传 GitHub、不会出现在网页源码里。
  //   同一个密钥也可以私下发给同学，让同学在自己手机上各粘一次。
  apiKey: "",

  // 接口地址（硅基流动，OpenAI 兼容格式，一般不用改）
  baseUrl: "https://api.siliconflow.cn/v1/chat/completions",

  // 部署版专用：如果走服务端代理（密钥放服务端），把这一行改成 "/api/chat"，
  // 并保持上面的 apiKey 为空。普通 GitHub Pages 部署保持下面为 null 即可。
  proxyUrl: null,

  // 两种速度的模型（界面上有「快/慢」切换按钮）：
  modelFast: "deepseek-ai/DeepSeek-V3",   // 快：速度快、日常出题够用
  modelSlow: "deepseek-ai/DeepSeek-R1",   // 慢：推理模型，数学更难更稳，但可能 1~3 分钟
  // 如果报“模型不存在”，去 https://cloud.siliconflow.cn/models 挑可用的填进来。

  // 拍照识别题目用的视觉模型（能把图片里的题目读成文字 + LaTeX）。
  // 硅基流动已下线旧版 Qwen2.5-VL 系列，现改用新版：
  modelVision: "Qwen/Qwen3-VL-8B-Instruct",
  // 若识别仍报“modeldisabled / 30003”，说明该模型在你的账号被禁用，
  // 去 https://cloud.siliconflow.cn/models 挑一个带“视觉/VL”且“可用”的模型填进来。
  // 不用改也能用：识别失败时会自动切换成本地 OCR（Tesseract，无需 API、不依赖模型）。

  // 出题“发散程度”：0.3 更稳更规范，0.8 更多样。默认 0.6 即可。
  temperature: 0.6,

  // 单次生成的最大长度，默认够用
  maxTokens: 4096
};
