import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.uQk9_EO2.js";const l="/docs/cocos/assets/create-label-atlas.CB-aiwNF.png",o="/docs/cocos/assets/raw_texture_file.D2hf1R_X.png",r="/docs/cocos/assets/save-label-atlas.LbqRhyc4.png",m=JSON.parse('{"title":"LabelAtlas Asset","description":"","frontmatter":{},"headers":[],"relativePath":"en/asset/label-atlas.md","filePath":"en/asset/label-atlas.md","lastUpdated":1712305443000}'),n={name:"en/asset/label-atlas.md"},i=s('<h1 id="labelatlas-asset" tabindex="-1">LabelAtlas Asset <a class="header-anchor" href="#labelatlas-asset" aria-label="Permalink to &quot;LabelAtlas Asset&quot;">​</a></h1><p><strong>LabelAtlas</strong> asset is a user-defined asset, it&#39;s used for configuring a <strong>LabelAtlas</strong>.</p><h2 id="create-labelatlas-asset" tabindex="-1">Create LabelAtlas Asset <a class="header-anchor" href="#create-labelatlas-asset" aria-label="Permalink to &quot;Create LabelAtlas Asset&quot;">​</a></h2><p>In the <strong>Assets</strong> panel right-click on a folder, and click the context menu item <strong>Create -&gt; Label Atlas</strong>. It will create a <strong>LabelAtlas.labelatlas</strong> asset.</p><p><img src="'+l+'" alt="create label atlas"></p><p>Before using the <strong>LabelAtlas</strong> asset, it needs some configuration. Configure a pre-drawn picture that contains the font style, as shown below:</p><p><img src="'+o+'" alt="raw_texture_file"></p><h2 id="configuration-of-labelatlas-asset" tabindex="-1">Configuration of LabelAtlas asset <a class="header-anchor" href="#configuration-of-labelatlas-asset" aria-label="Permalink to &quot;Configuration of LabelAtlas asset&quot;">​</a></h2><p>After selecting a <strong>LabelAtlas</strong> asset in the <strong>Assets</strong> panel, the <strong>Inspector</strong> panel will display all configurable properties for the <strong>LabelAtlas</strong> asset.</p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>SpriteFrame</strong></td><td style="text-align:left;">Specify a pre-drawn picture that contains the font style you want</td></tr><tr><td style="text-align:left;"><strong>Item Width</strong></td><td style="text-align:left;">Specify the width of each character</td></tr><tr><td style="text-align:left;"><strong>Item Height</strong></td><td style="text-align:left;">Specify the height of each character</td></tr><tr><td style="text-align:left;"><strong>Start Char</strong></td><td style="text-align:left;">Specify the start char, even if the start char is a <em>space</em>, you also need insert a space.</td></tr></tbody></table><p>When the configuration is complete, click the tick button at the top right of the <strong>Inspector</strong> panel to save the settings.</p><p><img src="'+r+'" alt="save label atlas"></p><h2 id="using-labelatlas-asset" tabindex="-1">Using LabelAtlas asset <a class="header-anchor" href="#using-labelatlas-asset" aria-label="Permalink to &quot;Using LabelAtlas asset&quot;">​</a></h2><p>It&#39;s quite simple to use the <strong>LabelAtlas</strong> asset. Just setup a new Label component and drag the <strong>LabelAtlas</strong> asset to the <strong>font</strong> property of the Label component. Please refer to the <a href="./../ui-system/components/editor/label">Label Component</a> documentation for details.</p>',14),c=[i];function g(h,p,d,f,b,u){return a(),e("div",null,c)}const A=t(n,[["render",g]]);export{m as __pageData,A as default};
