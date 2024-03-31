import{_ as s,v as a,b as n,R as o}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/preferences-menu.f19d7d85.png",p="/docs/cocos/assets/preferences-tool.57837041.png",e="/docs/cocos/assets/preferences-tool-custom.1e45e9e6.png",t="/docs/cocos/assets/preferences-tool-custom-laboratory.991e1ea2.png",f=JSON.parse('{"title":"自定义偏好设置面板","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/contributions-preferences.md","filePath":"zh/manual/editor/extension/contributions-preferences.md"}'),c={name:"zh/manual/editor/extension/contributions-preferences.md"},D=o('<h1 id="自定义偏好设置面板" tabindex="-1">自定义偏好设置面板 <a class="header-anchor" href="#自定义偏好设置面板" aria-label="Permalink to &quot;自定义偏好设置面板&quot;">​</a></h1><h2 id="偏好设置面板简介" tabindex="-1">偏好设置面板简介 <a class="header-anchor" href="#偏好设置面板简介" aria-label="Permalink to &quot;偏好设置面板简介&quot;">​</a></h2><p>在顶部菜单栏可找到 <strong>Cocos Creator -&gt; 偏好设置</strong> 菜单，如下图所示：</p><p><img src="'+l+'" alt="preferences"></p><p>点击可打开偏好设置面板，如下图示：</p><p><img src="'+p+`" alt="preferences"></p><p>偏好设置面板分成左右两侧：</p><ul><li>左侧显示的是提供配置项目的功能扩展的名字。</li><li>右侧是根据配置渲染出来的操作面板。</li></ul><p>面板上的修改，会立即修改到对应的配置项目上，更多关于 <strong>偏好设置</strong> 面板的介绍，请参考文档 <a href="./../../editor/preferences/">偏好设置</a>。</p><h2 id="自定义面板" tabindex="-1">自定义面板 <a class="header-anchor" href="#自定义面板" aria-label="Permalink to &quot;自定义面板&quot;">​</a></h2><p>Cocos Creator 允许每个扩展注册自己的编辑器配置，然后在偏好设置面板内显示。</p><p>偏好设置控制的是编辑器相关的配置，会作用到所有项目上，如果只想增加特定项目的配置，请参考文档 <a href="./contributions-project.html">自定义项目设置面板</a>。</p><h3 id="偏好设置的两种方式" tabindex="-1">偏好设置的两种方式 <a class="header-anchor" href="#偏好设置的两种方式" aria-label="Permalink to &quot;偏好设置的两种方式&quot;">​</a></h3><p>偏好设置允许以两种方式显示配置：</p><ol><li>通用配置</li><li>实验室配置</li></ol><p>通用设置直接以选项卡的形式展示，而实验室开关则单独一个选项卡集中展示。</p><ul><li>当插件提供的功能比较稳定时建议将配置数据放在通用功能内。</li><li>当插件提供的功能处于开发阶段时建议将功能的开关配置数据放在实验室配置中。</li></ul><h3 id="偏好设置定义" tabindex="-1">偏好设置定义 <a class="header-anchor" href="#偏好设置定义" aria-label="Permalink to &quot;偏好设置定义&quot;">​</a></h3><p>自定义偏好设置需要依赖数据配置，需要先在 <code>contributions.profile.editor</code> 里定义好相关数据字段。</p><blockquote><p><strong>注意</strong>：偏好设置里的配置数据，都应该存放在 <code>profile.editor</code> 字段中。</p></blockquote><p>当定义好数据字段后，还需要在 <code>contributions.preferences</code> 字段里定义需要显示的数据以及用什么 UI 组件来显示。如下所示：</p><div class="language-JSON5"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//\`package.json\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first-panel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">contributions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preferences</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui-slider</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">attributes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">min</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">step</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui-checkbox</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ui-select</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ITEM 0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ITEM 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ITEM 2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">laboratory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面的示例中，在 <code>contributions.profile.project</code> 字段定义了 4 个数据项： <code>foo</code>、<code>foo1</code>、<code>foo2</code>、<code>foo3</code>。</p><p>关于如何定义 <code>profile</code> 相关配置，请参看 <a href="./profile.html">配置系统</a>。</p><p>在 <code>contributions.preferences</code> 字段中，我们定义了 <code>properties</code> 和 <code>laboratory</code>。</p><h3 id="通用配置-properties" tabindex="-1">通用配置（properties） <a class="header-anchor" href="#通用配置-properties" aria-label="Permalink to &quot;通用配置（properties）&quot;">​</a></h3><p><code>properties</code> 中定义的字段，将在偏好设置面板中新建一个与扩展同名的标签页独立显示，如下图所示：</p><p><img src="`+e+'" alt="preferences-tool-custom"></p><h3 id="实验室配置-laboratory" tabindex="-1">实验室配置（laboratory） <a class="header-anchor" href="#实验室配置-laboratory" aria-label="Permalink to &quot;实验室配置（laboratory）&quot;">​</a></h3><p><code>laboratory</code> 中定义的字段，将在偏好设置面板中的 <strong>实验室（Laboratory）</strong> 标签页中显示，如下图所示：</p><p><img src="'+t+'" alt="preferences-tool-custom-laboratory"></p><h2 id="ui-组件配置" tabindex="-1">UI 组件配置 <a class="header-anchor" href="#ui-组件配置" aria-label="Permalink to &quot;UI 组件配置&quot;">​</a></h2><p>本示例展示了 4 种常见 UI 组件在自定义偏好设置面板时的用法，理论上所有带 <code>value</code> 属性的 UI 组件都可以用于偏好设置面板，具体用法请参考文档 <a href="./ui.html">UI 组件</a>。</p>',33),r=[D];function F(y,C,i,A,u,q){return a(),n("div",null,r)}const h=s(c,[["render",F]]);export{f as __pageData,h as default};