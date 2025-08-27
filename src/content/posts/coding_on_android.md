---
title: 在安卓平板上编写代码
published: 2025-8-27
description: '安装平板真的有生产力吗？'
image: ''
tags: [分享, 平板电脑, 编码, Android, 教程]
category: '分享'
draft: false 
lang: ''
---

# 在安卓平板上编写代码

> 生产力？伪命题？平板电脑真能敲代码吗？

## 前言

时隔两年总算找到份自己觉得合适的工作，不过出门工作，就得和家里亲手 DIY 的台式机告别了，虽然还有一台笔记本电脑可以凑合，但是它 2016 年的性能已经被我唾弃了。于是乎在考虑入手下一台笔记本电脑之前，我准备先买一个平板电脑过度，这也让 5 年没接触过安卓设备的我重新认识一下现在的安卓，就这样入手了一部**小米平板7S Pro**作为我现在少有“生产力工具”。

都说平板电脑拿来当“生产力工具”是伪命题，那么当你看到本篇文章被发布时，至少说明了平板电脑在写代码这一块，还是有那么一丢丢的生产力的。

## 准备工作

首先需要说明一下，我本职工作是游戏开发，但是一般的游戏开发都会使用到游戏引擎，而大部分游戏引擎应该只有 Windows 和 MacOS 应用，而且开发过程比较复杂，所以游戏开发其实并不是本篇文章的目的。

而我另一个兴趣，就是 TypeScript 全栈开发，对于 Web APP 的跨平台性而言，应该在任何设备上进行都不在话下。在此之前，需要确认一下我们的需求：

* 手上有一个平板电脑，且最好配备蓝牙鼠键（至少也得有个键盘）
* 有前后端的开发需求
* 使用 VScode 作为主力编辑器
* 使用 GitHub 作为主力存储仓库

如果满足以上需求，那么接下来的内容应该非常适合你。

## vscode.dev——代餐

如果你的需求相比上面的更简单，仅仅只是想编辑一下 GitHub 仓库里的代码，那么使用 <vscode.dev> 这个网页版的 VScode 其实就能满足需求了，而且它能登录微软账户，同步你的 VScode 配置，保证你的插件生态体验，

但是网页版 VScode 唯一的缺点就是没有终端，不过想来也是，微软也不会白白送一个开发环境。

但是即使如此，你如果有一个配置好 CI/CD 的博客仓库，需要更新博客文章，那么 <vscode.dev> 几乎是完美的代餐。

## Termux——Android Subsystem for Linux

提到安卓设备上编写代码，那么肯定绕不快 Linux 环境的搭建，只要上网一搜，Termux 肯定是首选方案，甚至没有之一。

推荐在 `F-Droid` 商店下载 Termux 最新版。

下载好 Termux 后，当然就是搭建一个完整的 Linux 环境。

```bash
# 更新 Termux 的包管理器
pkg update
pkg upgrade
# 如果无法下载，可能需要更换源
termux-change-repo
# 如果要访问存储，需要申请权限
termux-setup-storage
# 安装 proot
pkg install proot-distro
# 查看可安装的 Linux 系统
proot-distro list
# 安装自己熟悉的 Linux 系统，我这里使用 ubuntu
proot-distro install ubuntu
# 登录 ubuntu
proot-distro login ubuntu
```

根据以上步骤，环境就算是搭建完成了，可能还需要在设置里打开开发者模式（连点系统版本号），然后在设置里搜索 `停止限制子进程` 并打开此选项。

## code-server——启动

Termux 安装好 Linux 环境后，就是搭建开发环境了。

```bash
# 确保使用 proot-distro login ubuntu 进入 Linux 系统

# 安装 code-server
curl -fsSL https://code-server.dev/install.sh | sh
# 查看 code-server 版本号，确认是否安装成功
code-server --version
# 查看并复制 code-server 密码
cat /root/.config/code-server/config.yml
# 其中 password 就是我们等会需要使用的密码
# 启动 code-server 服务
code-server
```

完成以上操作后，就可以打开浏览器，访问 `127.0.0.1:8080` 使用 VScode 了。

这个 VScode 是有终端可以使用的，但是不能同步微软账号，插件系统中的插件也不一定能运行（可能是缺少环境）。

## 编码环境

因为我是做 TypeScript 全栈开发，那么 Node 环境是必备的，我习惯起手安装 `nvm`，到 [nvm 官方仓库](https://github.com/nvm-sh/nvm) 找到安装脚本运行即可：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

这里需要注意一下，安装完成后可能需要重启 linux，我们使用 `exit` 命令退出到 Termux 后重新登录即可。

```bash
# 退出 linux
exit
# 重新登录
proot-distro login ubuntu
# 然后就可以使用 nvm 了
nvm -v
```

安装好 Node 环境后，在安装一个 Bun 来运行 Elysiajs 后端框架

```bash
# 安装 Bun
curl -fsSL https://bun.sh/install | bash
# 安装完成后同样用重启 linux
exit
proot-distro login ubuntu
# 创建一个文件夹用来存放工程
mkdir workspace
cd workspace
# 生成一个 Elysiajs 项目
bun create elysia app
cd app
bun run dev
```

完成后在浏览器中新建标签页，访问 `localhost:3000` 即可看到 `Hello Elysia` 啦。

## 其他说明

如果按照以上步骤跟下来，使用 `bun create astro app` 或者 `bun create vue app` 之类的命令来初始化框架可能会遇到报错，这些大概率都是缺少其他环境导致的，只需要把报错扔给 AI，让 AI 帮你解决即可。

## 后记

至此，本篇文章结束，如果对你有帮助的话，世界上也会少一个沦为泡面压的平板电脑，如果当你看到这篇文章出现在博客，那么我可以很高兴的告诉你，本篇文章的更新来自我的 `小米平板7S Pro`。
