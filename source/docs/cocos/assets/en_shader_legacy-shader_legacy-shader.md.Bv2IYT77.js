import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"Legacy Shader","description":"","frontmatter":{},"headers":[],"relativePath":"en/shader/legacy-shader/legacy-shader.md","filePath":"en/shader/legacy-shader/legacy-shader.md","lastUpdated":1712305443000}'),s={name:"en/shader/legacy-shader/legacy-shader.md"},d=r('<h1 id="legacy-shader" tabindex="-1">Legacy Shader <a class="header-anchor" href="#legacy-shader" aria-label="Permalink to &quot;Legacy Shader&quot;">​</a></h1><p>Compare to Legacy Shader, Surface Shader unifies the shader process and exposes fewer details to the shader writers. Therefore, starting from version 3.72, Surface Shader appears as the default &#39;builtin-standard&#39;.</p><p>However, both Legacy Shader and Surface Shader have their pros and cons.</p><table><thead><tr><th style="text-align:left;">Type</th><th style="text-align:left;">Pros</th><th style="text-align:left;">Cons</th></tr></thead><tbody><tr><td style="text-align:left;">Legacy Shader</td><td style="text-align:left;">More flexible when facing special requirements</td><td style="text-align:left;">Exposes too many details to the users, makes it difficult to maintain when the engine is upgraded</td></tr><tr><td style="text-align:left;">Surface Shader</td><td style="text-align:left;">Unified shading process, no need to worry about details; User-level code is easier to maintain when the engine is upgraded</td><td style="text-align:left;">Need to well-understand the whole implementation mechanism to master;Limited customizable features</td></tr></tbody></table><p>In addition, the <code>builtin-unit.effect</code> offered by the engine still uses part of the legacy shader library.</p><p>Mastering Legacy Shader can also help you to understand more implementation details of Cocos Shaders.</p><ul><li><a href="./legacy-shader-builtins">Guide to Built-in Legacy Shaders</a></li><li><a href="./legacy-shader-func-struct">Legacy Shader Key Functions and Structures</a></li></ul>',7),l=[d];function i(n,o,h,c,f,g){return a(),t("div",null,l)}const p=e(s,[["render",i]]);export{u as __pageData,p as default};
