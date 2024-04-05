import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/add-comp.D8l41P1b.png",r="/docs/cocos/assets/enabled.DGv5nlyP.png",l="/docs/cocos/assets/property.CnWyFTIY.png",h="/docs/cocos/assets/lod0.nT-33yo2.png",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAkCAIAAAC12aXtAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAADgSURBVFiF7ZhBCoQwDEXjtAvXvYbLHKQX8BKepJfodbxKQXDRTWEWhSIVhmGMcQJ5K+Pi+wghlg7TNIFAXk8L/Ih682Kdc087fEUpZd/3UkotxXjnnAFg27ZaipmTcRyNMa0U492h3rzQeyMiIpLHdljyxGVZAGCeZ/LkIzonvKg3L1K9L+0TRKzb40yMsXsTQljX9crnjkjt9+C9p02snb5jf6eUUkr1WWq/1ZsX9eaF/jwYQiDPPEPvTfhz+YDUOVFvXtSbFzHeOed2OQgAtp2w/px6r9lKMd4dYuak4w2YSzpKCu8NFgAAAABJRU5ErkJggg==",t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAkCAIAAABe7h7uAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAC5SURBVFiF7dcxCsQgEIXhuGNn5xnsrL2MB/QyXsFrpFNMsRC7hYmBtwPzVyk0fshAiIkxHjL7oAHPUzoipSOy9xMROeestT9W/0+993XrzjkiAmpYEdG6Yyn3/c0YI3jWlY5I6YiUjkjpiN78goYQWOtbazvHvUbPOaeUWFtqraWUxycKHhhz/1Z77zffJXVgjm0KN8EDo3RESkekdERKR6R0RIvee59zAims5pyLfp7nGAOoYTXGuACt7CVE4TP4igAAAABJRU5ErkJggg==",p="/docs/cocos/assets/drag-mesh.DcUv4IJC.gif",d="/docs/cocos/assets/add-remove-level.D9j-bxAm.png",c="/docs/cocos/assets/preview.D85hzkPL.gif",g="/docs/cocos/assets/dcc-export.8p6aJHjl.png",k="/docs/cocos/assets/import-asset.vvtF8aKm.png",m="/docs/cocos/assets/auto-match.sPBlF8MS.png",u="/docs/cocos/assets/model.CEPBhMgO.png",f="/docs/cocos/assets/hover.D4T1RFd5.png",L=JSON.parse('{"title":"Level Of Details","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/rendering/lod.md","filePath":"en/editor/rendering/lod.md","lastUpdated":1712305443000}'),y={name:"en/editor/rendering/lod.md"},E=n('<h1 id="level-of-details" tabindex="-1">Level Of Details <a class="header-anchor" href="#level-of-details" aria-label="Permalink to &quot;Level Of Details&quot;">​</a></h1><p>Level Of Details (LOD) is a common optimization method used in large-scene development, where the core of LOD is to reduce the display details of distant or unimportant objects to improve rendering efficiency.</p><p>The common practice of LOD is to use low-poly for some objects that are far away from the screen or unimportant instead.</p><p>To enable LOD in the engine, select the <strong>Add Component</strong> button in the <strong>Inspector</strong> panel and select the <strong>LOD Group</strong> component.</p><p><img src="'+o+'" alt="add lod group"></p><p>When added, the words <strong>Culled</strong> or <strong>LOD</strong> will be displayed in the scene.</p><p><img src="'+r+'" alt="enabled"></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p><img src="'+l+'" alt="property"></p><p>The properties of the LOD Group component are described as follows.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Recalculate Bounds</strong></td><td style="text-align:left;">Recalculate Bounds <br> When this button is clicked, the model bounds for the entire group are recalculated <br> This button calls the <code>recalculateBounds</code> interface to recalculate the bounds, which will also effects the <strong>Object Size</strong> property</td></tr><tr><td style="text-align:left;"><strong>Object Size</strong></td><td style="text-align:left;">Bounding box size <br> Calculate the bounding box of the object and take the axis with the largest value in X, Y, Z <br> Clicking the <strong>Reset Object Size</strong> button on the right will reset this property to 1</td></tr><tr><td style="text-align:left;"><strong>LOD(0 ~ 3)</strong></td><td style="text-align:left;">LOD. Click the <strong>&gt;</strong> symbol on the left side to expand for configuration, please refer to the figure below for the expanded content.<br> LOD0 indicates the richest display detail <br> LOD2 shows low-poly <br> When the object&#39;s screen ratio is less than the <strong>Screen Ratio</strong> value of LOD2, the object will be culled</td></tr></tbody></table><p>Click on any <strong>&gt; LOD(0 ~ 3)</strong> on the <strong>Inspector</strong> panel to expand it and the following image will be displayed.</p><p><img src="'+h+'" alt="lod0"></p><p>Its properties and description are as follows.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Screen Ratio(%)</strong></td><td style="text-align:left;">Screen Ratio [0, 1]。<br> Developers can enter a custom screen ratio in the back input box, or the screen ratio can be calculated automatically with <strong>Apply Current Screen Ratio</strong> <br> When the screen ratio is lower than the currently configured value, LOD will automatically switch to the next level; if there are no more levels, the object will be culled</td></tr><tr><td style="text-align:left;"><strong>Apply Current Screen Ratio</strong></td><td style="text-align:left;">Applying the Current Screen Ratio <br> When pressed, the LOD Group component takes the screen ratio of the current display state as the value of <strong>Screen Ratio (%)</strong></td></tr><tr><td style="text-align:left;"><strong>Mesh Renderers</strong></td><td style="text-align:left;">Mesh Renderer <br> Please refer to the documentation below for more detailed information</td></tr><tr><td style="text-align:left;"><strong>0 Triangle - 0 Sub Mesh(es)</strong></td><td style="text-align:left;">This property shows the number of triangulated surfaces configured at the current level and the number of their submeshes</td></tr></tbody></table><h3 id="mesh-renderer-properties" tabindex="-1">Mesh Renderer Properties <a class="header-anchor" href="#mesh-renderer-properties" aria-label="Permalink to &quot;Mesh Renderer Properties&quot;">​</a></h3><p>The mesh renderer can be changed by clicking on the <img src="'+e+'" alt="+"> and <img src="'+t+'" alt="-"> buttons below to add or remove actions.</p><p>Once added, the node with the mesh renderer within the hierarchy manager can be configured by dragging and dropping the following.</p><p><img src="'+p+'" alt="drag mesh"></p><h2 id="lod" tabindex="-1">LOD <a class="header-anchor" href="#lod" aria-label="Permalink to &quot;LOD&quot;">​</a></h2><p>Mouse over the right side of the LOD to display the mesh information to show the Add or Remove Levels button.</p><p><img src="'+d+'" alt="add-remove-level"></p><p>Clicking on <img src="'+e+'" alt="+"> will add a new LOD to the end of the array.</p><p>Clicking on <img src="'+t+'" alt="-"> will delete the LOD currently pointed to by the mouse; after deletion, subsequent LODs are automatically shifted forward.</p><h2 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;Preview&quot;">​</a></h2><p>Once you have configured the LOD, you can preview the different levels with the mouse wheel in the scene manager.</p><p><img src="'+c+`" alt="preview"></p><p>As the mouse scrolling changes, the scene camera will gradually pull away, and the level of the LOD will change, if the screen ratio of the current object is lower than the configured screen ratio of LOD2, the scene management system will cull it. The screen will show the current LOD Group&#39;s hierarchy status LOD(0~3) or Culled.</p><h2 id="use-of-scripts" tabindex="-1">Use of scripts <a class="header-anchor" href="#use-of-scripts" aria-label="Permalink to &quot;Use of scripts&quot;">​</a></h2><p>The developer can obtain the component via the <code>getComponent</code> method.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node, LODGroup } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>API reference could be found at <a href="./__APIDOC__/en/class/LODGroup">LOD Group API</a></p><h2 id="art-workflow" tabindex="-1">Art Workflow <a class="header-anchor" href="#art-workflow" aria-label="Permalink to &quot;Art Workflow&quot;">​</a></h2><p>In real project development, artists can perform faceting operations in DCC software (Maya, 3D Max, Blender) and export the model.</p><p>It is often possible to export multiple models at different levels or add different sub-meshes to the same model to represent different LOD levels.</p><p><img src="`+g+'" alt="export"></p><h3 id="automatic-matching" tabindex="-1">Automatic Matching <a class="header-anchor" href="#automatic-matching" aria-label="Permalink to &quot;Automatic Matching&quot;">​</a></h3><p>The LOD Group component automatically matches child meshes or mesh renderers of models exported via DCC software that have multiple child nodes ending in <strong>_lod+[0,N]</strong>.</p><h4 id="example-of-automatic-matching" tabindex="-1">Example of automatic matching <a class="header-anchor" href="#example-of-automatic-matching" aria-label="Permalink to &quot;Example of automatic matching&quot;">​</a></h4><p>Make sure you have exported the appropriate model according to the rules above.</p><p>Import the prepared FBX or glTF file into the engine&#39;s <strong>Asset Manager</strong> at</p><p><img src="'+k+'" alt="import-asset"></p><p>In this case, the asset import system automatically recognizes these nodes and enables LOD Groups for automatic matching.</p><p><img src="'+m+'" alt="auto-match"></p><h4 id="auto-lod" tabindex="-1">Auto LOD <a class="header-anchor" href="#auto-lod" aria-label="Permalink to &quot;Auto LOD&quot;">​</a></h4><p>Since v3.8, we have optimized the LOD when importing models, if the model does not have LOD information, you can find the Model pagination on the <strong>Inspector</strong> panel of the model, find and edit the LOD of the model, check the LOD check box to enable auto LOD.</p><p><img src="'+u+'" alt="model.png"></p><p>Mouse over the hierarchy to click <img src="'+e+'" alt="-">/<img src="'+t+'" alt="-"> to increase and decrease the level.</p><p><img src="'+f+'" alt="hover.png"></p><ul><li>Face count(%): the face count ratio, the ratio of the number of triangular faces of the optimized mesh divided by the number of faces of the original mesh. For example, 25% means 75% original faces will be optimized.</li><li>Screen Ratio: the minimum screen ratio, same as the Screen Ratio property of the LOD component, see above.</li></ul><p>Each tier is set up similarly to the LOD component, allowing you to modify the percentage of faces in different tiers.</p><h2 id="q-a" tabindex="-1">Q&amp;A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q&amp;A&quot;">​</a></h2><ul><li><p>Can I add more than one LOD Group?</p><p>Yes. They will work well with each other.</p></li><li><p>Can I use LODs within a 2D scene?</p><p>Since LOD Group components only recognize MeshRenderers and 2D or UI components usually don&#39;t have MeshRenderers, it doesn&#39;t make much sense to do so.</p></li></ul>',53),b=[E];function A(D,F,w,v,C,O){return i(),a("div",null,b)}const _=s(y,[["render",A]]);export{L as __pageData,_ as default};
