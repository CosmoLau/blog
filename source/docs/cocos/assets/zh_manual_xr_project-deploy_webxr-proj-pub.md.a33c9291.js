import{_ as e,v as r,b as t,R as o}from"./chunks/framework.5ffcbaff.js";const s="/docs/cocos/assets/select-web-mobile.126f97a9.png",a="/docs/cocos/assets/enable-webxr.73637df7.png",p="/docs/cocos/assets/https-license.1fde5997.png",n="/docs/cocos/assets/start-https-server.2cf615d0.png",u=JSON.parse('{"title":"WebXR 项目构建与发布","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/project-deploy/webxr-proj-pub.md","filePath":"zh/manual/xr/project-deploy/webxr-proj-pub.md"}'),c={name:"zh/manual/xr/project-deploy/webxr-proj-pub.md"},l=o('<h1 id="webxr-项目构建与发布" tabindex="-1">WebXR 项目构建与发布 <a class="header-anchor" href="#webxr-项目构建与发布" aria-label="Permalink to &quot;WebXR 项目构建与发布&quot;">​</a></h1><p>完成 WebXR 应用的 <a href="./webxr-proj-deploy.html">项目设置</a> 并完成项目开发之后，即可打包 WebXR 应用。点击 <strong>菜单栏 -&gt; 项目 -&gt; 构建发布</strong>。</p><h2 id="配置-webxr-构建属性" tabindex="-1">配置 WebXR 构建属性 <a class="header-anchor" href="#配置-webxr-构建属性" aria-label="Permalink to &quot;配置 WebXR 构建属性&quot;">​</a></h2><p>构建平台选择 <strong>Web 移动端</strong>。</p><img src="'+s+'" style="zoom:50%;"><p>开启构建面板最后一个属性 <strong>WebXR</strong>。</p><img src="'+a+'" style="zoom:50%;"><p>点击构建即可。</p><h2 id="配置-https-环境" tabindex="-1">配置 https 环境 <a class="header-anchor" href="#配置-https-环境" aria-label="Permalink to &quot;配置 https 环境&quot;">​</a></h2><p>WebXR 所使用的用于提供 Web 资源的服务必须使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts" target="_blank" rel="noreferrer">安全上下文(secure context)</a>。</p><p>而启动 https 的域名的服务一般需要配置 .pem（证书文件）。</p><p>由于当前版本暂时不支持启动内置 https 服务器，需要用户手动启动。</p><p>将 .pem 存放至构建文件夹的根目录。</p><p><img src="'+p+'" alt=""></p><p>在命令终端的此目录下输入：<strong>https-server -S</strong> 。启动 https 服务即可。</p><img src="'+n+'" style="zoom:50%;"><h2 id="选择可用的设备和浏览器" tabindex="-1">选择可用的设备和浏览器 <a class="header-anchor" href="#选择可用的设备和浏览器" aria-label="Permalink to &quot;选择可用的设备和浏览器&quot;">​</a></h2><p>支持 ARCore 的设备请参考 <a href="https://developers.google.com/ar/devices" target="_blank" rel="noreferrer">ARCore官方文档</a>。</p><p>支持 WebXR 的浏览器请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#browser_compatibility" target="_blank" rel="noreferrer">这里</a>。</p><h2 id="打开浏览器的webxr能力" tabindex="-1">打开浏览器的webxr能力 <a class="header-anchor" href="#打开浏览器的webxr能力" aria-label="Permalink to &quot;打开浏览器的webxr能力&quot;">​</a></h2><p>使用 Chrome 浏览器访问 WebXR 应用前需要确认浏览器 webxr 的功能是否开启。</p><p>访问 <strong><a href="chrome://flags" target="_blank" rel="noreferrer">chrome://flags</a></strong> ，将 <strong>webxr incubations</strong> 改为 <strong>Enable</strong>。</p>',22),b=[l];function h(i,d,m,g,_,x){return r(),t("div",null,b)}const w=e(c,[["render",h]]);export{u as __pageData,w as default};
