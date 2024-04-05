import{_ as t,c as e,o as l,a4 as i}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/build-template.CHVcPKwP.png",a="/docs/cocos/assets/web-mobile.DbIbDTPQ.png",y=JSON.parse('{"title":"Custom Project Build Template","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/custom-project-build-template.md","filePath":"en/editor/publish/custom-project-build-template.md","lastUpdated":1712305443000}'),o={name:"en/editor/publish/custom-project-build-template.md"},n=i(`<h1 id="custom-project-build-template" tabindex="-1">Custom Project Build Template <a class="header-anchor" href="#custom-project-build-template" aria-label="Permalink to &quot;Custom Project Build Template&quot;">​</a></h1><p><strong>Cocos Creator</strong> supports custom build templates for each project. Add a <code>build-templates/[platform]</code> folder to the project path, and divide the sub-folder according to the <strong>platform name</strong>. Then all the files in this folder will be automatically <strong>copied</strong> to the build generated project according to the corresponding folder structure after the build. Currently, all platforms except the native platform support this function, the specific <strong>platform name</strong> can be referred to as the following <strong>custom build template supported platform list</strong>.</p><p>Folder Structure:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project-folder</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--assets</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--build</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--build-templates</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--web-mobile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> added,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> such</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--index.html</span></span></code></pre></div><p>If the current platform is <code>Web-Mobile</code>, then <code>build-templates/web-mobile/index.html</code> will be copied to <code>build/web-mobile/index.html</code>.</p><p>In addition, the file types currently supported by the build template include <strong>ejs type</strong> and <strong>json type</strong>. These two types will not copied directly but rather parsed. Please refer to the <strong>Special Custom Build Template Platform support list</strong> below for details on the support for these two template types by platform.</p><h2 id="ejs-type" tabindex="-1"><code>ejs</code> type <a class="header-anchor" href="#ejs-type" aria-label="Permalink to &quot;\`ejs\` type&quot;">​</a></h2><p>Since the content of the package is not guaranteed to be exactly the same in every version, when the build template within the editor is updated, the developer also needs to update the build template within their project. For example, if the MD5 Cache option is checked at build time, taking <code>index.html</code> on the web platform as an example, the <code>css</code> file referenced in it will have an MD5 Hash suffix, which may not match the one in the original template and may not work. <br> To optimize this problem, a new way is added to use the template. Click on <strong>Project -&gt; Create Preview Template</strong> in the main menu, and an <code>ejs</code> template file will be generated for the corresponding platform.</p><p><img src="`+s+'" alt="build template"></p><p>Developers only need to customize the generated build template in the <code>.ejs</code>, the build will automatically synchronize the updates of the editor build template to the custom build template, and the frequently changed content will be synchronized to the sub-template (<code>.ejs</code>) referenced by the template, so that the custom build template can be updated manually without frequent updates.</p><p>Taking the creation of a Web Mobile build template as an example, the generated build template directory structure is as follows:</p><p><img src="'+a+'" alt="web-mobile"></p><blockquote><p><strong>Note</strong>: the copy template occurs after the rendered template. For example, if both <code>index.ejs</code> and <code>index.html</code> exist in this directory, the final packaged package will be the <code>index.html</code> file instead of the <code>index.ejs</code> rendered file.</p></blockquote><h3 id="json-type" tabindex="-1"><code>json</code> Type <a class="header-anchor" href="#json-type" aria-label="Permalink to &quot;`json` Type&quot;">​</a></h3><p>Many mini games have their own configuration <code>JSON</code> files, like <code>game.json</code> to WeChat Mini Games. Files in the build templates folder will just copy in <strong>default</strong>, but this configuration JSON will be merged instead of overwrite. Of course, it doesn&#39;t mean that all <code>JSON</code> file will be merged, you can check it in the tables below.</p><h2 id="special-custom-build-template-supported-platform-list" tabindex="-1">Special Custom Build Template supported Platform list <a class="header-anchor" href="#special-custom-build-template-supported-platform-list" aria-label="Permalink to &quot;Special Custom Build Template supported Platform list&quot;">​</a></h2><p>Most files placed in the <code>build-templates/[platform]</code> directory will be copied directly to the corresponding directory. In addition, many platforms support some template files with special name formats. The supported file with special name formats for build templates by the platform are as follows:</p><table><thead><tr><th style="text-align:left;">Platform</th><th style="text-align:left;">Actual Name</th><th style="text-align:left;">Supported File Type</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Huawei AGC</strong></td><td style="text-align:left;">huawei-agc</td><td style="text-align:left;">not supported yet</td></tr><tr><td style="text-align:left;"><strong>Alipay Mini Game</strong></td><td style="text-align:left;">alipay-mini-game</td><td style="text-align:left;"><code>game.json</code></td></tr><tr><td style="text-align:left;"><strong>Taobao Mini Game</strong></td><td style="text-align:left;">taobao-mini-game</td><td style="text-align:left;"><code>game.json</code>、<code>mini.project.json</code></td></tr><tr><td style="text-align:left;"><strong>Douyin Mini Game</strong></td><td style="text-align:left;">bytedance-mini-game</td><td style="text-align:left;"><code>game.ejs</code>、<code>game.json</code>、<code>project.config.json</code></td></tr><tr><td style="text-align:left;"><strong>OPPO Mini Game</strong></td><td style="text-align:left;">oppo-mini-game</td><td style="text-align:left;"><code>manifest.json</code></td></tr><tr><td style="text-align:left;"><strong>Huawei Quick Game</strong></td><td style="text-align:left;">huawei-quick-game</td><td style="text-align:left;">not supported yet</td></tr><tr><td style="text-align:left;"><strong>Cocos Play</strong></td><td style="text-align:left;">cocos-play</td><td style="text-align:left;"><code>game.config.json</code></td></tr><tr><td style="text-align:left;"><strong>vivo Mini Game</strong></td><td style="text-align:left;">vivo-mini-game</td><td style="text-align:left;"><code>project.config.json</code></td></tr><tr><td style="text-align:left;"><strong>Xiaomi Quick Game</strong></td><td style="text-align:left;">xiaomi-quick-game</td><td style="text-align:left;"><code>manifest.json</code></td></tr><tr><td style="text-align:left;"><strong>Baidu Mini Game</strong></td><td style="text-align:left;">baidu-mini-game</td><td style="text-align:left;"><code>game.json</code>, <code>project.swan.json</code></td></tr><tr><td style="text-align:left;"><strong>WeChat Mini Game</strong></td><td style="text-align:left;">wechatgame</td><td style="text-align:left;"><code>game.ejs</code>, <code>game.json</code>, <code>project.config.json</code></td></tr><tr><td style="text-align:left;"><strong>Web Desktop</strong></td><td style="text-align:left;">web-desktop</td><td style="text-align:left;"><code>index.ejs</code></td></tr><tr><td style="text-align:left;"><strong>Web Mobile</strong></td><td style="text-align:left;">web-mobile</td><td style="text-align:left;"><code>index.ejs</code></td></tr><tr><td style="text-align:left;"><strong>Native</strong></td><td style="text-align:left;">native</td><td style="text-align:left;">not supported yet</td></tr></tbody></table>',18),d=[n];function r(p,c,h,m,g,u){return l(),e("div",null,d)}const b=t(o,[["render",r]]);export{y as __pageData,b as default};
