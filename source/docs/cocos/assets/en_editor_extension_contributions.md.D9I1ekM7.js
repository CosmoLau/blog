import{_ as i,c as s,o as t,a4 as e}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"Extend Existing Functionality","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/extension/contributions.md","filePath":"en/editor/extension/contributions.md","lastUpdated":1712305443000}'),n={name:"en/editor/extension/contributions.md"},a=e(`<h1 id="extend-existing-functionality" tabindex="-1">Extend Existing Functionality <a class="header-anchor" href="#extend-existing-functionality" aria-label="Permalink to &quot;Extend Existing Functionality&quot;">​</a></h1><p><strong>Cocos Creator</strong> supports contributions between extensions.</p><p>When writing an extension, it is possible to query whether the existing functions in the editor provide the ability of receiving <code>contributions</code> externally.</p><p>If there are functions that provide the ability of receiving <code>contributions</code> externally, use these functions when writing extensions.</p><h2 id="contributions-data-definition" tabindex="-1">Contributions Data Definition <a class="header-anchor" href="#contributions-data-definition" aria-label="Permalink to &quot;Contributions Data Definition&quot;">​</a></h2><p>The <code>contributions</code> function, uniformly defined in the <code>contributions</code> field in <code>package.json</code>, is as follows.</p><div class="language-JSON5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;builder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;assets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;scene&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;inspector&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;shortcuts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;preferences&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;project&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="field-descriptions" tabindex="-1">Field Descriptions <a class="header-anchor" href="#field-descriptions" aria-label="Permalink to &quot;Field Descriptions&quot;">​</a></h2><p><code>contributions</code> provides the ability to interact with the editor&#39;s various functional systems, the main functions involved are as follows:</p><ul><li><p><code>builder</code> - custom build process, please refer to the documentation <a href="./../publish/custom-build-plugin">Extending Build Process</a> for details.</p></li><li><p><code>assets</code> - Enhanced Explorer panel, please refer to the documentation for more details <a href="./../assets/extension">Extending the Assets Panel</a>.</p></li><li><p><code>profile</code> - defines the configuration needed for the extension, see the documentation <a href="./profile">Configuration System</a>.</p></li><li><p><code>scene</code> - Write scripts in the extension that need to interact with the engine and project scripts, see the documentation <a href="./scene-script">Calling the Engine API and Project Script</a>.</p></li><li><p><code>inspector</code> - custom <strong>Inspector</strong> panel, see the documentation <a href="./inspector">Custom Property Inspector Panel</a>.</p></li><li><p><code>menu</code> - defines the menu information that the extension needs to add, see the documentation <a href="./contributions-menu">Customize the Main Menu</a>.</p></li><li><p><code>messages</code> - defines the list of messages that the extension needs to use, please refer to the documentation <a href="./contributions-messages">Custom Messages</a>.</p></li><li><p><code>shortcuts</code> - defines the shortcuts required by the extension, see the documentation <a href="./contributions-shortcuts">Extending Shortcut</a>.</p></li><li><p><code>preferences</code> - customize the preferences, see the documentation <a href="./contributions-preferences">Extending the Preferences Panel</a>.</p></li><li><p><code>project</code> - Custom project settings, see the documentation <a href="./contributions-project">Extending Project Settings Panel</a>.</p></li></ul>`,10),o=[a];function l(h,p,r,d,c,k){return t(),s("div",null,o)}const g=i(n,[["render",l]]);export{u as __pageData,g as default};