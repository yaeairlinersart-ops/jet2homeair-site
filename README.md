# 耀天航空

无需构建的品牌网站，页面源文件位于 dist/。发布内容为虚构航空公司网页设计练习，不提供真实航班、招聘或支付服务。

- index.html：页面结构与品牌文案
- style.css：响应式样式，白色为主、森林绿点缀的视觉系统，保留原始山川首屏；中文优先使用微软雅黑
- app.js：目的地筛选、目的地收藏、旅程探索与航线示意图

本地运行：`node server.cjs`，浏览器访问 http://127.0.0.1:4173。

GitHub Pages 发布：将本仓库推送到 GitHub 公共仓库的 `main` 分支，在仓库 Settings → Pages 中选择 GitHub Actions 为发布源。`.github/workflows/pages.yml` 会自动发布 `dist/`。在 Pages 设置中将自定义域名设为 `jet2homeair.fun`，然后按 [GitHub 官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 在 NameSilo 配置根域名 DNS。仅加入 `dist/CNAME` 不会替代 Pages 设置中的域名绑定。

路线目前为规划构想，未接入真实航班、票务、支付或旅客信息系统。收藏仅存储在当前浏览器。图片使用打包在 `dist/assets/` 中的 Unsplash 风景意象，不代表具体目的地实拍；后续可替换为当地授权图片。字体使用系统本地微软雅黑，无需外部字体请求。GitHub Pages 与海外 DNS 配置不能保证中国大陆所有网络可访问；若需要稳定覆盖，需另行确认大陆托管和备案条件。



