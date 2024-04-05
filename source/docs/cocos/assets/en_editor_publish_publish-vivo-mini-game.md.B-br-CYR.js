import{_ as e,c as t,o as n,a4 as i}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/rpk.DxxAdeT8.png",a="/docs/cocos/assets/play.CdGoQGz0.jpg",o="/docs/cocos/assets/vivo-instant_scan_install.CA18Ao_W.jpg",r="/docs/cocos/assets/vivo-instant_native_install.BGnmrF3v.jpg",b=JSON.parse('{"title":"Publish to vivo Mini Games","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/publish-vivo-mini-game.md","filePath":"en/editor/publish/publish-vivo-mini-game.md","lastUpdated":1712305443000}'),l={name:"en/editor/publish/publish-vivo-mini-game.md"},d=i(`<h1 id="publish-to-vivo-mini-games" tabindex="-1">Publish to vivo Mini Games <a class="header-anchor" href="#publish-to-vivo-mini-games" aria-label="Permalink to &quot;Publish to vivo Mini Games&quot;">​</a></h1><blockquote><p><strong>Note</strong>: some platforms only have Chinese documentation available when visiting the platform&#39;s website. It may be necessary to use Google Translate in-order to review the documentation.</p></blockquote><h2 id="environment-configuration" tabindex="-1">Environment Configuration <a class="header-anchor" href="#environment-configuration" aria-label="Permalink to &quot;Environment Configuration&quot;">​</a></h2><ul><li><p>Download the <a href="https://minigame.vivo.com.cn/documents/#/lesson/base/environment?id=%E5%AE%89%E8%A3%85vivo%E5%B0%8F%E6%B8%B8%E6%88%8F%E8%B0%83%E8%AF%95%E5%99%A8" target="_blank" rel="noreferrer">Quick App &amp; vivo Mini Game Debugger</a> and <a href="https://minigame.vivo.com.cn/documents/#/lesson/base/environment?id=%E5%AE%89%E8%A3%85vivo%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%BC%95%E6%93%8E" target="_blank" rel="noreferrer">vivo Mini Game Engine</a> and install it on your Android device (recommended Android Phone 6.0 or above)</p></li><li><p>Install <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">nodejs-8.9.0</a> or above, globally:</p><blockquote><p><strong>Note</strong>: after installing nodejs, you need to note whether the npm source address is <a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># View current npm source address</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If not, reset the npm source address</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org/</span></span></code></pre></div></li><li><p>Install <code>vivo-minigame/cli</code> globally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vivo-minigame/cli</span></span></code></pre></div><p>If <code>vivo-minigame/cli</code> installation fails, it may be caused by too low version of <strong>nodejs</strong>. Please check the version of <strong>node</strong> and upgrade.</p></li></ul><h2 id="build-options" tabindex="-1">Build Options <a class="header-anchor" href="#build-options" aria-label="Permalink to &quot;Build Options&quot;">​</a></h2><p>For some general build options of platforms, please refer to the <a href="./build-options">General Build Options</a> documentation for details.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Optional</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th><th style="text-align:left;">Field name</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Start Scene Asset Bundle</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">false</td><td style="text-align:left;">If set, the start scene and its related dependent resources are built into the built-in Asset Bundle — <a href="./../../asset/bundle#the-built-in-asset-bundle">start-scene</a> to speed up the resource loading of the start scene.</td><td style="text-align:left;"><code>startSceneAssetBundle</code></td></tr><tr><td style="text-align:left;"><strong>Remote server address</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Empty</td><td style="text-align:left;">This option is optional and used to fill in the address of the remote server where the resources are stored.If this option is left blank, the <code>build/vivo-mini-game/remote</code> folder in the release package directory will be packaged into the rpk package.Refer to the Resource Management section for more details.</td><td style="text-align:left;"><code>remoteServerAddress</code></td></tr><tr><td style="text-align:left;"><strong>Game Package Name</strong></td><td style="text-align:left;">required</td><td style="text-align:left;">(Project Name)</td><td style="text-align:left;">such as <code>com.example.demo</code></td><td style="text-align:left;"><code>package</code></td></tr><tr><td style="text-align:left;"><strong>Desktop Icon</strong></td><td style="text-align:left;">required</td><td style="text-align:left;">(Cocos Logo)</td><td style="text-align:left;">Click the <strong>search icon</strong> button at the back of the input box to select the icon you want. When building, the <strong>Desktop Icon</strong> will be built into the vivo Mini Game project. It is suggested to use <code>PNG</code> images for the <strong>Desktop Icon</strong>.</td><td style="text-align:left;"><code>icon</code></td></tr><tr><td style="text-align:left;"><strong>Game Version Name</strong></td><td style="text-align:left;">required</td><td style="text-align:left;">(Cocos version)</td><td style="text-align:left;"><strong>Game Version Name</strong> is the real version, such as: <strong>1.0.0</strong>.</td><td style="text-align:left;"><code>versionName</code></td></tr><tr><td style="text-align:left;"><strong>Game Version Number</strong></td><td style="text-align:left;">required</td><td style="text-align:left;">1201</td><td style="text-align:left;"><strong>Game Version Number</strong> is different from the <strong>Game Version Name</strong>, and the <strong>Game Version Number</strong> is mainly used to distinguish the version update. Each time when you submit audit, the game version number is at least 1 higher than the value of the last submitted audit. It must not be equal to or less than the value of the last submitted audit, and it is recommended that the <strong>Game Version Number</strong> be recursively incremented by 1 each time when the audit is submitted.</td><td style="text-align:left;"><code>versionCode</code></td></tr><tr><td style="text-align:left;"><strong>Supported Minimum Platform Version Number</strong></td><td style="text-align:left;">required</td><td style="text-align:left;">1035</td><td style="text-align:left;">Please refer to <a href="https://minigame.vivo.com.cn/documents/#/download/engine?id=%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95%EF%BC%9A" target="_blank" rel="noreferrer">Official Documentation [cn]</a> to check the latest version number of vivo engine.</td><td style="text-align:left;"><code>minPlatformVersion</code></td></tr><tr><td style="text-align:left;"><strong>Orientation</strong></td><td style="text-align:left;">-</td><td style="text-align:left;">landscape</td><td style="text-align:left;">Device direction, it will be written in <code>manifest.json</code>.</td><td style="text-align:left;"><code>deviceOrientation</code></td></tr><tr><td style="text-align:left;"><strong>Separate Engine</strong></td><td style="text-align:left;">Optional</td><td style="text-align:left;">-</td><td style="text-align:left;">Vivo has added <strong>game engine plugin</strong> feature since platform version number <strong>1063</strong>. This plugin has the official version of the Cocos Creator engine built-in. If the plugin is enabled in the first game the player experiences, all games that also have the plugin enabled do not need to download the Cocos Creator engine again, just use the same version of the engine directly from the public plugin library, or incremental update the engine.<br>Check <strong>Separate Engine</strong> when using, and then build and release normally in the <strong>Build</strong> panel, without additional manual operation. Please refer to the <a href="./wechatgame-plugin">WeChat Engine Plugin Instructions</a> for details.</td><td style="text-align:left;"><code>separateEngine</code></td></tr><tr><td style="text-align:left;"><strong>Use debug keystore</strong></td><td style="text-align:left;">-</td><td style="text-align:left;">true</td><td style="text-align:left;">When you check <strong>Use Debug Keystore</strong>, it means that the rpk package built with the certificate that comes with Creator is used by default, and it is only used for <strong>debugging</strong>. when the rpk package is to be used to submit an audit, do not check the <strong>Use Debug Keystore</strong> to build it.</td><td style="text-align:left;"><code>useDebugKey</code></td></tr><tr><td style="text-align:left;"><strong>Key certification path</strong></td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">The key store certificate, the quick game on the Huawei App Market, must be signed with the release version certificate, and the certificate fingerprint must be configured in the background of the Huawei Developers Alliance. For details, please refer to the following <strong>Generate Signature File</strong></td><td style="text-align:left;"><code>privatePemPath</code>, <code>certificatePemPath</code></td></tr></tbody></table><h3 id="generate-signature-file" tabindex="-1">Generate signature file <a class="header-anchor" href="#generate-signature-file" aria-label="Permalink to &quot;Generate signature file&quot;">​</a></h3><p>If you don&#39;t check the <strong>Keystore</strong>, you need to configure the signature files <strong>certificate.pem path</strong> and <strong>private.pem path</strong>, where you build a rpk package that you can <strong>publish directly</strong>. The developer can configure two signature files by using the <strong>search icon</strong> button to the right of the input box.</p><p>There are two ways to generate a signature files:</p><ul><li><p>Generated by the <strong>New</strong> button after the <strong>certificate.pem path</strong> in the <strong>Build</strong> panel.</p></li><li><p>Generated by the command line.</p><p>The developer needs to generate the signature file <strong>private.pem</strong>, <strong>certificate.pem</strong> through tools such as <strong>openssl</strong>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generate a signature file with the openssl command tool</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa:2048</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -keyout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -days</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3650</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certificate.pem</span></span></code></pre></div><blockquote><p><strong>Note</strong>: <strong>openssl</strong> can be used directly in the terminal in Linux or Mac environment, and in the Windows environment you need to install <code>openssl</code> and configure system environment variables. Restart Creator after the configuration is complete.</p></blockquote></li></ul><h2 id="run-the-rpk" tabindex="-1">Run the rpk <a class="header-anchor" href="#run-the-rpk" aria-label="Permalink to &quot;Run the rpk&quot;">​</a></h2><p><img src="`+s+'" alt="rpk"></p><p>There are three ways to run rpk on your phone:</p><ul><li><p><strong>Method One</strong></p><p>Click the <strong>Run</strong> button at the bottom right of the <code>vivo-mini-game</code> build task in the <strong>Build</strong> panel and wait for the QR Code interface to be generated:</p><p><img src="'+a+'" alt="play"></p><p>Then open the <strong>Quick App &amp; vivo Mini Game Debugger</strong> that was installed before on your Android device. Click the <strong>Scan code install</strong> button to scan the QR Code to open the <strong>rpk</strong>.</p><p><img src="'+o+'" alt="vivo-instant_scan_install"></p></li><li><p><strong>Method Two</strong></p><p>Copy the generated mini game <strong>rpk</strong> file (located in the <code>dist</code> directory) to the internal storage directory of the mobile phone.</p><p>Open the <strong>Quick App &amp; vivo Mini Game Debugger</strong> that has been installed before on the Android device, click <strong>Local Install</strong>, then find the <strong>rpk</strong> file from the internal storage directory of your mobile phone and select <strong>Open</strong>.</p><p><img src="'+r+`" alt="vivo-instant_native_install"></p></li><li><p><strong>Method Three</strong></p><p>Specify to the editor installation directory <code>resources/tools/vivo-pack-tools</code> in the command line, and execute the command <code>npm run server</code> to generate URL and QR code using the vivo Mini Game Packer Commands.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Specify to the editor installation directory.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> F:/CocosCreator/resources/tools/vivo-pack-tools</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generate URL and QR code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span></code></pre></div><p>Then open the <strong>Quick App &amp; vivo Mini Game Debugger</strong> that was installed before on your Android device.</p><p>Finally, click the <strong>Scan code install</strong> button to copy the URL generated in the first step to the browser, and then directly scan the QR code on the web page to open the <strong>rpk</strong>.</p></li></ul><h2 id="subpackage-loading" tabindex="-1">Subpackage Loading <a class="header-anchor" href="#subpackage-loading" aria-label="Permalink to &quot;Subpackage Loading&quot;">​</a></h2><p>The subpackage loading of vivo Mini Games is similar to WeChat Mini Games. Please refer to the <a href="./subpackage">Mini Game Subpackage</a> documentation for details.</p><h2 id="vivo-mini-game-environment-resource-management" tabindex="-1">vivo Mini Game Environment Resource Management <a class="header-anchor" href="#vivo-mini-game-environment-resource-management" aria-label="Permalink to &quot;vivo Mini Game Environment Resource Management&quot;">​</a></h2><p>The part of vivo mini games that exceed the package size limit must be downloaded through the network.</p><p>Cocos Creator helps developers to download, cache and manage remote resources. For details, please refer to <a href="./../../asset/cache-manager">Resource Management</a>.</p><h2 id="reference-documentation" tabindex="-1">Reference documentation <a class="header-anchor" href="#reference-documentation" aria-label="Permalink to &quot;Reference documentation&quot;">​</a></h2><ul><li><a href="https://minigame.vivo.com.cn/documents/#/lesson/base/start" target="_blank" rel="noreferrer">vivo Mini Games Development Documentation [cn]</a></li><li><a href="https://minigame.vivo.com.cn/documents/#/api/system/life-cycle" target="_blank" rel="noreferrer">vivo Mini Games API Documentation [cn]</a></li><li><a href="https://minigame.vivo.com.cn/documents/#/download/debugger" target="_blank" rel="noreferrer">Quick App &amp; vivo Mini Game Debugger Download [cn]</a></li></ul>`,22),h=[d];function g(p,c,u,m,f,k){return n(),t("div",null,h)}const v=e(l,[["render",g]]);export{b as __pageData,v as default};
