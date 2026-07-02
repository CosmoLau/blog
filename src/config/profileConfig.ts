import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/icon.jpeg",

	// 名字
	name: "CosmoLau",

	// 个人签名
	bio: "啥都想学，啥也不会",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: 'Bilibili',
			icon: 'fa7-brands:bilibili',
			url: 'https://space.bilibili.com/2260014',
		},
		{
			name: 'Steam',
			icon: 'fa7-brands:steam',
			url: 'https://store.steampowered.com',
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "cosmolau@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
