import{_ as e,c as t,o,a4 as n}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/oppo-build.k1a70pPF.png",i="/docs/cocos/assets/build-option.C47imF_Z.png",r="/docs/cocos/assets/package.D61jDnBJ.png",s="/docs/cocos/assets/rpk_games.LhWDNSKj.jpg",c="/docs/cocos/assets/run_subpackage.C6DsTvnN.jpg",P=JSON.parse('{"title":"Publish to OPPO Mini Games","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/publish-oppo-mini-game.md","filePath":"en/editor/publish/publish-oppo-mini-game.md","lastUpdated":1712305443000}'),l={name:"en/editor/publish/publish-oppo-mini-game.md"},p=n('<h1 id="publish-to-oppo-mini-games" tabindex="-1">Publish to OPPO Mini Games <a class="header-anchor" href="#publish-to-oppo-mini-games" aria-label="Permalink to &quot;Publish to OPPO Mini Games&quot;">​</a></h1><blockquote><p><strong>Note</strong>: some platforms only have Chinese documentation available when visiting the platform&#39;s website. It may be necessary to use Google Translate in-order to review the documentation.</p></blockquote><p><strong>Cocos Creator</strong> officially supports the release of games to the <strong>OPPO Mini Games</strong>.</p><h2 id="environment-configuration" tabindex="-1">Environment Configuration <a class="header-anchor" href="#environment-configuration" aria-label="Permalink to &quot;Environment Configuration&quot;">​</a></h2><ul><li><p>Download <a href="https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_2-%e5%ae%89%e8%a3%85-runtimeapk-%e5%8c%85%e5%88%b0-oppo-%e6%89%8b%e6%9c%ba%e4%b8%8a" target="_blank" rel="noreferrer">OPPO Mini Game Debugger [cn]</a> and install it on your OPPO phone (Android 6.0 or above is recommended)</p></li><li><p>Install <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">nodejs-8.1.4</a> or above, globally</p></li></ul><h2 id="release-process" tabindex="-1">Release Process <a class="header-anchor" href="#release-process" aria-label="Permalink to &quot;Release Process&quot;">​</a></h2><ol><li><p>Use <strong>Cocos Creator 3.0</strong> to open the project that needs to be released. Select <strong>OPPO Mini Game</strong> in the <strong>Platform</strong> dropdown of the <strong>Build</strong> panel.</p><p><img src="'+a+'" alt="oppo build"></p><p>Click on the <strong>oppo-mini-game</strong> below to expand the build options configuration of OPPO Mini Game.</p><p><img src="'+i+`" alt="build option"></p></li></ol><p>For the general build options for each platform, please refer to <a href="./build-options">General Build Options</a> for details. OPPO Mini Game related build options filling rules are as follows:</p><ul><li><p><strong>Start Scene Asset Bundle</strong></p><p>This option is optional.<br> If set, the start scene and its related dependent resources are built into the built-in Asset Bundle - <a href="./../../asset/bundle#the-built-in-asset-bundle">start-scene</a> to speed up the resource loading of the start scene.</p></li><li><p><strong>Resource Server Address</strong></p><p>This option is optional and used to fill in the address of the remote server where the resources are stored.</p><ul><li><p>If this option is left blank, the <code>remote</code> folder in the release package directory will be packaged into the <strong>rpk</strong> package.</p></li><li><p>If this option is filled in, the <code>remote</code> folder will not be packaged into the built <strong>rpk</strong> package. You need to manually upload the <code>remote</code> folder to the filled in Resource Server Address after build.</p></li></ul><p>Refer to the Resource Management section at the bottom of the document for more details.</p></li><li><p><strong>Game Package Name</strong>: is filled in according to the user&#39;s needs. It&#39;s required.</p></li><li><p><strong>Desktop Icon</strong>: is required. Click the <strong>search icon</strong> button at the back of the input box to select the icon you want. When building, the Desktop Icon will be built into the <strong>OPPO Mini Game</strong> project. It is suggested to use <strong>PNG</strong> images for the <strong>Desktop Icon</strong>.</p></li><li><p><strong>Game Version Name</strong>: is required. <strong>Game Version Name</strong> is the real version, such as: 1.0.0.</p></li><li><p><strong>Game Version Number</strong>: is required. <strong>Game Version Number</strong> is different from the <strong>Game Version Name</strong>, and the <strong>Game Version Number</strong> is mainly used to distinguish the version update. Each time when you submit audit, the game version number is at least 1 higher than the value of the last submitted audit. It must not be equal to or less than the value of the last submitted audit, and it is recommended that the <strong>Game Version Number</strong> be recursively incremented by 1 each time when the audit is submitted.</p><blockquote><p><strong>Note</strong>: the <strong>Game Version Number</strong> must be a positive integer.</p></blockquote></li><li><p><strong>Supported Minimum Platform Version Number</strong>: is required. According to the requirements for OPPO Mini Games, this value must be greater than or equal to <strong>1031</strong>, and <strong>1060</strong> is recommended. Refer to the <a href="https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use" target="_blank" rel="noreferrer">Instructions [cn]</a> for details.</p></li><li><p><strong>Screen Orientation</strong>: The screen orientation currently includes <strong>Portrait</strong> and <strong>Landscape</strong>.</p></li><li><p><strong>Seperate Engine</strong>: This feature reduces the size of the first package for each mini-game by sharing the global engine. When enabled, if the engine already has a cache in the phone, the first package download will automatically remove the engine file and load the full version of the engine cached in the phone. If there is no cache in the phone, the full first package will be loaded, and the complete first package will contain the entire engine.</p></li><li><p><strong>Keystore</strong>: when you check the <strong>Keystore</strong>, the default is to build the rpk package with a certificate that comes with Creator, which is used only for <strong>debugging</strong>.</p><blockquote><p><strong>Note</strong>: when the rpk package is to be used to submit an audit, do not check the <strong>Keystore</strong> to build it.</p></blockquote><p>If you don&#39;t check the <strong>Keystore</strong>, you need to configure the signature files <strong>certificate.pem path</strong> and <strong>private.pem path</strong>, where you build a rpk package that you can <strong>publish directly</strong>. The user can configure two signature files by using the <strong>search icon</strong> button to the right of the input box.</p><p>There are two ways to generate a signature files:</p><ul><li><p>Generated by the <strong>New</strong> button after the <strong>certificate.pem path</strong> in the <strong>Build</strong> panel.</p></li><li><p>Generated by the command line.</p><p>The user needs to generate the signature file <strong>private.pem</strong>, <strong>certificate.pem</strong> through tools such as <strong>openssl</strong>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generate a signature file with the openssl command tool</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa:2048</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -keyout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -days</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3650</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certificate.pem</span></span></code></pre></div><blockquote><p><strong>Note</strong>: <strong>openssl</strong> can be used directly in the terminal in <strong>Linux</strong> or <strong>Mac</strong> environment, and in the <strong>Windows</strong> environment you need to install <strong>openssl</strong> and configure system environment variables. Restart <strong>Cocos Creator</strong> after the configuration is complete.</p></blockquote></li></ul></li></ul><p><strong>2. Build</strong></p><p>After the relevant parameters of the <strong>Build</strong> panel are set, click <strong>Build</strong>. When the build is complete, click the <strong>folder icon</strong> button below the corresponding build task to open the build release path, you can see that a directory with the same name as the <strong>Build Task Name</strong> is generated in the default release path <code>build</code> directory, which is the exported OPPO Mini Game project directory and <strong>rpk</strong>, <strong>rpk</strong> package is in the <code>dist</code> directory.</p><p><img src="`+r+'" alt="package"></p><p><strong>3. Run the built rpk to the phone</strong></p><p>Copy the generated mini-game <strong>rpk</strong> file to the <code>games</code> directory on the phone&#39;s internal storage. Then open the <strong>Mini Game Debugger</strong> that has been installed before on the OPPO phone, click the <strong>OPPO Mini Game</strong> section, and then find the icon corresponding to the game name. If not found, click on the <strong>More -&gt; Refresh</strong> button in the upper right corner to refresh.</p><blockquote><p><strong>Note</strong>: if the OPPO Mini Game Debugger version is <code>v3.2.0</code> and above, copy the mini-game <strong>rpk</strong> file to the <code>Android/data/com.nearme.instant.platform/files/games</code> directory on the OPPO phone&#39;s internal storage. If there is no <code>games</code> directory, create a new one. Please refer to the <a href="https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_3-%e6%96%b0%e5%bb%ba%e7%9b%ae%e5%bd%95" target="_blank" rel="noreferrer">Instructions -- New Directory [cn]</a> for details.</p></blockquote><p><img src="'+s+'" alt="rpk games"></p><h2 id="subpackage-rpk" tabindex="-1">Subpackage rpk <a class="header-anchor" href="#subpackage-rpk" aria-label="Permalink to &quot;Subpackage rpk&quot;">​</a></h2><p>Subpackage <strong>rpk</strong> can be used according to your needs.</p><p>Subpackage loading, which is, splitting the game content into several packages according to certain rules, only downloading the necessary packages when starting up for the first time. This necessary package is called <strong>main package</strong>, The developer can trigger in the main package to download other sub-packages, which can effectively reduce the time spent on the first boot.</p><p>To use this function, set the <a href="./subpackage">Bundle Configuration</a> in <strong>Cocos Creator</strong>, and the package will be automatically subpackaged when the setting is completed.</p><p>After the build is complete, the subpackage directory is in the <code>dist</code> directory. In this case, create a new <code>subPkg</code> directory in the internal storage directory of the OPPO phone, and then copy the <strong>.rpk</strong> file in the <code>dist</code> directory to the <code>subPkg</code> directory.</p><p>Then switch to the <strong>Package Load</strong> section of OPPO <strong>Mini Game Debugger</strong>, click <strong>Refresh</strong> at the top right to see the game name of the subpackage, click <strong>Second Open</strong> to use the same as the normal packaged <strong>rpk</strong>.</p><p><img src="'+c+'" alt="run_subpackage"></p><p>Subpackage rpk needs to be copied to the <code>subPkg</code> directory of OPPO phone&#39;s internal storage, and non-subpackaged rpk needs to be copied to the <code>games</code> directory of OPPO phone&#39;s internal storage, both of which cannot be mixed.</p><blockquote><p><strong>Note</strong>: if the OPPO Mini Game Debugger version is <strong>v3.2.0</strong> and above, copy the mini game subpackaged <strong>rpk</strong> file to the <code>Android/data/com.nearme.instant.platform/files/subPkg</code> directory on the OPPO phone&#39;s internal storage, or create a new one if there is no <code>subPkg</code> directory. The non-subpackaged rpk is copied to the <code>Android/data/com.nearme.instant.platform/files/games</code> directory on the OPPO phone&#39;s internal storage, and the two cannot be mixed.</p></blockquote><p>For more information, please refer to the <a href="https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/subpackage/subpackage" target="_blank" rel="noreferrer">OPPO Mini Game - Subpackage [cn]</a> documentation.</p><h2 id="resource-management-for-oppo-mini-game-environment" tabindex="-1">Resource Management for OPPO Mini Game Environment <a class="header-anchor" href="#resource-management-for-oppo-mini-game-environment" aria-label="Permalink to &quot;Resource Management for OPPO Mini Game Environment&quot;">​</a></h2><p><strong>OPPO Mini Game</strong> is similar to <strong>WeChat Mini Game</strong>. There are restrictions on the package size. The main package size limit for OPPO Mini Game is <strong>4MB</strong>, more than that must be downloaded via a network request.</p><p>Cocos Creator already helps developers with downloading, caching and version management of remote resources. Please refer to the <a href="./../../asset/cache-manager#resource-download-process">Cache Manager</a> documentation for details.</p><h2 id="reference-documentation" tabindex="-1">Reference documentation <a class="header-anchor" href="#reference-documentation" aria-label="Permalink to &quot;Reference documentation&quot;">​</a></h2><ul><li><a href="https://developers.oppomobile.com/wiki/doc/index#id=88" target="_blank" rel="noreferrer">OPPO Developer Guides</a></li><li><a href="https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/quickgame" target="_blank" rel="noreferrer">OPPO Mini Game Tutorial [cn]</a></li><li><a href="https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/feature/account" target="_blank" rel="noreferrer">OPPO Mini Game API Documentation [cn]</a></li><li><a href="https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use" target="_blank" rel="noreferrer">OPPO Mini Game Tool Download [cn]</a></li><li><a href="https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_3-%e6%96%b0%e5%bb%ba%e7%9b%ae%e5%bd%95" target="_blank" rel="noreferrer">OPPO Mini Game Instructions -- New Directory [cn]</a></li></ul>',31),g=[p];function h(d,u,m,b,k,f){return o(),t("div",null,g)}const O=e(l,[["render",h]]);export{P as __pageData,O as default};
