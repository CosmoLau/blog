import{_ as t,c as e,o as i,a4 as s}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/widget-default.DZOD1K90.png",a="/docs/cocos/assets/widget-left-100px.CuFate1D.png",o="/docs/cocos/assets/widget-bottom-0.5.ChkVixAM.png",r="/docs/cocos/assets/widget-bottom-right-0px.DwqjFnLz.png",h="/docs/cocos/assets/widget-h-center.Bo1eEmlN.png",l="/docs/cocos/assets/widget-v-center-right-0.5.C5SvDrZv.png",d="/docs/cocos/assets/widget-h-stretch.ufheqJu6.png",p="/docs/cocos/assets/widget-v-stretch.pk_owPR3.png",c="/docs/cocos/assets/widget-margin-50px.B2lgGFMO.png",x=JSON.parse('{"title":"Widget Component Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/editor/widget.md","filePath":"en/ui-system/components/editor/widget.md","lastUpdated":1712305443000}'),g={name:"en/ui-system/components/editor/widget.md"},k=s('<h1 id="widget-component-reference" tabindex="-1">Widget Component Reference <a class="header-anchor" href="#widget-component-reference" aria-label="Permalink to &quot;Widget Component Reference&quot;">​</a></h1><p>Widget is a frequently used UI layout component. It can automatically align the current node to any position in the parent node&#39;s bounding box, or constrain the size, to make your game easily adaptable to different resolutions. About the alignment scheme, please see <a href="./../engine/widget-align">Widget Alignment</a> for details.</p><p><img src="'+n+'" alt="default"></p><p>Click the <strong>Add Component</strong> button at the bottom of the <strong>Inspector</strong> panel and select <strong>UI/Widget</strong> to add the Widget component to the node.</p><p>To use <code>Widget</code>, please refer to the <a href="./__APIDOC__/en/class/Widget">Widget API</a> documentation and the <a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/04.widget" target="_blank" rel="noreferrer">Widget</a> scene of the test-cases-3d project.</p><h2 id="widget-properties" tabindex="-1">Widget Properties <a class="header-anchor" href="#widget-properties" aria-label="Permalink to &quot;Widget Properties&quot;">​</a></h2><table><thead><tr><th>Properties</th><th>Function Explanation</th><th>Note</th></tr></thead><tbody><tr><td><strong>Top</strong></td><td>Upper border alignment</td><td>Once selected, an input field will appear to set the distance between the upper border of the current node and the upper border of the parent object.</td></tr><tr><td><strong>Bottom</strong></td><td>Lower border alignment</td><td>Once selected, an input field will appear to set the distance between the lower border of the current node and the lower border of the parent object.</td></tr><tr><td><strong>Left</strong></td><td>Left border alignment</td><td>Once selected, an input field will appear to set the distance between the left border of the current node and the left border of the parent object.</td></tr><tr><td><strong>Right</strong></td><td>Right border alignment</td><td>Once selected, an input field will appear to set the distance between the right border of the current node and the right border of the parent object.</td></tr><tr><td><strong>HorizontalCenter</strong></td><td>Horizontal center alignment</td><td></td></tr><tr><td><strong>VerticalCenter</strong></td><td>Vertical center alignment</td><td></td></tr><tr><td><strong>Target</strong></td><td>Alignment target</td><td>Specifies an alignment target that can only be one of the parent nodes of the current node. The default value is null, and when null, indicates the current parent.<br>If the parent node is the entire scene, it will be aligned to the visible area of the screen (<code>visibleRect</code>), and can be used to dock UI elements to the edge of the screen.</td></tr><tr><td><strong>Align Mode</strong></td><td>Specifies the alignment mode of the Widget, which determines when the widget should refresh at runtime</td><td>Normally set to <strong>ALWAYS</strong>, only to be initialized and realigned whenever the window size changes.<br>Set to <strong>ONCE</strong>, will only make alignment when the component is enabled.<br>Set to <strong>ON_WINDOW_RESIZE</strong>, will update Widget&#39;s alignment every time when the window changes.</td></tr></tbody></table><h2 id="border-alignment" tabindex="-1">Border alignment <a class="header-anchor" href="#border-alignment" aria-label="Permalink to &quot;Border alignment&quot;">​</a></h2><p>We can create a new Sprite node under the Canvas node, add a Widget component to the Sprite, and do the following test:</p><h3 id="left-alignment-left-border-distance-100-px" tabindex="-1">Left alignment, left border distance 100 px: <a class="header-anchor" href="#left-alignment-left-border-distance-100-px" aria-label="Permalink to &quot;Left alignment, left border distance 100 px:&quot;">​</a></h3><p><img src="'+a+'" alt="left-100px"></p><h3 id="bottom-alignment-bottom-border-distance-50" tabindex="-1">Bottom alignment, bottom border distance 50%: <a class="header-anchor" href="#bottom-alignment-bottom-border-distance-50" aria-label="Permalink to &quot;Bottom alignment, bottom border distance 50%:&quot;">​</a></h3><p>The percentage will take the width or height of the parent node as a benchmark.</p><p><img src="'+o+'" alt="bottom-0.5"></p><h3 id="bottom-right-alignment-border-distance-0-px" tabindex="-1">Bottom right alignment, border distance 0 px: <a class="header-anchor" href="#bottom-right-alignment-border-distance-0-px" aria-label="Permalink to &quot;Bottom right alignment, border distance 0 px:&quot;">​</a></h3><p><img src="'+r+'" alt="bottom-right-0px"></p><h2 id="center-alignment" tabindex="-1">Center Alignment <a class="header-anchor" href="#center-alignment" aria-label="Permalink to &quot;Center Alignment&quot;">​</a></h2><h3 id="horizontal-center-alignment" tabindex="-1">Horizontal center alignment: <a class="header-anchor" href="#horizontal-center-alignment" aria-label="Permalink to &quot;Horizontal center alignment:&quot;">​</a></h3><p><img src="'+h+'" alt="bottom-right-0px"></p><h3 id="vertical-center-alignment-and-right-border-distance-50" tabindex="-1">Vertical center alignment and right border distance 50%: <a class="header-anchor" href="#vertical-center-alignment-and-right-border-distance-50" aria-label="Permalink to &quot;Vertical center alignment and right border distance 50%:&quot;">​</a></h3><p><img src="'+l+'" alt="v-center-right-0.5"></p><h2 id="limit-size" tabindex="-1">Limit size <a class="header-anchor" href="#limit-size" aria-label="Permalink to &quot;Limit size&quot;">​</a></h2><p>If you align the left and right side at the same time, or align the top and bottom at the same time, then the size will be stretched in the corresponding direction.</p><p>Let us look at a demonstration. Place two rectangular Sprites in the Scene and take the bigger one as the dialog box background and the smaller one as the button on the dialog box. Take the button node as the child node of the dialog box and set the button into <strong>SLICED</strong> mode so that you can observe the stretch effect.</p><h3 id="horizontal-stretch-left-and-right-margin-10" tabindex="-1">Horizontal stretch, left and right margin 10%: <a class="header-anchor" href="#horizontal-stretch-left-and-right-margin-10" aria-label="Permalink to &quot;Horizontal stretch, left and right margin 10%:&quot;">​</a></h3><p><img src="'+d+'" alt="h-stretch"></p><h3 id="vertical-stretch-no-margins-on-each-end-and-horizontal-center-alignment" tabindex="-1">Vertical stretch, no margins on each end and horizontal center alignment: <a class="header-anchor" href="#vertical-stretch-no-margins-on-each-end-and-horizontal-center-alignment" aria-label="Permalink to &quot;Vertical stretch, no margins on each end and horizontal center alignment:&quot;">​</a></h3><p><img src="'+p+'" alt="v-stretch"></p><h3 id="stretch-in-the-horizontal-and-vertical-directions-margin-50-px" tabindex="-1">Stretch in the horizontal and vertical directions, margin 50 px: <a class="header-anchor" href="#stretch-in-the-horizontal-and-vertical-directions-margin-50-px" aria-label="Permalink to &quot;Stretch in the horizontal and vertical directions, margin 50 px:&quot;">​</a></h3><p><img src="'+c+`" alt="margin-50px"></p><h2 id="limitation-on-node-position-control" tabindex="-1">Limitation on node position control <a class="header-anchor" href="#limitation-on-node-position-control" aria-label="Permalink to &quot;Limitation on node position control&quot;">​</a></h2><p>If <strong>Align Mode</strong> property is set to <code>ALWAYS</code>, the Widget will set the alignment for the current node every frame at runtime according to the alignment policy you set. The <code>position</code> and <code>size</code> (<code>width</code>, <code>height</code>) properties of the node where the component is located may be restricted and cannot be freely modified via the API or animation system.</p><p>This is because the alignment set by the widget is processed at the end of each frame, so if you set the previously set alignment related properties in the Widget component, those settings will eventually be reset by the widget component&#39;s own settings.</p><p>To make sure you can update node&#39;s position or size during runtime:</p><ol><li>Set <strong>Align Mode</strong> property of Widget to <code>ONCE</code>, so it will only align during onEnable process.</li><li>Use Widget&#39;s API to update node&#39;s position and size, for example updating Widget&#39;s <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code> instead of node&#39;s <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code>.</li></ol><h3 id="modify-the-alignment-distance-in-script-code-example" tabindex="-1">Modify the alignment distance in script code. Example: <a class="header-anchor" href="#modify-the-alignment-distance-in-script-code-example" aria-label="Permalink to &quot;Modify the alignment distance in script code. Example:&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Widget } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Widget);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Set the default alignment unit to px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bottom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.top </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // The alignment unit is%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.isAbsoluteTop </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.isAbsoluteBottom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bottom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 10%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        widget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.top </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 10%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,37),m=[k];function E(b,y,u,f,w,F){return i(),e("div",null,m)}const A=t(g,[["render",E]]);export{x as __pageData,A as default};
