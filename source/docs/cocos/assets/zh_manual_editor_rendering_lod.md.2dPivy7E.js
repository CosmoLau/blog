import{_ as a,c as i,o as e,a5 as n}from"./chunks/framework.CqnjdYks.js";const l="/docs/cocos/assets/add-comp.D8l41P1b.png",p="/docs/cocos/assets/enabled.DGv5nlyP.png",r="/docs/cocos/assets/property.CnWyFTIY.png",h="/docs/cocos/assets/lod0.nT-33yo2.png",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAkCAIAAAC12aXtAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAADgSURBVFiF7ZhBCoQwDEXjtAvXvYbLHKQX8BKepJfodbxKQXDRTWEWhSIVhmGMcQJ5K+Pi+wghlg7TNIFAXk8L/Ih682Kdc087fEUpZd/3UkotxXjnnAFg27ZaipmTcRyNMa0U492h3rzQeyMiIpLHdljyxGVZAGCeZ/LkIzonvKg3L1K9L+0TRKzb40yMsXsTQljX9crnjkjt9+C9p02snb5jf6eUUkr1WWq/1ZsX9eaF/jwYQiDPPEPvTfhz+YDUOVFvXtSbFzHeOed2OQgAtp2w/px6r9lKMd4dYuak4w2YSzpKCu8NFgAAAABJRU5ErkJggg==",t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAkCAIAAABe7h7uAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAC5SURBVFiF7dcxCsQgEIXhuGNn5xnsrL2MB/QyXsFrpFNMsRC7hYmBtwPzVyk0fshAiIkxHjL7oAHPUzoipSOy9xMROeestT9W/0+993XrzjkiAmpYEdG6Yyn3/c0YI3jWlY5I6YiUjkjpiN78goYQWOtbazvHvUbPOaeUWFtqraWUxycKHhhz/1Z77zffJXVgjm0KN8EDo3RESkekdERKR6R0RIvee59zAims5pyLfp7nGAOoYTXGuACt7CVE4TP4igAAAABJRU5ErkJggg==",o="/docs/cocos/assets/drag-mesh.DcUv4IJC.gif",d="/docs/cocos/assets/add-remove-level.D9j-bxAm.png",k="/docs/cocos/assets/preview.D85hzkPL.gif",g="/docs/cocos/assets/dcc-export.8p6aJHjl.png",c="/docs/cocos/assets/import-asset.vvtF8aKm.png",E="/docs/cocos/assets/auto-match.sPBlF8MS.png",f=JSON.parse('{"title":"多层次细节","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/rendering/lod.md","filePath":"zh/manual/editor/rendering/lod.md"}'),A={name:"zh/manual/editor/rendering/lod.md"},y=n('<h1 id="多层次细节" tabindex="-1">多层次细节 <a class="header-anchor" href="#多层次细节" aria-label="Permalink to &quot;多层次细节&quot;">​</a></h1><p>多层次细节（Level Of Details 以下简称 LOD）是大场景开发中常用的一种优化方式。LOD 的核心在于对于远处或者不重要的物体，降低其显示细节，以达到提升渲染效率的目的。</p><p>通常的 LOD 的做法是对于某些离屏幕较远或者不重要的物体，使用低模进行代替。</p><p>在引擎中，如果要启用 LOD，可以在 <strong>属性检查器</strong> 内选择 <strong>添加组件</strong> 按钮并选择 <strong>LOD Group</strong> 组件。</p><p><img src="'+l+'" alt="add lod group"></p><p>添加后，场景中会显示 <strong>剔除（<code>Culled</code>）</strong> 或者 <strong>LOD</strong> 字样。</p><p><img src="'+p+'" alt="enabled"></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p><img src="'+r+'" alt="property"></p><p>LOD Group 组件的属性描述如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Recalculate Bounds</strong></td><td style="text-align:left;">重新计算包围盒 <br> 点击该按钮后，整个组的模型包围盒会重新计算 <br> 该按钮会调用 <code>recalculateBounds</code> 接口对包围盒进行重新计算，同时会修改 <strong>Object Size</strong> 属性</td></tr><tr><td style="text-align:left;"><strong>Object Size</strong></td><td style="text-align:left;">物理包围盒大小 <br> 计算物体的包围盒并取 X、Y、Z 中值最大的轴 <br> 点击右侧的 <strong>Reset Object Size</strong> 按钮会将此属性重设为 1</td></tr><tr><td style="text-align:left;"><strong>LOD(0 ~ 3)</strong></td><td style="text-align:left;">多层次配置，点击左侧的 <strong>&gt;</strong> 符号可以展开进行配置，展开后的内容请参考下图。<br> LOD0 表示最丰富的显示细节 <br> LOD2 显示低模 <br> 当物体在屏幕中的屏占比小于 LOD2 的 <strong>Screen Ratio</strong> 值时，物体将被剔除</td></tr></tbody></table><p>点击属性检查器上任意 <strong>&gt; LOD(0 ~ 3)</strong> 展开后会显示如下图示：</p><p><img src="'+h+'" alt="lod0"></p><p>其属性及描述如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Screen Ratio(%)</strong></td><td style="text-align:left;">最小屏占比，取值范围 [0, 1]。<br> 开发者可以在后方的输入框内输入自定义的屏占比，也可以通过 <strong>Apply Current Screen Ratio</strong> 自动计算屏占比 <br> 当屏占比低于当前配置的值时，LOD 会自动向下个层次切换；如没有更多层次，则物体会被剔除</td></tr><tr><td style="text-align:left;"><strong>Apply Current Screen Ratio</strong></td><td style="text-align:left;">应用当前屏占比 <br> 按下后，LOD Group 组件会将当前显示状态的屏占比作为 <strong>Screen Ratio（%）</strong> 的值</td></tr><tr><td style="text-align:left;"><strong>Mesh Renderers</strong></td><td style="text-align:left;">网格渲染器 <br> 请参考下方文档以获取更详细的信息</td></tr><tr><td style="text-align:left;"><strong>0 Triangle - 0 Sub Mesh(es)</strong></td><td style="text-align:left;">该属性显示了当前层次所配置的三角面的数量以及其子网格的数量</td></tr></tbody></table><h3 id="网格渲染器属性" tabindex="-1">网格渲染器属性 <a class="header-anchor" href="#网格渲染器属性" aria-label="Permalink to &quot;网格渲染器属性&quot;">​</a></h3><p>网格渲染器可以通过点击下方的 <img src="'+s+'" alt="+"> 以及 <img src="'+t+'" alt="-"> 按钮进行添加或者删除操作。</p><p>添加后可以通过拖拽层次管理器内带有网格渲染器的节点进行配置：</p><p><img src="'+o+'" alt="drag mesh"></p><h2 id="lod" tabindex="-1">LOD <a class="header-anchor" href="#lod" aria-label="Permalink to &quot;LOD&quot;">​</a></h2><p>将鼠标放在 LOD 的右侧显示网格信息处可以显示添加或删除层次按钮。</p><p><img src="'+d+'" alt="add-remove-level"></p><p>点击 <img src="'+s+'" alt="+"> 时会在数组尾部添加一个新的 LOD。</p><p>点击 <img src="'+t+'" alt="-"> 时删除当前鼠标所指的 LOD。删除后，后续的 LOD 会自动向前位移。</p><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p>配置好 LOD 后，在场景管理器内通过鼠标滚轮即可以预览不同的层次。</p><p><img src="'+k+`" alt="preview"></p><p>随着鼠标滚动的变化，场景相机逐渐拉远，此时 LOD 的层次会变化，如当前物体的屏占比低于 LOD2 所配置的屏占比时，场景管理系统会将其剔除（Culled）。屏幕中会显示当前该 LOD Group 的层次状态 LOD(0~3) 或 剔除。</p><h2 id="脚本的使用" tabindex="-1">脚本的使用 <a class="header-anchor" href="#脚本的使用" aria-label="Permalink to &quot;脚本的使用&quot;">​</a></h2><p>开发者可以通过 <code>getComponent</code> 方法获取到该组件：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node, LODGroup } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">requireComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;LOD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requireComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LODGroup)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LOD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    lodGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LODGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.lodGroup </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LODGroup);        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deltaTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>更多 API 可参考 <a href="./__APIDOC__/zh/class/LODGroup.html">LOD Group API</a></p><h2 id="美术工作流" tabindex="-1">美术工作流 <a class="header-anchor" href="#美术工作流" aria-label="Permalink to &quot;美术工作流&quot;">​</a></h2><p>在实际项目开发中，美术工作者可在 DCC 软件（Maya、3D Max、Blender）中进行减面操作，并将模型导出。</p><p>通常可以导出多个不同层次的模型或者在同一模型中增加不同的子网格来代表不同的 LOD 层次。</p><p><img src="`+g+'" alt="export"></p><h3 id="自动匹配" tabindex="-1">自动匹配 <a class="header-anchor" href="#自动匹配" aria-label="Permalink to &quot;自动匹配&quot;">​</a></h3><p>通过 DCC 软件导出的模型如果其子节点拥有多个以 <strong>_lod + 数字</strong> 作为结尾时，LOD Group 组件会自动匹配这些子网格或网格渲染器。</p><h4 id="自动匹配示例" tabindex="-1">自动匹配示例 <a class="header-anchor" href="#自动匹配示例" aria-label="Permalink to &quot;自动匹配示例&quot;">​</a></h4><p>请确保已按照上述的规则导出相应的模型。</p><p>将准备好的 FBX 或者 glTF 文件导入到引擎的 <strong>资源管理器</strong> 内：</p><p><img src="'+c+'" alt="import-asset"></p><p>此时资源导入系统会自动识别这些节点并启用 LOD Group 进行自动匹配：</p><p><img src="'+E+'" alt="auto-match"></p><h2 id="q-a" tabindex="-1">Q&amp;A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q&amp;A&quot;">​</a></h2><ul><li><p>我是否可以添加多个 LOD Group</p><p>可以。他们之间会工作良好。</p></li><li><p>我能否在 2D 场景内使用 LOD</p><p>由于 LOD Group 组件只会识别 MeshRenderer 而 2D 或者 UI 组件通常没有 MeshRenderer，因此这样做并没有什么意义。</p></li></ul>',46),m=[y];function F(u,D,b,C,_,O){return e(),i("div",null,m)}const x=a(A,[["render",F]]);export{f as __pageData,x as default};
