# 无限工程文档库 / INFINITE DOCUMENTATION

基于 [VitePress](https://vitepress.dev/) 构建的 Minecraft 1.21.1 NeoForge 服务器「无限工程」官方文档站。该项目采用 Markdown 维护内容，可直接提交到 GitHub 并部署到 Cloudflare Pages。

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # 站点名称、SEO、导航与 Sidebar
│   │   ├── public/             # 站点静态资源（图标、图片）
│   │   └── theme/              # 主题扩展、404 与自定义 CSS
│   ├── guide/                  # 萌新指南
│   ├── rules/                  # 服务器规则
│   ├── tutorial/               # 游戏教程（可持续增加文件）
│   ├── faq/                    # 常见问题
│   ├── sponsor/                # 会员赞助、VIP 权益与鸣谢名单
│   ├── changelog/              # 更新日志
│   └── index.md                # 首页
├── package.json
└── .nvmrc
```

## 安装与本地运行

建议使用 Node.js 22 LTS（最低支持 Node.js 20.19）。使用 nvm 时可先执行 `nvm use`，然后：

```bash
npm install
npm run dev
```

终端会显示本地预览地址。需要模拟生产环境时：

```bash
npm run build
npm run preview
```

## 新增文章与教程

日常内容无需修改 Vue 代码，只需新建 Markdown 文件。例如新增 AE2 教程：

1. 新建 `docs/tutorial/ae2.md`。
2. 写入 `# AE2 教程` 和任意二、三级标题及正文。
3. 在 `docs/.vitepress/config.mts` 的 `themeConfig.sidebar` 中，在「游戏教程」的 `items` 数组追加：

```ts
{ text: 'AE2 教程', link: '/tutorial/ae2' }
```

4. 执行 `npm run dev` 预览。二、三级标题会自动成为右侧目录，并加入本地搜索索引。

图片放入 `docs/.vitepress/public/images/`，在 Markdown 中按根路径引用：

```md
![图片说明](/images/example.png)
```

建议使用英文小写文件名、连字符命名，例如 `create-guide.md`。

## 修改站点名称、导航与 UI

- 网站标题、说明、SEO、顶部导航、左侧导航、搜索与页脚：`docs/.vitepress/config.mts`
- 颜色、卡片、移动端、提示框等 UI：`docs/.vitepress/theme/custom.css`
- 自定义 404 页面：`docs/.vitepress/theme/NotFound.vue`
- 首页 Hero 与入口卡片：`docs/index.md`

导航链接采用无 `.md` 的路径。新增栏目时先建 Markdown 文件，再在导航或 Sidebar 加入对应链接即可。

GitHub 仓库创建后，在 `config.mts` 中取消 `socialLinks` 的注释并替换为真实仓库链接，右上角即会出现 GitHub 图标；当前没有填写虚假地址。

## 会员赞助组件

在赞助页面中可复制以下 HTML 模板：

```html
<div class="sponsor-grid">
  <article class="sponsor-card">
    <h3>商品名称</h3>
    <p>简短说明。</p>
    <span class="price">¥ 0</span>
    <p><small>注意事项。</small></p>
  </article>
</div>
```

VIP 使用 `vip-card`；提示条可使用 `notice`、`warning`、`info`。VitePress 原生提示框也可直接使用：

```md
::: info
信息提示
:::

::: tip
建议提示
:::

::: warning
警告提示
:::

::: danger
危险提示
:::
```

## Cloudflare Pages 部署

1. 将本项目推送到你的 GitHub 仓库。
2. 在 Cloudflare Dashboard → Workers & Pages → Create 中连接该 GitHub 仓库。
3. 设置：
   - Framework preset：`VitePress`（若无此项，选择 `None`）
   - Build command：`npm run build`
   - Build output directory：`docs/.vitepress/dist`
   - Node.js 版本：使用项目 `.nvmrc` 的 Node 22，或设置 `NODE_VERSION=22`
4. 保存并部署。后续推送到关联分支将自动重新构建。

项目默认按根路径部署，`base` 未设置为子路径；因此在 Cloudflare Pages 的 **Custom domains** 中直接添加你的域名即可，无需改动代码。不要在部署前填写未经确认的域名。

## 维护检查

每次发布前建议运行：

```bash
npm run build
```

构建成功后，静态网站位于 `docs/.vitepress/dist/`。该目录由构建生成，已被 Git 忽略，不应提交。
