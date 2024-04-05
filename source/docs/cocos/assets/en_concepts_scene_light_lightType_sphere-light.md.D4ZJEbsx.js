import{_ as t,c as e,o as s,a4 as i}from"./chunks/framework.uQk9_EO2.js";const l="/docs/cocos/assets/sphere-light.CfqLLGk1.jpg",r="/docs/cocos/assets/sphere-light-edit.BtKtImjN.png",n="/docs/cocos/assets/sphere-light-prop.O9e29wCB.png",_=JSON.parse('{"title":"Spherical Lights","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/light/lightType/sphere-light.md","filePath":"en/concepts/scene/light/lightType/sphere-light.md","lastUpdated":1712305443000}'),a={name:"en/concepts/scene/light/lightType/sphere-light.md"},o=i('<h1 id="spherical-lights" tabindex="-1">Spherical Lights <a class="header-anchor" href="#spherical-lights" aria-label="Permalink to &quot;Spherical Lights&quot;">​</a></h1><p>Cocos Creator 3.x&#39;s spherical light is similar to v2.x&#39;s point light.</p><p>Spherical light spreads light evenly in all directions, similar to the light produced by a candle. The intensity of light on an object decreases as the distance from the light increases, and is zero when the distance exceeds the set light effect range.</p><p>In practical applications, it can be used to simulate lights such as torches, candles, and light bulbs to illuminate the surrounding environment within a certain distance.</p><p><img src="'+l+'" alt="sphere-light-edit"></p><p>The light location and color, as well as its illumination range can be clearly seen in the editor, as shown in the image below. The light range of the spherical light can be adjusted by modifying the <code>Range</code> property of the spherical light component in the <strong>Inspector</strong> panel.</p><p><img src="'+r+'" alt="sphere-light-edit"></p><p>Adding spherical lights to the scene can be done as described in <a href="./#adding-lights">Adding Lights</a>.</p><p>For the spherical light component interface, please refer to <a href="./__APIDOC__/en/class/SphereLight">SphereLight API</a>.</p><h2 id="sphere-light-properties" tabindex="-1">Sphere Light Properties <a class="header-anchor" href="#sphere-light-properties" aria-label="Permalink to &quot;Sphere Light Properties&quot;">​</a></h2><p><img src="'+n+'" alt="image"></p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Color</td><td style="text-align:left;">Sets the light color.</td></tr><tr><td style="text-align:left;">UseColorTemperature</td><td style="text-align:left;">Whether to enable the color temperature.</td></tr><tr><td style="text-align:left;">ColorTemperature</td><td style="text-align:left;">Adjusts the color temperature.</td></tr><tr><td style="text-align:left;">Size</td><td style="text-align:left;">Sets the light size.</td></tr><tr><td style="text-align:left;">Range</td><td style="text-align:left;">Sets the range of light effect.</td></tr><tr><td style="text-align:left;">Term</td><td style="text-align:left;">Sets the type of light intensity unit, including <strong>LUMINOUS_POWER</strong> and <strong>LUMINANCE</strong>.</td></tr><tr><td style="text-align:left;">LuminousPower</td><td style="text-align:left;">Luminous flux in <strong>lumens (lm)</strong>.<br>Effective when <strong>Term</strong> is set to <strong>LUMINOUS_POWER</strong>.</td></tr><tr><td style="text-align:left;">Luminance</td><td style="text-align:left;">Brightness in <strong>Candela per square meter (cd/m<sup>2</sup>)</strong>.<br>Effective when <strong>Term</strong> is set to <strong>LUMINANCE</strong>.</td></tr><tr><td style="text-align:left;">StaticSettings</td><td style="text-align:left;">Static lighting settings, please refer to <a href="./../lightmap">Lightmapping</a>.</td></tr></tbody></table><blockquote><p><strong>Note</strong>: currently, the <code>Size</code> property of the spherical light does not take effect in actual operation, as well as the display of shadows is not supported for now, we will optimize it in subsequent versions, please pay attention to the update announcement.</p></blockquote>',13),h=[o];function g(p,c,d,f,m,u){return s(),e("div",null,h)}const x=t(a,[["render",g]]);export{_ as __pageData,x as default};
