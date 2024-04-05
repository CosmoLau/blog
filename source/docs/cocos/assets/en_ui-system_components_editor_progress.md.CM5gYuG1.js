import{_ as t,c as e,o as r,a4 as o}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/add-progressbar.C9Tf_V-6.png",_=JSON.parse('{"title":"ProgressBar Component Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/editor/progress.md","filePath":"en/ui-system/components/editor/progress.md","lastUpdated":1712305443000}'),n={name:"en/ui-system/components/editor/progress.md"},a=o('<h1 id="progressbar-component-reference" tabindex="-1">ProgressBar Component Reference <a class="header-anchor" href="#progressbar-component-reference" aria-label="Permalink to &quot;ProgressBar Component Reference&quot;">​</a></h1><p><strong>ProgressBar</strong> is usually used to show the progress of a certain operation in the game. Add the <strong>ProgressBar</strong> component to a node and associate a <strong>Bar Sprite</strong> to this component. Then the <strong>Bar Sprite</strong> can be controlled to show progression in the scene.</p><p><img src="'+s+'" alt="add-progressbar"></p><p>Click the <strong>Add Component</strong> button at the bottom of the <strong>Inspector</strong> panel and select <strong>UI/ProgressBar</strong> to add the <strong>ProgressBar</strong> component to the node.</p><p>To use <code>Progress</code>, please refer to the <a href="./__APIDOC__/en/class/ProgressBar">Mask API</a> documentation and the <a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/11.progress" target="_blank" rel="noreferrer">Progress</a> scene of the test-cases-3d project.</p><h2 id="progressbar-properties" tabindex="-1">ProgressBar Properties <a class="header-anchor" href="#progressbar-properties" aria-label="Permalink to &quot;ProgressBar Properties&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Function Explanation</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>BarSprite</strong></td><td style="text-align:left;">The <strong>Sprite</strong> component needed for rendering <strong>ProgressBar</strong>. It can be linked by dragging a node with the <strong>Sprite</strong> component to this property</td></tr><tr><td style="text-align:left;"><strong>Mode</strong></td><td style="text-align:left;">Currently supports the <strong>HORIZONTAL</strong>, <strong>VERTICAL</strong> and <strong>FILLED</strong> modes. The initial direction can be changed by cooperating with the <strong>reverse</strong> property</td></tr><tr><td style="text-align:left;"><strong>Progress</strong></td><td style="text-align:left;">Floating point. The value range is <strong>0~1</strong>, and values outside the range are not allowed.</td></tr><tr><td style="text-align:left;"><strong>Reverse</strong></td><td style="text-align:left;">Boolean value. The default fill direction is from left to right / bottom to top, when enable, it becomes right to left / top to bottom</td></tr><tr><td style="text-align:left;"><strong>Total Length</strong></td><td style="text-align:left;">The total length / total width of the <strong>BarSprite</strong> when the <strong>ProgressBar</strong> is at <strong>100%</strong>. In <strong>FILLED</strong> mode, <strong>Total Length</strong> represents the percentage of the total display range for <strong>Bar Sprite</strong>, with values ranging from <strong>0 to 1</strong></td></tr></tbody></table><h2 id="detailed-explanation" tabindex="-1">Detailed Explanation <a class="header-anchor" href="#detailed-explanation" aria-label="Permalink to &quot;Detailed Explanation&quot;">​</a></h2><p>After adding the ProgressBar component, drag a node with the <strong>Sprite</strong> component from the <strong>Hierarchy</strong> to the BarSprite property. Then you can control the display of the ProgressBar by dragging the progress sliding block.</p><p>Bar Sprite could be its own node, child node or any node that comes with the <strong>Sprite</strong> component. Also, Bar Sprite can freely choose the <code>SIMPLE</code>, <code>SLICED</code> or <code>FILLED</code> render types.</p><p>If the mode of the progress bar is <strong>FILLED</strong>, the <strong>Type</strong> of <strong>BarSprite</strong> should to be set to <strong>FILLED</strong>, otherwise a warning will appear.</p>',11),g=[a];function i(d,l,p,h,c,f){return r(),e("div",null,g)}const b=t(n,[["render",i]]);export{_ as __pageData,b as default};
