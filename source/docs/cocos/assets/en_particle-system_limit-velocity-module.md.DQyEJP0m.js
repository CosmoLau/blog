import{_ as t,c as e,o as l,a4 as i}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/limit_module.wNYtjQMO.png",u=JSON.parse('{"title":"Limit Velocity Overtime Module","description":"","frontmatter":{},"headers":[],"relativePath":"en/particle-system/limit-velocity-module.md","filePath":"en/particle-system/limit-velocity-module.md","lastUpdated":1712305443000}'),a={name:"en/particle-system/limit-velocity-module.md"},r=i('<h1 id="limit-velocity-overtime-module" tabindex="-1">Limit Velocity Overtime Module <a class="header-anchor" href="#limit-velocity-overtime-module" aria-label="Permalink to &quot;Limit Velocity Overtime Module&quot;">​</a></h1><p>The speed limit module is used to set the speed of the particles to gradually slow down over the life cycle.</p><p><img src="'+s+'" alt="limit_module"></p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Features</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>space</strong></td><td style="text-align:left;">In which coordinate system the speed is calculated.</td></tr><tr><td style="text-align:left;"><strong>limit</strong></td><td style="text-align:left;">Lower speed limit. When the speed exceeds this value, the current speed is linearly interpolated with this speed. It is valid when separateAxes is false.</td></tr><tr><td style="text-align:left;"><strong>dampen</strong></td><td style="text-align:left;">Interpolation of current speed and lower speed limit.</td></tr><tr><td style="text-align:left;"><strong>separateAxes</strong></td><td style="text-align:left;">Whether the three axes are restricted separately.</td></tr><tr><td style="text-align:left;"><strong>limit X,Y,Z</strong></td><td style="text-align:left;">The lower speed limits of the three axes are valid when separateAxes is true.</td></tr></tbody></table>',4),o=[r];function d(n,c,m,p,h,y){return l(),e("div",null,o)}const f=t(a,[["render",d]]);export{u as __pageData,f as default};
