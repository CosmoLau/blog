import{_ as t,c as e,o,a4 as a}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/shadowExample.DNIi6jAo.png",n="/docs/cocos/assets/enable-shadow.D5uImY0V.png",r="/docs/cocos/assets/enable-light-shadow.CdyODrNA.png",h="/docs/cocos/assets/set-meshrenderer.CAzWjED2.png",d="/docs/cocos/assets/planar-properties.3Nm_uTRZ.png",i="/docs/cocos/assets/shadowmap-properties.CvIVDJC-.png",S=JSON.parse('{"title":"Shadow","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/light/shadow.md","filePath":"en/concepts/scene/light/shadow.md","lastUpdated":1712305443000}'),l={name:"en/concepts/scene/light/shadow.md"},p=a('<h1 id="shadow" tabindex="-1">Shadow <a class="header-anchor" href="#shadow" aria-label="Permalink to &quot;Shadow&quot;">​</a></h1><p>In the 3D world, light and shadow have always been extremely important components that enrich the entire environment. High quality shadows can make the game world look more realistic.</p><p>Cocos Creator 3.0 currently supports both <strong>Planar</strong> and <strong>ShadowMap</strong> shadow types.</p><p><img src="'+s+'" alt="shadow"></p><h2 id="enable-shadow-effect" tabindex="-1">Enable Shadow Effect <a class="header-anchor" href="#enable-shadow-effect" aria-label="Permalink to &quot;Enable Shadow Effect&quot;">​</a></h2><p>To enable the shadow effect for an object, proceed as follows:</p><ol><li><p>Check <strong>Scene</strong> in the <strong>Hierarchy</strong> panel, and then check the <strong>Enabled</strong> property in the <strong>Shadows</strong> component of the <strong>Inspector</strong> panel.</p><p><img src="'+n+'" alt="enable-shadow"></p></li><li><p>Check <strong>light</strong> in the <strong>Hierarchy</strong> panel, and then check the <strong>Shadow Enabled</strong> property in the <strong>Dynamic Shadow Settings</strong> component of the <strong>Inspector</strong> panel.</p><p><img src="'+r+'" alt="enable-shadow"></p></li><li><p>Select the 3D node that needs to display shadows in the <strong>Hierarchy</strong> panel, and then set the <strong>ShadowCastingMode</strong> property to <strong>ON</strong> in the <strong>MeshRenderer</strong> component of the <strong>Inspector</strong> panel.</p><p><img src="'+h+'" alt="set-meshRenderer"></p><p>If the shadow type is <strong>ShadowMap</strong>, set the <strong>ReceiveShadow</strong> property on the <strong>MeshRenderer</strong> component to <strong>ON</strong>.</p></li></ol><blockquote><p><strong>Note</strong>: if the shadows are not displayed properly, adjust the direction of the directional light.</p></blockquote><h2 id="shadow-type" tabindex="-1">Shadow Type <a class="header-anchor" href="#shadow-type" aria-label="Permalink to &quot;Shadow Type&quot;">​</a></h2><p>The shadow type can be set in the <strong>Type</strong> property of the <strong>Shadows</strong> component.</p><h3 id="planar-shadow" tabindex="-1">Planar Shadow <a class="header-anchor" href="#planar-shadow" aria-label="Permalink to &quot;Planar Shadow&quot;">​</a></h3><p>The Planar shadow type is generally used for simpler scenes.</p><p><img src="'+d+'" alt="planar-properties"></p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Enabled</strong></td><td style="text-align:left;">Whether to enable shadow effect</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">Shadow type</td></tr><tr><td style="text-align:left;"><strong>Saturation</strong></td><td style="text-align:left;">Set the shadow saturation, it is recommended to set it as <strong>1</strong>. If it is necessary to reduce the saturation of the directional light shadows, it is recommended to do it by increasing the ambient light instead of adjusting this value</td></tr><tr><td style="text-align:left;"><strong>ShadowColor</strong></td><td style="text-align:left;">Shadow color</td></tr><tr><td style="text-align:left;"><strong>Normal</strong></td><td style="text-align:left;">The normal line perpendicular to the shadow, used to adjust the slope of the shadow</td></tr><tr><td style="text-align:left;"><strong>Distance</strong></td><td style="text-align:left;">The distance of the shadow in the direction of the normal to the origin of the coordinate</td></tr></tbody></table><p>Adjust the direction of the directional light to adjust the position of the shadow.</p><blockquote><p><strong>Note</strong>: planar shadows are only cast on planar surfaces, not on objects, which means that the <strong>ReceiveShadow</strong> property in the <strong>MeshRenderer</strong> component is invalid.</p></blockquote><h3 id="shadowmap" tabindex="-1">ShadowMap <a class="header-anchor" href="#shadowmap" aria-label="Permalink to &quot;ShadowMap&quot;">​</a></h3><p>ShadowMap renders the scene with the lights as the viewpoint. From the position of the lights, the places in the scene that are not visible are where the shadows are created.</p><p><img src="'+i+'" alt="shadow map panel details"></p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Enabled</strong></td><td style="text-align:left;">Whether to enable the shadow effect.</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">Choose the shadow type.</td></tr><tr><td style="text-align:left;"><strong>MaxReceived</strong></td><td style="text-align:left;">The maximum number of lights supported for shadow generation, default is 4, can be adjusted as needed.</td></tr><tr><td style="text-align:left;"><strong>ShadowMapSize</strong></td><td style="text-align:left;">Set the texture size of the shadow, Currently supports <strong>Low_256x256</strong>, <strong>Medium_512x512</strong>, <strong>High_1024x1024</strong>, <strong>Ultra_2048x2048</strong> four kinds of precision textures.</td></tr></tbody></table><blockquote><p><strong>Note</strong>: starting with v3.3, the <strong>Linear</strong> and <strong>Packing</strong> options for Shadows in the <strong>Inspector</strong> panel have been removed, and Creator will automatically determine the hardware capabilities and choose the best way to render the shadows.</p></blockquote><p>ShadowMap receives and displays shadow effects generated by other objects when <strong>ReceiveShadow</strong> on the object <strong>MeshRenderer</strong> component is enabled.</p><p>ShadowMap is generally used for scenes that require more realistic and complex light and shadow effects. The downside is that if the lights is not moved, then the previously generated Shadow Map can be reused, while once the lights is moved, then a new ShadowMap needs to be recalculated.</p><h2 id="support-dynamic-batching-to-improve-performance" tabindex="-1">Support dynamic batching to improve performance <a class="header-anchor" href="#support-dynamic-batching-to-improve-performance" aria-label="Permalink to &quot;Support dynamic batching to improve performance&quot;">​</a></h2><p>For models with <code>instancing</code> enabled in the material, the planar shadow will automatically draw with <code>instancing</code> as well, see the <a href="./../../../engine/renderable/model-component#about-dynamic-batching">Dynamic Batching</a> documentation for details.</p>',25),c=[p];function g(w,m,f,y,b,u){return o(),e("div",null,c)}const _=t(l,[["render",g]]);export{S as __pageData,_ as default};
