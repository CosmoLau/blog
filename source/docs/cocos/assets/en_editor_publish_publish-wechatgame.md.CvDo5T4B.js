import{_ as e,c as t,o,a4 as a}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/preference.DdmCE09w.png",s="/docs/cocos/assets/appid.DquSUVys.jpeg",i="/docs/cocos/assets/build.K9poCgi8.png",r="/docs/cocos/assets/tool.D8JXbNs3.jpeg",l="/docs/cocos/assets/package.DUPZY8iU.jpg",h="/docs/cocos/assets/wechat-build.DbehAzGH.png",d="/docs/cocos/assets/detail.DBnYLl0C.jpeg",W=JSON.parse('{"title":"Publish to WeChat Mini Games","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/publish-wechatgame.md","filePath":"en/editor/publish/publish-wechatgame.md","lastUpdated":1712305443000}'),c={name:"en/editor/publish/publish-wechatgame.md"},g=a('<h1 id="publish-to-wechat-mini-games" tabindex="-1">Publish to WeChat Mini Games <a class="header-anchor" href="#publish-to-wechat-mini-games" aria-label="Permalink to &quot;Publish to WeChat Mini Games&quot;">​</a></h1><blockquote><p><strong>Note</strong>: some platforms only have Chinese documentation available when visiting the platform&#39;s website. It may be necessary to use Google Translate in-order to review the documentation.</p></blockquote><p>The runtime environment of the <strong>WeChat Mini Game</strong> is an extension of the <strong>WeChat Mini Program</strong>, providing a WebGL interface encapsulation based on the mini program environment, greatly improving rendering capabilities and performance. However, since these interfaces are encapsulated by the WeChat team, they are not equivalent to the browser environment.</p><p>On the engine side, in order to make the developers&#39; workload as easy as possible, our main tasks for developers include the following:</p><ul><li>The engine framework adapts to the WeChat Mini Game API, pure game logic level, developers do not need any additional modifications.</li><li>The <strong>Cocos Creator</strong> editor provides a fast packaging process, released directly as a <strong>WeChat Mini Game</strong>, and automatically evokes the <strong>WeChat DevTools</strong>.</li><li>Automatically load remote assets, cache assets, and cache asset version control.</li></ul><p>In addition, the game submission, review and release process of the <strong>WeChat Mini Game</strong> is no different from the <strong>WeChat Mini Program</strong>. Please refer to the <a href="https://developers.weixin.qq.com/minigame/en/dev/guide/" target="_blank" rel="noreferrer">WeChat Mini Game Developer</a> documentation.</p><h2 id="publish-wechat-mini-games-with-cocos-creator" tabindex="-1">Publish WeChat Mini Games with Cocos Creator <a class="header-anchor" href="#publish-wechat-mini-games-with-cocos-creator" aria-label="Permalink to &quot;Publish WeChat Mini Games with Cocos Creator&quot;">​</a></h2><ol><li><p>Download the <strong>WeChat DevTools</strong> on <a href="https://developers.weixin.qq.com/miniprogram/en/dev/devtools/download.html" target="_blank" rel="noreferrer">WeChat Official Document</a></p></li><li><p>Set the <strong>WeChatGame App Path</strong> in <strong>Cocos Creator/File -&gt; Preferences -&gt; <a href="./../../editor/preferences/">Native Develop</a></strong>.</p><p><img src="'+n+'" alt="preference"></p></li><li><p>Log in to the WeChat public platform and find the appid</p><p><img src="'+s+'" alt="appid"></p></li><li><p>Select the <strong>WeChat Game</strong> in the <strong>Platform</strong> of the <strong>Build</strong> panel, fill in the <code>mini game appid</code>, and then click <strong>Build</strong></p><p><img src="'+i+'" alt="build"></p></li><li><p>Click <strong>Play</strong> to open the <strong>WeChat DevTools</strong></p><p><img src="'+r+'" alt="tool"></p><blockquote><p><strong>Note</strong>: the <strong>WeChat DevTools</strong>, if it has not been run on a Mac before, will show an error that states: <code>Please ensure that the IDE has been properly installed</code>. You need to manually open the <strong>WeChat DevTools</strong> once, before you can click <strong>Run</strong>.</p></blockquote></li><li><p>Preview deployment</p><p>Following this process, a <code>wechatgame</code> folder will be generated in the project&#39;s <strong>build</strong> directory (the name of the folder is based on the <strong>Build Task Name</strong>), which already contains the configuration files <code>game.json</code> and <code>project.config.json</code> of the WeChat Mini Games environment.</p><p><img src="'+l+'" alt="package"></p></li></ol><h3 id="build-options" tabindex="-1">Build Options <a class="header-anchor" href="#build-options" aria-label="Permalink to &quot;Build Options&quot;">​</a></h3><p><img src="'+h+'" alt="build"></p><table><thead><tr><th style="text-align:left;">Options</th><th style="text-align:left;">Optional or not</th><th style="text-align:left;">Default</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>appid</strong></td><td style="text-align:left;">Required</td><td style="text-align:left;"><code>wx6ac3f5090a6b99c5</code></td><td style="text-align:left;">The appid of the WeChat Mini Games, it will be written to <code>project.config.json</code> file.</td></tr><tr><td style="text-align:left;"><strong>Start Scene Asset Bundle</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">false</td><td style="text-align:left;">If set, the start scene and its related dependent resources are built into the built-in Asset Bundle — <a href="./../../asset/bundle#the-built-in-asset-bundle">start-scene</a> to speed up the resource loading of the start scene.</td></tr><tr><td style="text-align:left;"><strong>Open data context root</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Empty</td><td style="text-align:left;">If an Open Data Context exists, use this root to specify the relative path of the Open Data Context folder in the build directory so that the directory is not overwritten or modified during the build.</td></tr><tr><td style="text-align:left;"><strong>Orientation</strong></td><td style="text-align:left;">Required</td><td style="text-align:left;"><code>landscape</code></td><td style="text-align:left;">Device orientation, it will be written to <code>game.json</code> file.</td></tr><tr><td style="text-align:left;"><strong>Separate Engine</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Empty</td><td style="text-align:left;">Whether to use WeChat Mini Games engine plugin, please refer to <a href="./wechatgame-plugin">WeChat Mini Games Engine Plugin Instructions</a> for details.</td></tr><tr><td style="text-align:left;"><strong>High Performance Mode</strong></td><td style="text-align:left;">Whether to use hight performance mode <br> Please refer to <a href="https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance.html" target="_blank" rel="noreferrer">High Performance Mode</a> for more details.</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>Wasm 3D physics system (based on <code>ammo.js</code>)</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Enabled</td><td style="text-align:left;">This option is used to select whether to enable <strong>Wasm</strong>, which takes effect when using <strong>bullet（ammo.js）</strong> physics. Please refer to the <strong>WebAssembly Support</strong> section below for more details.</td></tr><tr><td style="text-align:left;"><strong>Whether to enabled WebGL2</strong> (Experimental feature)</td><td style="text-align:left;">-</td><td style="text-align:left;">Forced Off</td><td style="text-align:left;">In order to allow WebGL 2.0 to be enabled on WeChat Mini Games in the future, we have added this option in <strong>v3.4.1</strong> to support to enable WebGL 2.0 following the configuration in the <strong>Project Settings</strong> panel, and to turn off to reduce the package by default.<br>If this option is set to <strong>Consistent with project settings</strong> and <strong>WebGL 2.0</strong> is checked in <strong>Project Settings -&gt; Feature Cropping</strong>, it will be successfully enabled in the future if the WeChat environment supports WebGL 2.0.</td></tr></tbody></table><h2 id="asset-management-for-wechat-mini-game-environment" tabindex="-1">Asset Management for WeChat Mini Game Environment <a class="header-anchor" href="#asset-management-for-wechat-mini-game-environment" aria-label="Permalink to &quot;Asset Management for WeChat Mini Game Environment&quot;">​</a></h2><p>In a <strong>WeChat Mini Game</strong> environment, asset management is the most special part. It differs from the browser in the following four points:</p><ol><li><p>The size of the <strong>WeChat Mini Game</strong> package cannot exceed <strong>4MB</strong>, including all the code and assets. Additional assets must be downloaded via web request.</p></li><li><p>For files downloaded from a remote server, the <strong>WeChat Mini Game</strong> environment does not have the browser&#39;s caching and outdated update mechanism.</p></li><li><p>For the assets in the <strong>WeChat Mini Game</strong> package, they are not loaded on demand in the mini game environment, but rather all the assets in the package are loaded at once, and then the game page is launched.</p></li><li><p>You cannot download script files from a remote server.</p></li></ol><p>This brings up two key issues, home page loading speed and remote asset caching and version management. For the home page loading speed, we recommend that developers only save the script file in the <strong>WeChat Mini Game</strong> package, and all other assets are downloaded from the remote server. As for downloading, caching and version management of remote assets, <strong>Cocos Creator</strong> has done the job for developers.</p><p>In the <strong>WeChat Mini Game</strong> environment, we provide a <code>wxDownloader</code> object, and after setting the <code>REMOTE_SERVER_ROOT</code> property to it, the logic of the engine to download assets becomes:</p><ol><li>Check that assets are in the mini game package.</li><li>If not present, query local cache assets.</li><li>If no local cache assets are available, download from a remote server.</li><li>Download and save them to the mini game application cache in backstage for re-access.</li><li>Local cache storage has space limitation, if total space of cache exceeds the limit, there will be no more caching without disturbing game process.</li></ol><p>It should be noted that once the cache space is full, all the assets that need to be downloaded cannot be saved, only the temporary files for save download assets can be used, and WeChat will automatically clean up all temporary files after the mini game is exited. So the next time you run the mini game again, those assets are downloaded again and the process keeps looping.<br> In addition, the problem of file saving failure due to cache space exceeding the limit does not occur on the <strong>WeChat DevTools</strong>, because the <strong>WeChat DevTools</strong> does not limit the cache size, so testing the cache needs to be done in a real WeChat environment.</p><p>At the same time, when the <strong>MD5 Cache</strong> feature of the engine is enabled, the URL of the file will change as the content of the file changes, so that when a new version of the game is released, the assets of the old version will naturally become invalid in the cache, and only the new assets can be requested from the server, which achieves the effect of version control.</p><p>Specifically, developers need to do:</p><ol><li><p>When building, check the <strong>MD5 Cache</strong> in the <strong>Build</strong> panel.</p></li><li><p>Set the <strong>Remote service address</strong>, and then click <strong>Build</strong>.</p></li><li><p>When the build is complete, upload the <strong>res</strong> folder in the mini game release package to the server.</p></li><li><p>Delete the <strong>res</strong> folder inside the local release package.</p></li><li><p>For the test phase, you may not be able to deploy to the official server, you need to use the local server to test, then open the details page in the WeChat DevTools, check the <code>Does not verify valid domain names, web-view (business domain names), TLS versions and HTTPS certificates</code> option in the <strong>Local Settings</strong>.</p><p><img src="'+d+'" alt="detail"></p></li></ol><blockquote><p><strong>Note</strong>: if the cache asset exceeds the WeChat environment limit, you need to manually clear the asset. Use <code>wx.downloader.cleanAllAssets()</code> and <code>wx.downloader.cleanOldAssets()</code> to clear the cache in <strong>WeChat Mini Games</strong>. The former clears all the cache assets in the cache directory, please use it carefully. While the latter clears cache assets that are currently unused in the cache directory in the application.</p></blockquote><h2 id="wechat-mini-game-subpackage-loading" tabindex="-1">WeChat Mini Game Subpackage Loading <a class="header-anchor" href="#wechat-mini-game-subpackage-loading" aria-label="Permalink to &quot;WeChat Mini Game Subpackage Loading&quot;">​</a></h2><p>To achieve subpackage loading with <strong>WeChat Mini Game</strong>, please refer to <a href="./subpackage">Mini Game Subpackage</a> documentation.</p><h2 id="platform-sdk-access" tabindex="-1">Platform SDK Access <a class="header-anchor" href="#platform-sdk-access" aria-label="Permalink to &quot;Platform SDK Access&quot;">​</a></h2><p>In addition to pure game content, the <strong>WeChat Mini Game</strong> environment actually provides a very powerful native SDK interface, the most important of which are user, social, payment, etc. These interfaces are only available in the <strong>WeChat Mini Game</strong> environment, equivalent to third-party SDK interfaces for other platforms. The porting of such SDK interfaces still needs to be handled by developers at this stage. Here are some of the powerful SDK capabilities provided by WeChat Mini Games:</p><ol><li>User interface: login, authorization, user information, etc.</li><li>WeChat payment</li><li>Forward and get forwarding information</li><li>File upload and download</li><li>Media: pictures, recordings, cameras, etc.</li><li>Other: location, device information, scan code, NFC, etc.</li></ol><h2 id="wechat-mini-games-known-issues" tabindex="-1">WeChat Mini Games Known issues <a class="header-anchor" href="#wechat-mini-games-known-issues" aria-label="Permalink to &quot;WeChat Mini Games Known issues&quot;">​</a></h2><p>Cocos Creator&#39;s adaptation of <strong>WeChat Mini Games</strong> has not been completely implemented. The following modules are still not supported:</p><ul><li>VideoPlayer</li><li>WebView</li></ul><p>It is possible to use the missing functionality by calling the <strong>WeChat&#39;s</strong> API directly.</p><h2 id="webassembly-support" tabindex="-1">WebAssembly Support <a class="header-anchor" href="#webassembly-support" aria-label="Permalink to &quot;WebAssembly Support&quot;">​</a></h2><blockquote><p><strong>Note</strong>: this section has been significantly changed in v3.3.1. For v3.3.0, please switch to the previous version documentation (e.g., v3.2) in the upper right corner of the page to view the content.</p></blockquote><p>As of 3.0, the <strong>Wasm 3D physics system (based on <code>ammo.js</code>)</strong> option has been added to the build options of WeChat Mini Game, which takes effect when <strong>Projects -&gt; Project Settings -&gt; Feature Cropping -&gt; 3D -&gt; Physics System</strong> in the editor&#39;s main menu is set to <strong>bullet（ammo.js）</strong>.</p><p>The <strong>Wasm 3D physics system</strong> option is enabled by default, and the engine will automatically package codes in <code>wasm</code> mode when building. If disabled, <code>js</code> mode is used.</p><blockquote><p><strong>Notes</strong>:</p><ol><li>The WeChat Mini Games Separation Engine Plugin currently only supports <strong>js</strong> mode.</li><li>WebAssembly required WeChat v7.0.17 and above.</li><li>The WeChat WebAssembly debugging base library needs to be v2.12.0 and above.</li></ol></blockquote><h2 id="reference-documentation" tabindex="-1">Reference documentation <a class="header-anchor" href="#reference-documentation" aria-label="Permalink to &quot;Reference documentation&quot;">​</a></h2><ul><li><a href="https://developers.weixin.qq.com/minigame/en/dev/guide/" target="_blank" rel="noreferrer">WeChat Mini Game Developer Document</a></li><li><a href="https://mp.weixin.qq.com/?lang=en_US" target="_blank" rel="noreferrer">WeChat Public Platform</a></li><li><a href="https://developers.weixin.qq.com/minigame/en/dev/api/" target="_blank" rel="noreferrer">WeChat Mini Game API Documentation</a></li><li><a href="https://developers.weixin.qq.com/miniprogram/en/dev/devtools/devtools.html" target="_blank" rel="noreferrer">WeChat DevTools</a></li><li><a href="https://mp.weixin.qq.com/debug/wxagame/en/dev/devtools/download.html" target="_blank" rel="noreferrer">WeChat DevTools Download</a></li><li><a href="https://github.com/cocos-creator/test-wechat-mini-game" target="_blank" rel="noreferrer">WeChat Cache Space Overflow Case</a></li></ul>',38),p=[g];function m(f,u,b,v,w,y){return o(),t("div",null,p)}const x=e(c,[["render",m]]);export{W as __pageData,x as default};
