import{_ as t,c as d,o as a,a5 as r}from"./chunks/framework.CqnjdYks.js";const f=JSON.parse('{"title":"升级指南：Effect 从 v3.5.x 升级到 v3.6.0","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/material-system/effect-upgrade-documentation-for-v3.5-to-v3.6.md","filePath":"zh/manual/material-system/effect-upgrade-documentation-for-v3.5-to-v3.6.md"}'),e={name:"zh/manual/material-system/effect-upgrade-documentation-for-v3.5-to-v3.6.md"},n=r('<h1 id="升级指南-effect-从-v3-5-x-升级到-v3-6-0" tabindex="-1">升级指南：Effect 从 v3.5.x 升级到 v3.6.0 <a class="header-anchor" href="#升级指南-effect-从-v3-5-x-升级到-v3-6-0" aria-label="Permalink to &quot;升级指南：Effect 从 v3.5.x 升级到 v3.6.0&quot;">​</a></h1><h2 id="chunks-迁移" tabindex="-1">Chunks 迁移 <a class="header-anchor" href="#chunks-迁移" aria-label="Permalink to &quot;Chunks 迁移&quot;">​</a></h2><p>3.6.0将之前版本 chunks 文件夹中的零散文件分门别类的存放到子文件夹中，书写 chunk 的 #include 时请参考下面的表格：</p><h3 id="_1、公共函数库" tabindex="-1">1、公共函数库 <a class="header-anchor" href="#_1、公共函数库" aria-label="Permalink to &quot;1、公共函数库&quot;">​</a></h3><table><thead><tr><th>原文件</th><th>新路径</th></tr></thead><tbody><tr><td>common</td><td>common/common-define</td></tr><tr><td>texture-lod</td><td>common/texture/texture-lod</td></tr><tr><td>packing</td><td>common/data/packing</td></tr><tr><td>unpack</td><td>common/data/unpack</td></tr><tr><td>aces</td><td>common/color/aces</td></tr><tr><td>gamma</td><td>common/color/gamma</td></tr><tr><td>octahedron-transform</td><td>common/math/octahedron-transform</td></tr><tr><td>transform</td><td>common/math/transform</td></tr><tr><td>rect-area-light</td><td>common/lighting/rect-area-light</td></tr></tbody></table><h3 id="_2、uniform-定义" tabindex="-1">2、Uniform 定义 <a class="header-anchor" href="#_2、uniform-定义" aria-label="Permalink to &quot;2、Uniform 定义&quot;">​</a></h3><table><thead><tr><th>原文件</th><th>新路径</th></tr></thead><tbody><tr><td>cc-global</td><td>builtin/uniforms/cc-global</td></tr><tr><td>cc-local</td><td>builtin/uniforms/cc-local</td></tr><tr><td>cc-forward-light</td><td>builtin/uniforms/cc-forward-light</td></tr><tr><td>cc-environment</td><td>builtin/uniforms/cc-environment</td></tr><tr><td>cc-diffusemap</td><td>builtin/uniforms/cc-diffusemap</td></tr><tr><td>cc-shadow</td><td>builtin/uniforms/cc-shadow</td></tr><tr><td>cc-world-bound</td><td>builtin/uniforms/cc-world-bound</td></tr></tbody></table><h3 id="_3、通用-shader-主函数-仅限-legacy-shader" tabindex="-1">3、通用 Shader 主函数（仅限 legacy shader） <a class="header-anchor" href="#_3、通用-shader-主函数-仅限-legacy-shader" aria-label="Permalink to &quot;3、通用 Shader 主函数（仅限 legacy shader）&quot;">​</a></h3><table><thead><tr><th>原文件</th><th>新路径</th></tr></thead><tbody><tr><td>outline-vs</td><td>legacy/main-functions/outline-vs</td></tr><tr><td>outline-fs</td><td>legacy/main-functions/outline-fs</td></tr><tr><td>general-vs</td><td>legacy/main-functions/general-vs</td></tr></tbody></table><h3 id="_4、引擎功能模块及其他-仅限-legacy-shader" tabindex="-1">4、引擎功能模块及其他（仅限 legacy shader） <a class="header-anchor" href="#_4、引擎功能模块及其他-仅限-legacy-shader" aria-label="Permalink to &quot;4、引擎功能模块及其他（仅限 legacy shader）&quot;">​</a></h3><table><thead><tr><th>原文件</th><th>新路径</th></tr></thead><tbody><tr><td>cc-fog-base</td><td>legacy/fog-base</td></tr><tr><td>cc-shadow-map-base</td><td>legacy/shadow-map-base</td></tr><tr><td>morph</td><td>legacy/morph</td></tr><tr><td>cc-skinning</td><td>legacy/skinning</td></tr><tr><td>cc-local-batch</td><td>legacy/local-batch</td></tr><tr><td>lighting</td><td>legacy/lighting</td></tr><tr><td>lightingmap-fs</td><td>legacy/lightingmap-fs</td></tr><tr><td>cc-shadow-map-vs</td><td>legacy/shadow-map-vs</td></tr><tr><td>cc-shadow-map-fs</td><td>legacy/shadow-map-fs</td></tr><tr><td>cc-fog-vs</td><td>legacy/fog-vs</td></tr><tr><td>cc-fog-fs</td><td>legacy/fog-fs</td></tr><tr><td>lightingmap-vs</td><td>legacy/lightingmap-vs</td></tr><tr><td>decode</td><td>legacy/decode</td></tr><tr><td>decode-base</td><td>legacy/decode-base</td></tr><tr><td>decode-standard</td><td>legacy/decode-standard</td></tr><tr><td>input</td><td>legacy/input</td></tr><tr><td>input-standard</td><td>legacy/input-standard</td></tr><tr><td>output</td><td>legacy/output</td></tr><tr><td>output-standard</td><td>legacy/output-standard</td></tr><tr><td>shading-standard</td><td>legacy/shading-standard</td></tr><tr><td>shading-standard-base</td><td>legacy/shading-standard-base</td></tr><tr><td>shading-standard-additive</td><td>legacy/shading-standard-additive</td></tr><tr><td>shading-cluster-additive</td><td>legacy/shading-cluster-additive</td></tr><tr><td>shading-toon</td><td>legacy/shading-toon</td></tr><tr><td>standard-surface-entry</td><td>legacy/standard-surface-entry</td></tr></tbody></table><h3 id="_5、仅供内部使用" tabindex="-1">5、仅供内部使用 <a class="header-anchor" href="#_5、仅供内部使用" aria-label="Permalink to &quot;5、仅供内部使用&quot;">​</a></h3><table><thead><tr><th>原文件</th><th>新路径</th></tr></thead><tbody><tr><td>alpha-test</td><td>builtin/internal/alpha-test</td></tr><tr><td>cc-sprite-common</td><td>builtin/internal/sprite-common</td></tr><tr><td>cc-sprite-texture</td><td>builtin/internal/sprite-texture</td></tr><tr><td>embedded-alpha</td><td>builtin/internal/embedded-alpha</td></tr><tr><td>particle-common</td><td>builtin/internal/particle-common</td></tr></tbody></table>',13),c=[n];function o(i,l,s,h,m,u){return a(),d("div",null,c)}const b=t(e,[["render",o]]);export{f as __pageData,b as default};
