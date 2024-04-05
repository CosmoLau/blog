import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/pbr-lighting.5KFI9NSy.jpg",r="/docs/cocos/assets/light-bulb.CDDCjsmF.jpg",s="/docs/cocos/assets/light-power.DipjGgI5.jpg",n="/docs/cocos/assets/color-temp-of-day.C06RwsFu.jpg",l="/docs/cocos/assets/kelvin.D01gAVqt.jpg",h="/docs/cocos/assets/light-bulb-size.BNM16i1m.png",v=JSON.parse('{"title":"Physically Based Lighting","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/light/pbr-lighting.md","filePath":"en/concepts/scene/light/pbr-lighting.md","lastUpdated":1712305443000}'),c={name:"en/concepts/scene/light/pbr-lighting.md"},p=a('<h1 id="physically-based-lighting" tabindex="-1">Physically Based Lighting <a class="header-anchor" href="#physically-based-lighting" aria-label="Permalink to &quot;Physically Based Lighting&quot;">​</a></h1><p>The light parameters are described in Cocos Creator using photometric units. Based on the photometric units, all the relevant parameters of the light can be converted into real-world physical values. In this way, designers can adjust the <strong>light intensity</strong>, <strong>color</strong>, <strong>range</strong>, and other information based on lighting-related industrial parameters and the actual physical parameters of the real environment to make the overall lighting effect more in line with the real natural environment.</p><p><img src="'+o+'" alt="pbr lighting"></p><h2 id="lights-in-the-real-world" tabindex="-1">Lights in the Real World <a class="header-anchor" href="#lights-in-the-real-world" aria-label="Permalink to &quot;Lights in the Real World&quot;">​</a></h2><p>The physically based lighting matches the description of lights in the real world. In real environments, light products have their own industrial parameters:</p><p><img src="'+r+'" alt="light bulb size"></p><p>The product packaging states many important industrial parameters of a bulb:</p><ul><li><strong>Luminous Flux</strong></li><li><strong>Color Temperature</strong></li><li><strong>Size</strong></li></ul><p>These three important parameters affect the performance of lights in the real world, and it is important to focus on the physical meaning of these three parameters below.</p><h2 id="photometric-units" tabindex="-1">Photometric Units <a class="header-anchor" href="#photometric-units" aria-label="Permalink to &quot;Photometric Units&quot;">​</a></h2><p><strong>Photometric Units</strong> are used to calculate the intensity (size) and direction of light.</p><ul><li><p><strong>Luminous Flux</strong></p><p>The unit is <strong>lumens (lm)</strong>, the total light energy emitted by a light or received by an illuminated object per unit of time. Changing the size of the light will not affect the scene lighting effect.</p></li><li><p><strong>Luminance</strong></p><p>The unit is <strong>Candela per square meter (cd/m<sup>2</sup>)</strong>, the total luminous flux emitted by a light per unit area in a given direction, per unit area. Changing the size of the light affects the scene lighting effect.</p></li><li><p><strong>Illuminance</strong></p><p>The unit is <strong>lux or lx</strong>, the amount of luminous flux received per unit area. This value is affected by the distance the light travels, and for the same light, when the light is twice as far away, the illuminance is reduced to one-fourth of the original, in an inverse square relationship.</p></li></ul><p>In the real world, because the important physical parameters describing lights are different, we usually use <strong>Luminous Flux</strong> and <strong>Luminance</strong> to describe common household lights with illuminated areas, and <strong>Illuminance</strong> to describe sunlight.</p><p><img src="'+s+'" alt="light power"></p><h2 id="color-temperature" tabindex="-1">Color Temperature <a class="header-anchor" href="#color-temperature" aria-label="Permalink to &quot;Color Temperature&quot;">​</a></h2><p><strong>Color Temperature</strong> is the color of an absolute blackbody after it has been warmed from absolute zero (-273°C).</p><p>Color temperature is an important property that affects the color of a light and is an optional property that also participates in the color component of the light when color temperature is enabled.</p><p>The ambient color temperature also changes dynamically in real-world environments at different times of the day:</p><p><img src="'+n+'" alt="color temp of day"></p><p>Refer to the following table:</p><p><img src="'+l+'" alt="kelvin"></p><h2 id="size" tabindex="-1">Size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;Size&quot;">​</a></h2><p>Real-world lights have real physical dimensions, and for the <strong>same luminous flux</strong>, the size of the light affects <strong>brightness</strong> and <strong>illuminance</strong>.</p><p><img src="'+h+'" alt="light bulb size"></p>',24),g=[p];function d(m,u,f,b,_,y){return i(),t("div",null,g)}const T=e(c,[["render",d]]);export{v as __pageData,T as default};
