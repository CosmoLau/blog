import{_ as e,c as t,o as a,a5 as l}from"./chunks/framework.CqnjdYks.js";const f=JSON.parse('{"title":"传统着色器 Legacy Shader","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/legacy-shader/legacy-shader.md","filePath":"zh/manual/shader/legacy-shader/legacy-shader.md"}'),r={name:"zh/manual/shader/legacy-shader/legacy-shader.md"},d=l('<h1 id="传统着色器-legacy-shader" tabindex="-1">传统着色器 Legacy Shader <a class="header-anchor" href="#传统着色器-legacy-shader" aria-label="Permalink to &quot;传统着色器 Legacy Shader&quot;">​</a></h1><p>相对于传统着色器而言，表面着色器让流程更统一，暴露给用户的细节更少，因此从 3.7.2 开始，Surface Shader 作为默认的 builtin-standard 出现。</p><p>但传统着色器（Legacy Shader) 与 表面着色器（Surface Shader）各有优缺：</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">优点</th><th style="text-align:left;">缺点</th></tr></thead><tbody><tr><td style="text-align:left;">Legacy Shader</td><td style="text-align:left;">在面对特殊需求时更加灵活</td><td style="text-align:left;">暴露过多细节给用户，引擎升级时不易维护</td></tr><tr><td style="text-align:left;">Surface Shader</td><td style="text-align:left;">统一的着色流程，无需关注细节；引擎升级时用户层代码更易维护</td><td style="text-align:left;">需要理解整个实现机制才能掌握；能够自定义的功能有限</td></tr></tbody></table><p>另外，引擎内置的 builtin-unlit 依然使用了部分 legacy shader 库。</p><p>掌握 Legacy Shader 也有助于理解更多实现细节。</p><ul><li><a href="./legacy-shader-builtins.html">内置 Legacy Shader 导读</a></li><li><a href="./legacy-shader-func-struct.html">Legacy Shader 主要函数与结构体</a></li></ul>',7),h=[d];function s(c,n,i,y,g,o){return a(),t("div",null,h)}const u=e(r,[["render",s]]);export{f as __pageData,u as default};
