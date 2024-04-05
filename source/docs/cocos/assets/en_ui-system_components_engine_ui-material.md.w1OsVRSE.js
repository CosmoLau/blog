import{_ as e,c as t,o as s,a4 as i}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/UIMaterial.BxSX7kGp.png",f=JSON.parse('{"title":"Custom Materials for 2D Rendering Objects","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/engine/ui-material.md","filePath":"en/ui-system/components/engine/ui-material.md","lastUpdated":1712305443000}'),o={name:"en/ui-system/components/engine/ui-material.md"},n=i('<h1 id="custom-materials-for-2d-rendering-objects" tabindex="-1">Custom Materials for 2D Rendering Objects <a class="header-anchor" href="#custom-materials-for-2d-rendering-objects" aria-label="Permalink to &quot;Custom Materials for 2D Rendering Objects&quot;">​</a></h1><p>Custom materials for 2D rendering objects are a best practice to extend the performance of 2D rendering objects and enhance the capabilities of 2D rendering objects themselves, allowing for cool rendering effects such as dissolve and glow.</p><p>Most of the 2D renderable components in v3.0 support the use of custom materials, with the following interface (using the Sprite component as an example).</p><p><img src="'+a+`" alt="UIMaterial"></p><p>The usage is no different from other built-in materials, just drag and drop the material to be used into the <strong>CustomMaterial</strong> property box, but there are some points to note as follows:</p><ol><li><p>When no custom material is specified, the built-in material will be used for rendering, please refer to the <a href="./../editor/sprite">Sprite Component Reference</a> documentation.</p></li><li><p>2D rendering objects do not support multiple materials, the maximum number of custom materials is one.</p></li><li><p>Please use a 2D-specific shader such as <strong>builtin-spine</strong> or <strong>builtin-sprite</strong> to customize materials, do not choose a shader used by other 3D components.</p></li><li><p>The <strong>Grayscale</strong> property on the panel is disabled when a custom material for 2D rendering objects is used, and the user can choose to implement this feature in the material itself.</p></li><li><p>If the BlendFactor is set in the code, when a custom material is used, the BlendFactor setting in the custom material will prevail.</p></li><li><p>When a custom material is used, the depth detection information of the component will be based on the material. To achieve occlusion with 3D objects, please use custom materials and turn on depth detection. See the example <a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/2D" target="_blank" rel="noreferrer">2d-rendering-in-3d</a>.</p></li><li><p>If you want to change the properties of the custom material, it can be done by getting the <strong>customMaterial</strong> on the 2D renderer component as following code( take Sprite for example):</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> spriteComp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Sprite);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> material </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> spriteComp.customMaterial;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//material.setProperty(proName,val)</span></span></code></pre></div></li></ol><h2 id="write-your-own-2d-shader" tabindex="-1">Write your own 2D Shader <a class="header-anchor" href="#write-your-own-2d-shader" aria-label="Permalink to &quot;Write your own 2D Shader&quot;">​</a></h2><p>If the built-in shaders does not meet the demand, please refer to the <a href="./../../../shader/write-effect-2d-sprite-gradient">2D Sprite Effect：Gradient</a> to customize the shader.</p>`,8),r=[n];function l(p,h,c,d,m,u){return s(),t("div",null,r)}const k=e(o,[["render",l]]);export{f as __pageData,k as default};