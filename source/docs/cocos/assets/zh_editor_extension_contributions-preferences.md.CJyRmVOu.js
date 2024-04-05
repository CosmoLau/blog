import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/preferences-menu.CgQbunM9.png",l="/docs/cocos/assets/preferences-tool.Bg_-Ahed.png",p="/docs/cocos/assets/preferences-tool-custom.CXWxg8mN.png",h="/docs/cocos/assets/preferences-tool-custom-laboratory.BnH0l-oO.png",q=JSON.parse('{"title":"自定义偏好设置面板","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/contributions-preferences.md","filePath":"zh/editor/extension/contributions-preferences.md","lastUpdated":1712305443000}'),e={name:"zh/editor/extension/contributions-preferences.md"},k=n('<h1 id="自定义偏好设置面板" tabindex="-1">自定义偏好设置面板 <a class="header-anchor" href="#自定义偏好设置面板" aria-label="Permalink to &quot;自定义偏好设置面板&quot;">​</a></h1><p>偏好设置，通常来说存放的是开发者个性化定制的设置，或一些绝对路径的配置，这些信息可能和当前的硬件绑定，如环境配置、一些开发工具的绝对路径。因此通常来说不需要通过 git 同步给该项目其他开发者。</p><p>在自定义偏好设置面板之前，开发者应该提前设计好是将配置存放在项目设置内，还是偏好设置内。</p><p>并且在偏好设置面板里，还能选择存放在项目还是存放在全局。存放在项目的配置只对当前项目生效，如果存放在全局，则会影响所有编辑器。</p><h2 id="偏好设置面板简介" tabindex="-1">偏好设置面板简介 <a class="header-anchor" href="#偏好设置面板简介" aria-label="Permalink to &quot;偏好设置面板简介&quot;">​</a></h2><p>在顶部菜单栏可找到 <strong>Cocos Creator/File -&gt; 偏好设置</strong> 菜单，如下图所示：</p><p><img src="'+t+'" alt="preferences"></p><p>点击可打开偏好设置面板，如下图示：</p><p><img src="'+l+`" alt="preferences"></p><p>偏好设置面板分成左右两侧：</p><ul><li>左侧显示的是提供配置项目的功能扩展的名字。</li><li>右侧是根据配置渲染出来的操作面板。</li></ul><p>面板上的修改，会立即修改到对应的配置项目上，更多关于 <strong>偏好设置</strong> 面板的介绍，请参考文档 <a href="./../../editor/preferences/">偏好设置</a>。</p><h2 id="自定义面板" tabindex="-1">自定义面板 <a class="header-anchor" href="#自定义面板" aria-label="Permalink to &quot;自定义面板&quot;">​</a></h2><p>Cocos Creator 允许每个扩展注册自己的编辑器配置，然后在偏好设置面板内显示。</p><p>偏好设置控制的是编辑器相关的配置，会作用到所有项目上，如果只想增加特定项目的配置，请参考文档 <a href="./contributions-project">自定义项目设置面板</a>。</p><h3 id="偏好设置的两种方式" tabindex="-1">偏好设置的两种方式 <a class="header-anchor" href="#偏好设置的两种方式" aria-label="Permalink to &quot;偏好设置的两种方式&quot;">​</a></h3><p>偏好设置允许以两种方式显示配置：</p><ol><li>通用配置</li><li>实验室配置</li></ol><p>通用设置直接以选项卡的形式展示，而实验室开关则单独一个选项卡集中展示。</p><ul><li>当扩展提供的功能比较稳定时建议将配置数据放在通用功能内。</li><li>当扩展提供的功能处于开发阶段时建议将功能的开关配置数据放在实验室配置中。</li></ul><h3 id="偏好设置定义" tabindex="-1">偏好设置定义 <a class="header-anchor" href="#偏好设置定义" aria-label="Permalink to &quot;偏好设置定义&quot;">​</a></h3><p>我们在偏好设置里新增扩展的配置，也需要通过在扩展定义文件 <code>package.json</code> 里添加 <code>contributions</code> 配置来实现。</p><p>注册自定义偏好设置需要在 <code>contributions.profile.editor</code> 里定义好相关数据字段。更多相信信息可以参看 <a href="./profile">配置系统</a></p><p>这里我们举例新建一个叫做 <code>first-panel</code> 的扩展：</p><div class="language-JSON5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //\`package.json\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;first-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;editor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：偏好设置里的配置数据，都应该存放在 <code>profile.editor</code> 字段中。</p></blockquote><p>当定义好数据字段后，还需要在 <code>contributions.preferences</code> 字段里定义需要显示的数据以及用什么 UI 组件来显示。如下所示：</p><div class="language-JSON5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //\`package.json\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;first-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;preferences&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ui-slider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;attributes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;min&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ui-checkbox&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;foo3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ui-select&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ITEM 0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ITEM 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ITEM 2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;laboratory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上面的示例中，在 <code>contributions.profile.editor</code> 字段定义了 4 个数据项： <code>foo</code>、<code>foo1</code>、<code>foo2</code>、<code>foo3</code>。详看 <a href="./profile">配置系统</a>。</p><p>在 <code>contributions.preferences</code> 字段中，我们定义了 <code>properties</code> 和 <code>laboratory</code>。</p><h3 id="通用配置-properties" tabindex="-1">通用配置（properties） <a class="header-anchor" href="#通用配置-properties" aria-label="Permalink to &quot;通用配置（properties）&quot;">​</a></h3><p><code>properties</code> 中定义的字段，将在偏好设置面板中新建一个与扩展同名的标签页独立显示，如下图所示：</p><p><img src="`+p+'" alt="preferences-tool-custom"></p><h3 id="实验室配置-laboratory" tabindex="-1">实验室配置（laboratory） <a class="header-anchor" href="#实验室配置-laboratory" aria-label="Permalink to &quot;实验室配置（laboratory）&quot;">​</a></h3><p><code>laboratory</code> 中定义的字段，将在偏好设置面板中的 <strong>实验室（Laboratory）</strong> 标签页中显示，如下图所示：</p><p><img src="'+h+'" alt="preferences-tool-custom-laboratory"></p><h2 id="ui-组件配置" tabindex="-1">UI 组件配置 <a class="header-anchor" href="#ui-组件配置" aria-label="Permalink to &quot;UI 组件配置&quot;">​</a></h2><p>本示例展示了 4 种常见 UI 组件在自定义偏好设置面板时的用法，理论上所有带 <code>value</code> 属性的 UI 组件都可以用于偏好设置面板，具体用法请参考文档 <a href="./ui">UI 组件</a>。</p>',38),E=[k];function o(r,d,c,g,u,F){return a(),i("div",null,E)}const C=s(e,[["render",o]]);export{q as __pageData,C as default};
