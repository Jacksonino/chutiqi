// ============================================================
//  出题器配置文件 —— 你只需要改这个文件
//  说明：密钥已用 AES-256-GCM 加密后存入 keyEnc（用「加密工具.html」生成）。
//        网页打开时自动解密，无需手动输入密钥。
// ============================================================

window.APP_CONFIG = {
  // ★ 密钥（加密方案，推荐此方式）：
  //   用「加密工具.html」在本地生成密文，把下面 keyEnc 四项复制进来。
  //   运行时网页会自动解密使用：别人打开就能直接出题，无需输入，源码里也看不到明文密钥。
  //   注意：「加密工具.html」请留在自己电脑上，不要上传 GitHub、也不要发给别人。
  apiKey: "",

  // 加密后的密钥（由「加密工具.html」生成，四段都要复制；口令后半段硬编码在 index.html 里，单看本文件解不出）
  keyEnc: {
    salt:  "B39SJVp5505SUAD/z3CDZg==",   // 工具生成的盐（base64）
    iv:    "b/LNXm+MHfHir0MJ",   // 工具生成的随机向量（base64）
    data:  "eMUTt0ix8+AbDkmRS92D5v7KwfiQefH+DFklRYA9IuWjWlga6iBo9wkw0Qdfmn+xP39qHIWcAvaN/9q070W6FJqFrA==",   // 工具生成的密文（base64）
    passA: "a4cc6b0465cc456118b6d4a0fc89d47a62ca445c681545d984edb184e2f9f9aa"    // 工具生成的解密口令前半段
  },

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
