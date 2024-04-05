import{_ as e,c as t,o as n,a4 as o}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/build-options.D5qB3FEB.png",b=JSON.parse('{"title":"WeChat Mini Games Engine Plugin Instructions","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/wechatgame-plugin.md","filePath":"en/editor/publish/wechatgame-plugin.md","lastUpdated":1712305443000}'),a={name:"en/editor/publish/wechatgame-plugin.md"},r=o('<h1 id="wechat-mini-games-engine-plugin-instructions" tabindex="-1">WeChat Mini Games Engine Plugin Instructions <a class="header-anchor" href="#wechat-mini-games-engine-plugin-instructions" aria-label="Permalink to &quot;WeChat Mini Games Engine Plugin Instructions&quot;">​</a></h1><blockquote><p><strong>Note</strong>: some platforms only have Chinese documentation available when visiting the platform&#39;s website. It may be necessary to use Google Translate in-order to review the documentation.</p></blockquote><p>The <strong>Game Engine Plugin</strong> is a new feature added to <strong>WeChat v7.0.7</strong>, which has the official version of the <strong>Cocos Creator</strong> engine built in. If the plugin is enabled in the first game the player experiences, all games that also have the plugin enabled do not need to download the <strong>Cocos Creator</strong> engine again, just use the same version of the engine directly from the public plugin library, or incremental update the engine.</p><p>For example, when a player has played an A game developed using <strong>Cocos Creator</strong> v2.2.0, and the A game already enabled this plugin. Then he played the B Game, also developed by v2.2.0, and would not have needed to re-download the <strong>Cocos Creator</strong> engine if the B game had also enabled this plugin. Even if the B Game is developed using <strong>Cocos Creator</strong> v2.2.1, WeChat only needs to incremental update the difference between the two engine versions. This will drastically reduce the download counts of mini games, and improve the startup speed of mini games by 0.5~2s for a better user experience.</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>Simply check the <strong>Separate Engine</strong> option in the <strong>Build</strong> panel, and then build and release as normal, without additional manual operation. (This feature is only available when the built-in engine is used and the build is in non-debug mode.)</p><p><img src="'+i+'" alt="build-options"></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><p><strong>Q:</strong> Does the engine plugin feature support engine customization?<br><strong>A:</strong> Not supported. If the version does not match or the engine customization is enabled during the build, the built package will not actually use the engine plugin feature properly, although the editor will continue to build after an error occurs.</p><p><strong>Q:</strong> The project enable the engine module clipping, should I need to disable it when using the engine plugin?<br><strong>A:</strong> No, the project can continue to use the engine module clipping as before. The engine plugin provides a complete engine that is compatible with all clipping settings without affecting the original project package.</p><p><strong>Q:</strong> After the engine plugin is enabled, will the engine code still be counted into the first package?<br><strong>A:</strong> According to WeChat&#39;s rules, it will still be counted.</p><p><strong>Q:</strong> After the engine plugin is enabled, can I remove all modules in <strong>Project Setting -&gt; Modules</strong> of editor to reduce the package size?<br><strong>A:</strong> No, because WeChat only supports engine plugin since v7.0.7, if the engine is clipped randomly, the game may not be able to run on a lower version of WeChat.</p><p><strong>Q:</strong> When the engine plugin is enabled, prompt &quot;Code package unpacking failed&quot; or &quot;Login user is not the developer of the Mini Program&quot; in the WeChat DevTools, while the physical device previews correctly?<br><strong>A:</strong> The default appid in the <strong>Build</strong> panel is a common test id, and according to WeChat&#39;s rules, you need to fill in the <strong>appid</strong> applied for yourself to test the engine plugin.</p><p><strong>Q:</strong> When the engine plugin is enabled, prompt &quot;Unauthorized plugin, <code>Add plugin</code>&quot; in the WeChat DevTools?<br><strong>A:</strong> Click the <code>Add plugin</code> in the prompt, then select add <strong>CocosCreator</strong> plugin and recompile. If prompt &quot;There are no plugins to add&quot; when you add the plugin, you can select the <strong>Clear Cache -&gt; Clear All</strong> option in the WeChat DevTools and try again.</p><h2 id="reference-documentation" tabindex="-1">Reference documentation <a class="header-anchor" href="#reference-documentation" aria-label="Permalink to &quot;Reference documentation&quot;">​</a></h2><blockquote><p><strong>Note</strong>: some platforms only have Chinese documentation available when visiting the platforms website. It may be necessary to use Google Translate in-order to review the documentation.</p></blockquote><ul><li><a href="https://developers.weixin.qq.com/minigame/dev/guide/base-ability/game-engine-plugin.html" target="_blank" rel="noreferrer">WeChat Mini Games Engine Plugin Development Documentation</a></li></ul>',17),s=[r];function l(g,h,d,u,p,c){return n(),t("div",null,s)}const f=e(a,[["render",l]]);export{b as __pageData,f as default};
