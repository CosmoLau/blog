import{_ as e,c as s,o as i,a4 as t}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/title.Dr-MH0HD.jpg",n="/docs/cocos/assets/table.21PkrlJn.png",o="/docs/cocos/assets/editor.C5qisvOv.png",r="/docs/cocos/assets/update.CFVIQ1n6.png",y=JSON.parse('{"title":"Assets Hot Update Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"en/advanced-topics/hot-update.md","filePath":"en/advanced-topics/hot-update.md","lastUpdated":1712305443000}'),h={name:"en/advanced-topics/hot-update.md"},l=t('<h1 id="assets-hot-update-tutorial" tabindex="-1">Assets Hot Update Tutorial <a class="header-anchor" href="#assets-hot-update-tutorial" aria-label="Permalink to &quot;Assets Hot Update Tutorial&quot;">​</a></h1><h2 id="preface" tabindex="-1">Preface <a class="header-anchor" href="#preface" aria-label="Permalink to &quot;Preface&quot;">​</a></h2><p>In current Cocos Creator version, assets hot update workflow has not been fully integrated into the editor. But the engine itself has complete support for hot update system, so with some of the external script and tool the workflow is complete.</p><p>The sample project for this document is available from <a href="https://github.com/cocos-creator/tutorial-hot-update/tree/master" target="_blank" rel="noreferrer">GitHub Repo</a>.</p><p><img src="'+a+'" alt="Hot update"></p><h2 id="usage-scenarios-and-design-ideas" tabindex="-1">Usage scenarios and design ideas <a class="header-anchor" href="#usage-scenarios-and-design-ideas" aria-label="Permalink to &quot;Usage scenarios and design ideas&quot;">​</a></h2><p>Game developers are very familiar with the pattern that the game has been released in app market but each time user launch the game it will automatically look for updates from the server, to keep the client always updated. Of course, there are some other usage scenarios for hot update, but are not related to what we discuss here. We will mainly discuss how to implement hot update system in Cocos Creator.</p><p>Hot update in Cocos Creator comes mainly from the <code>AssetsManager</code> module in the Cocos engine. It has a very important feature:</p><p><strong>Server and client both keep a full list of the game asset (manifest)</strong>, during hot update process, by comparing server and client asset manifest, the client should know what to download to get the latest content. This can naturally support cross-version updates, such as when client version is A, remote version is C, then we can directly update the assets from A to C. We do not need to generate A to B and B to C update package. Therefore, when we push new asset version to server, we can save new version files discretely on server, and during update the client will download each file needed separately.</p><p>Please be aware that <strong>hot update system is for native games only</strong>, since Web game would always request assets from web server. So <code>AssetsManager</code> class exists only in the native namespace, please check runtime environment before implement these API.</p><h2 id="manifest-file" tabindex="-1">Manifest file <a class="header-anchor" href="#manifest-file" aria-label="Permalink to &quot;Manifest file&quot;">​</a></h2><p>For different versions of file-level differences, AssetsManager uses a manifest file for version control. The client and server manifest files each contains an asset file list and version for each file. This allows comparing the version of each file to determine whether a file should be downloaded.</p><p>The manifest file contains the following important information:</p><ol><li>The root path of remote assets</li><li>Remote manifest file url</li><li>Remote version file url (optionally)</li><li>Major version number</li><li>File list: index of file paths, including file version information. We recommend using the file md5 as the version number</li><li>List of search path.</li></ol><p>The version file can be part of the contents of the manifest file and do not contain a list of files. But the manifest file may be large, each time client need to download the whole file for checking version update. So developer can provide a very small version file for version check only. <code>AssetsManager</code> will first check the version number provided by the version file to determine if it is necessary to continue downloading the manifest file and update it.</p><h2 id="implement-hot-update-in-the-cocos-creator-project" tabindex="-1">Implement hot update in the Cocos Creator project <a class="header-anchor" href="#implement-hot-update-in-the-cocos-creator-project" aria-label="Permalink to &quot;Implement hot update in the Cocos Creator project&quot;">​</a></h2><p>In this tutorial, we will provide a hot update workflow for Cocos Creator project. We have also offered <code>Downloader</code> JavaScript interface, so users are free to develop their own hot update solution.</p><p>Before starting to explain in detail, developers can take a look at the directory structure of published native version of any game in Cocos Creator. The engine scripts will be packaged into the <code>src</code> directory, and other assets will be exported to the <code>assets</code> directory.</p><p>Based on this project structure, the hot update process in this tutorial is simple:</p><ol><li>Generate the local manifest file based on the <code>assets</code> and <code>src</code> directories in the native published directory.</li><li>Create a component script to be responsible for the hot update logic.</li><li>After release of the game, if you need to update the version, you need to generate a set of remote asset versions, including the <code>assets</code> directory, <code>src</code> directory and manifest file. Then deploy these files to your server.</li><li>When the hot update script detects that the server manifest version does not match local version, the hot update starts</li></ol><p>To show the hot update process, the example project used in the tutorial has a full version with 1.1.0 information saved in the <code>remote-assets</code> directory, and the default build of the project generates version 1.0.0. At the beginning of the game it will check whether there is a version of the remote update, if you find a remote version the user is prompted to update. When update is complete, the user re-enter the game and see the version 1.1.0 information.</p><p><img src="'+n+'" alt="table"></p><blockquote><p><strong>Note</strong>: the project contains <code>remote-assets</code> is for debug mode, the developer must use the debug mode when building the test project, otherwise the release mode jsc file priority will be higher than <code>remote-assets</code> in the assets and cause the script to fail.</p></blockquote><h3 id="use-the-version-generator-to-generate-the-manifest-file" tabindex="-1">Use the version generator to generate the manifest file <a class="header-anchor" href="#use-the-version-generator-to-generate-the-manifest-file" aria-label="Permalink to &quot;Use the version generator to generate the manifest file&quot;">​</a></h3><p>In the example project provided, <a href="https://github.com/cocos-creator/tutorial-hot-update/blob/master/version_generator.js" target="_blank" rel="noreferrer">version_generator.js</a> is a script file, which is a Nodejs script for generating the manifest file. Use it as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node version_generator.js -v 1.0.0 -u http://your-server-address/tutorial-hot-update/remote-assets/ -s native/package/ -d assets/</span></span></code></pre></div><p>The following is a description of the parameters:</p><ul><li><code>-v</code> Specifies the major version number of the manifest file.</li><li><code>-u</code> Specifies the url of the server remote package, which needs to be the same as the remote package url of the manifest file in the original release version, otherwise the update can not be detected.</li><li><code>-s</code> local native published directory relative to the current path.</li><li><code>-d</code> the path of the output manifest file.</li></ul><h3 id="hot-update-component-script" tabindex="-1">Hot update component script <a class="header-anchor" href="#hot-update-component-script" aria-label="Permalink to &quot;Hot update component script&quot;">​</a></h3><p>In the example project, the implementation of the hot update component is located at <a href="https://github.com/cocos-creator/tutorial-hot-update/blob/master/assets/hotupdate/HotUpdate.ts" target="_blank" rel="noreferrer">assets/hotupdate/HotUpdate.ts</a>, the developer can refer to this implementation, but also free to modify according to their own needs.</p><p>In addition, the sample project is also equipped with a <code>Scene/Canvas/update</code> node for prompting to update and display the progress of the update.</p><p><img src="'+o+`" alt="component"></p><h3 id="deploy-to-remote-server" tabindex="-1">Deploy to remote server <a class="header-anchor" href="#deploy-to-remote-server" aria-label="Permalink to &quot;Deploy to remote server&quot;">​</a></h3><p>In order to allow the game to detect remote versions, it is possible to simulate a remote server on the machine, there are a variety of server solutions (such as <a href="https://docs.python.org/2/library/simplehttpserver.html" target="_blank" rel="noreferrer">SimpleHTTPServer</a> for Python). We will not discuss detail here, developers can use their own preferred way. Once the remote server is up, modify the following places to allow the game to successfully find the remote package:</p><ol><li><code>assets/project.manifest</code>: <code>packageUrl</code>, <code>remoteManifestUrl</code> and <code>remoteVersionUrl</code> in the client manifest file of the game</li><li><code>remote-assets/project.manifest</code>: <code>packageUrl</code>, <code>remoteManifestUrl</code> and <code>remoteVersionUrl</code> in the manifest file of the remote package</li><li><code>remote-assets/version.manifest</code>: <code>packageUrl</code>, <code>remoteManifestUrl</code> and <code>remoteVersionUrl</code> in the remote package&#39;s version file</li></ol><h3 id="publish-the-original-version" tabindex="-1">Publish the original version <a class="header-anchor" href="#publish-the-original-version" aria-label="Permalink to &quot;Publish the original version&quot;">​</a></h3><p>After downloading the sample project, use Cocos Creator to open the project directly. Open <strong>Build</strong> panel, build for native platform, choose Windows/Mac as the target to test.</p><blockquote><p><strong>Note</strong>:</p><ol><li>Do not check MD5 Cache when building, otherwise it will cause the hot update to be invalid.</li><li>Make sure to import editor plugin hot-update into the extensions folder (the demo project has imported the plugin).</li></ol></blockquote><p>The editor plugin automatically adds the search path logic and fix code to <code>main.js</code> every time we build a successful native version:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Add the following code at the beginning of main.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.jsb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hotUpdateSearchPaths </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;HotUpdateSearchPaths&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (hotUpdateSearchPaths) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paths </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hotUpdateSearchPaths);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSearchPaths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paths);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fileList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storagePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paths[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tempPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storagePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;_temp/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baseOffset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tempPath.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isDirectoryExist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempPath) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isFileExist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;project.manifest.temp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listFilesRecursively</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempPath, fileList);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                fileList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">srcPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> relativePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> srcPath.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baseOffset);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dstPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storagePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> relativePath;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (srcPath[srcPath.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDirectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dstPath)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isFileExist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dstPath)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dstPath)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renameFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(srcPath, dstPath);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                jsb.fileUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeDirectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempPath);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div><blockquote><p><strong>Note</strong>: <code>fileUtils</code> is located in the traditional <code>jsb</code> namespace instead of <code>native</code>, and currently, the script compile system only supports importing <code>native</code> objects via <code>import</code> in TypeScript.</p></blockquote><p>This step must be done because the essence of the hot update is to replace the files in the original game package with a remotely downloaded file. The search path in Cocos engine just meet this demand, it can be used to specify the remote package download url as the default search path, so the game will run the process of downloading a good remote version. In addition, the search path is used in the last update process using <code>localStorage</code> (which conforms to the WEB standard <a href="https://developer.mozilla.org/en/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">Local Storage API</a>) to store on the user&#39;s machine. The <code>HotUpdateSearchPaths</code> key is specified in <code>HotUpdate.js</code>, and the name used for the save and read process must match.</p><p>In addition, if encountering this warning during the opening of the project, ignore: <code>loader for [.manifest] not exists!</code>.</p><h3 id="run-the-example-project" tabindex="-1">Run the example project <a class="header-anchor" href="#run-the-example-project" aria-label="Permalink to &quot;Run the example project&quot;">​</a></h3><p>If everything is alright, run the native version of the sample project. A new version will be detected, suggesting that the update will automatically restart the game after the game, then enter the table scene.</p><p><img src="`+r+'" alt="update"></p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The above is a hot update solution, Cocos Creator in the future version to provide more mature hot update process, directly integrated into the editor. Of course, the underlying Downloader API will also be provided to allow users to freely implement their own hot update scheme and to build a complete visual workflow in the editor through the plug-in mechanism. This tutorial and sample project is for your reference and we encourage developers to customize their own workflows. If you have questions and communication also welcome feedback to <a href="https://discuss.cocos2d-x.org/c/creator" target="_blank" rel="noreferrer">Forum</a>.</p><h2 id="next-step" tabindex="-1">Next Step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;Next Step&quot;">​</a></h2><p><a href="./hot-update-manager">AssetsManager Document</a></p>',50),p=[l];function d(c,k,g,u,E,m){return i(),s("div",null,p)}const v=e(h,[["render",d]]);export{y as __pageData,v as default};
