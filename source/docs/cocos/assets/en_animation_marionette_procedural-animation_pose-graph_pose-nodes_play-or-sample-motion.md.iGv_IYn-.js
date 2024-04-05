import{_ as t,c as e,o as a,a4 as o}from"./chunks/framework.uQk9_EO2.js";const y=JSON.parse('{"title":"Play or Sample Animation","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/procedural-animation/pose-graph/pose-nodes/play-or-sample-motion.md","filePath":"en/animation/marionette/procedural-animation/pose-graph/pose-nodes/play-or-sample-motion.md","lastUpdated":1712305443000}'),n={name:"en/animation/marionette/procedural-animation/pose-graph/pose-nodes/play-or-sample-motion.md"},i=o('<h1 id="play-or-sample-animation" tabindex="-1">Play or Sample Animation <a class="header-anchor" href="#play-or-sample-animation" aria-label="Permalink to &quot;Play or Sample Animation&quot;">​</a></h1><p>The pose graph provides two types of nodes for reading poses from animations: play animation nodes and sample animation nodes.</p><p>In the following, &quot;action&quot; refers to animation clips or animation blends.</p><h2 id="play-animation" tabindex="-1">Play Animation <a class="header-anchor" href="#play-animation" aria-label="Permalink to &quot;Play Animation&quot;">​</a></h2><p>The <strong>Play animation node</strong> node plays the specified action, updates it every frame, and gets the pose of the current frame of the animation as output.</p><table><thead><tr><th style="text-align:left;">Input</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Start Time</code></td><td style="text-align:left;">When to start playing the action from whenever this node is reentered. Unit is in seconds.</td></tr><tr><td style="text-align:left;"><code>Speed Multiplier</code></td><td style="text-align:left;">The playback rate of the action.</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Action</code></td><td style="text-align:left;">The action to sample.</td></tr></tbody></table><h2 id="sampled-animation" tabindex="-1">Sampled Animation <a class="header-anchor" href="#sampled-animation" aria-label="Permalink to &quot;Sampled Animation&quot;">​</a></h2><p>The <strong>Sampled Animation Node</strong> samples the pose of the specified action at a given moment as output.</p><table><thead><tr><th style="text-align:left;">Input</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Time</code></td><td style="text-align:left;">The time to sample.</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Action</code></td><td style="text-align:left;">The action to sample.</td></tr><tr><td style="text-align:left;"><code>Use Normalized Time</code></td><td style="text-align:left;">Whether the node input <code>time</code> specifies a normalized time. The normalized time is the progress of the action in the range [0, 1]. For example, 1 means the last frame of the action, and 0.5 means 50% of the action progress.</td></tr></tbody></table>',11),l=[i];function r(s,d,p,m,h,c){return a(),e("div",null,l)}const g=t(n,[["render",r]]);export{y as __pageData,g as default};
