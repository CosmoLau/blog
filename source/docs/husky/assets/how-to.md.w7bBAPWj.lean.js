import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.BoNnCkFp.js";const u=JSON.parse('{"title":"How To","description":"","frontmatter":{},"headers":[],"relativePath":"how-to.md","filePath":"how-to.md"}'),n={name:"how-to.md"},t=e(`<h1 id="how-to" tabindex="-1">How To <a class="header-anchor" href="#how-to" aria-label="Permalink to &quot;How To&quot;">​</a></h1><h2 id="adding-a-new-hook" tabindex="-1">Adding a New Hook <a class="header-anchor" href="#adding-a-new-hook" aria-label="Permalink to &quot;Adding a New Hook&quot;">​</a></h2><p>Adding a hook is as simple as creating a file. This can be accomplished using your favorite editor, a script or a basic echo command. For example, on Linux/macOS:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;npm test&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/pre-commit</span></span></code></pre></div><h2 id="startup-files" tabindex="-1">Startup files <a class="header-anchor" href="#startup-files" aria-label="Permalink to &quot;Startup files&quot;">​</a></h2><p>Husky allows you to execute local commands before running hooks. It reads commands from these files:</p><ul><li><code>$XDG_CONFIG_HOME/husky/init.sh</code></li><li><code>~/.config/husky/init.sh</code></li><li><code>~/.huskyrc</code> (deprecated)</li></ul><p>On Windows: <code>C:\\Users\\yourusername\\.config\\husky\\init.sh</code></p><h2 id="skipping-git-hooks" tabindex="-1">Skipping Git Hooks <a class="header-anchor" href="#skipping-git-hooks" aria-label="Permalink to &quot;Skipping Git Hooks&quot;">​</a></h2><h3 id="for-a-single-command" tabindex="-1">For a Single Command <a class="header-anchor" href="#for-a-single-command" aria-label="Permalink to &quot;For a Single Command&quot;">​</a></h3><p>Most Git commands include a <code>-n/--no-verify</code> option to skip hooks:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Skips Git hooks</span></span></code></pre></div><p>For commands without this flag, disable hooks temporarily with HUSKY=0:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HUSKY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Temporarily disables all Git hooks</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Hooks will run again</span></span></code></pre></div><h3 id="for-multiple-commands" tabindex="-1">For multiple commands <a class="header-anchor" href="#for-multiple-commands" aria-label="Permalink to &quot;For multiple commands&quot;">​</a></h3><p>To disable hooks for an extended period (e.g., during rebase/merge):</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HUSKY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Disables all Git hooks</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HUSKY</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Re-enables hooks</span></span></code></pre></div><h3 id="for-a-gui-or-globally" tabindex="-1">For a GUI or Globally <a class="header-anchor" href="#for-a-gui-or-globally" aria-label="Permalink to &quot;For a GUI or Globally&quot;">​</a></h3><p>To disable Git hooks in a GUI client or globally, modify the husky config:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.config/husky/init.sh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HUSKY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Husky won&#39;t install and won&#39;t run hooks on your machine</span></span></code></pre></div><h2 id="ci-server-and-docker" tabindex="-1">CI server and Docker <a class="header-anchor" href="#ci-server-and-docker" aria-label="Permalink to &quot;CI server and Docker&quot;">​</a></h2><p>To avoid installing Git Hooks on CI servers or in Docker, use <code>HUSKY=0</code>. For instance, in GitHub Actions:</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://docs.github.com/en/actions/learn-github-actions/variables</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  HUSKY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>If installing only <code>dependencies</code> (not <code>devDependencies</code>), the <code>&quot;prepare&quot;: &quot;husky&quot;</code> script may fail because Husky won&#39;t be installed.</p><p>You have multiple solutions.</p><p>Modify the <code>prepare</code> script to never fail:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// package.json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky || true&quot;</span></span></code></pre></div><p>You&#39;ll still get a <code>command not found</code> error message in your output which may be confusing. To make it silent, create <code>.husky/install.mjs</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Skip Husky install in production and CI</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> husky</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;husky&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">husky</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>Then, use it in <code>prepare</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node .husky/install.mjs&quot;</span></span></code></pre></div><h2 id="testing-hooks-without-committing" tabindex="-1">Testing Hooks Without Committing <a class="header-anchor" href="#testing-hooks-without-committing" aria-label="Permalink to &quot;Testing Hooks Without Committing&quot;">​</a></h2><p>To test a hook, add <code>exit 1</code> to the hook script to abort the Git command:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your WIP script</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;testing pre-commit code&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A commit will not be created</span></span></code></pre></div><h2 id="project-not-in-git-root-directory" tabindex="-1">Project Not in Git Root Directory <a class="header-anchor" href="#project-not-in-git-root-directory" aria-label="Permalink to &quot;Project Not in Git Root Directory&quot;">​</a></h2><p>Husky doesn&#39;t install in parent directories (<code>../</code>) for security reasons. However, you can change the directory in the <code>prepare</code> script.</p><p>Consider this project structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── .git/</span></span>
<span class="line"><span>├── backend/  # No package.json</span></span>
<span class="line"><span>└── frontend/ # Package.json with husky</span></span></code></pre></div><p>Set your prepare script like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cd .. &amp;&amp; husky frontend/.husky&quot;</span></span></code></pre></div><p>In your hook script, change the directory back to the relevant subdirectory:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># frontend/.husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frontend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><h2 id="non-shell-hooks" tabindex="-1">Non-shell hooks <a class="header-anchor" href="#non-shell-hooks" aria-label="Permalink to &quot;Non-shell hooks&quot;">​</a></h2><p>In order to run scripts that require the use of a scripting language, use the following pattern for each applicable hook:</p><p>(Example using hook <code>pre-commit</code> and NodeJS)</p><ol><li>Create an entrypoint for the hook:<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.husky/pre-commit</span></span></code></pre></div></li><li>In the file add the following<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/pre-commit.js</span></span></code></pre></div></li><li>in <code>.husky/pre-commit.js</code><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Your NodeJS code</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div></li></ol><h2 id="bash" tabindex="-1">Bash <a class="header-anchor" href="#bash" aria-label="Permalink to &quot;Bash&quot;">​</a></h2><p>Hook scripts need to be POSIX compliant to ensure best compatibility as not everyone has <code>bash</code> (e.g. Windows users).</p><p>That being said, if your team doesn&#39;t use Windows, you can use Bash this way:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Put your bash script inside</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># ...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><h2 id="node-version-managers-and-guis" tabindex="-1">Node Version Managers and GUIs <a class="header-anchor" href="#node-version-managers-and-guis" aria-label="Permalink to &quot;Node Version Managers and GUIs&quot;">​</a></h2><p>If you&#39;re using Git hooks in GUIs with Node installed via a version manager (like <code>nvm</code>, <code>n</code>, <code>fnm</code>, <code>asdf</code>, <code>volta</code>, etc...), you might face a <code>command not found</code> error due to <code>PATH</code> environment variable issues.</p><h3 id="understanding-path-and-version-managers" tabindex="-1">Understanding <code>PATH</code> and Version Managers <a class="header-anchor" href="#understanding-path-and-version-managers" aria-label="Permalink to &quot;Understanding \`PATH\` and Version Managers&quot;">​</a></h3><p><code>PATH</code> is an environment variable containing a list of directories. Your shell searches these directories for commands. If it doesn&#39;t find a command, you get a <code>command not found</code> message.</p><p>Run <code>echo $PATH</code> in a shell to view its contents.</p><p>Version managers work by:</p><ol><li>Adding initialization code to your shell startup file (<code>.zshrc</code>, <code>.bashrc</code>, etc.), which runs each time you open a terminal.</li><li>Downloading Node versions to a directory in your home folder.</li></ol><p>For example, if you have two Node versions:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/version-manager/Node-X/node</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/version-manager/Node-Y/node</span></span></code></pre></div><p>Opening a terminal initializes the version manager, which picks a version (say <code>Node-Y</code>) and prepends its path to <code>PATH</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PATH</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/version-manager/Node-Y/:...</span></span></code></pre></div><p>Now, node refers to <code>Node-Y</code>. Switching to <code>Node-X</code> changes <code>PATH</code> accordingly:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PATH</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/version-manager/Node-X/:...</span></span></code></pre></div><p>The issue arises because GUIs, launched outside a terminal, don&#39;t initialize the version manager, leaving <code>PATH</code> without the Node install path. Thus, Git hooks from GUIs often fail.</p><h3 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h3><p>Husky sources <code>~/.config/husky/init.sh</code> before each Git hook. Copy your version manager initialization code here to ensure it runs in GUIs.</p><p>Example with <code>nvm</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.config/husky/init.sh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.nvm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # This loads nvm</span></span></code></pre></div><p>Alternatively, if your shell startup file is fast and lightweight, source it directly:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.config/husky/init.sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><h2 id="manual-setup" tabindex="-1">Manual setup <a class="header-anchor" href="#manual-setup" aria-label="Permalink to &quot;Manual setup&quot;">​</a></h2><p>Git needs to be configured and husky needs to setup files in <code>.husky/</code>.</p><p>Run the <code>husky</code> command once in your repo. Ideally, include it in the <code>prepare</code> script in <code>package.json</code> for automatic execution after each install (recommended).</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-b0o93" id="tab-FkzyuFY" checked="checked"><label for="tab-FkzyuFY">npm</label><input type="radio" name="group-b0o93" id="tab-vKJofGV"><label for="tab-vKJofGV">pnpm</label><input type="radio" name="group-b0o93" id="tab-ABwyqOq"><label for="tab-ABwyqOq">yarn</label><input type="radio" name="group-b0o93" id="tab-86nzRJG"><label for="tab-86nzRJG">bun</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Yarn doesn&#39;t support prepare script</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;postinstall&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Include this if publishing to npmjs.com</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pinst --disable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;postpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pinst --enable&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>Run <code>prepare</code> once:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NF9aj" id="tab-k-FGXM5" checked="checked"><label for="tab-k-FGXM5">npm</label><input type="radio" name="group-NF9aj" id="tab-DWipnM2"><label for="tab-DWipnM2">pnpm</label><input type="radio" name="group-NF9aj" id="tab-ECdblBl"><label for="tab-ECdblBl">yarn</label><input type="radio" name="group-NF9aj" id="tab-FprS10v"><label for="tab-FprS10v">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prepare</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prepare</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Yarn doesn&#39;t support \`prepare\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postinstall</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prepare</span></span></code></pre></div></div></div><p>Create a <code>pre-commit</code> file in the <code>.husky/</code> directory:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-okwht" id="tab--YZqBnA" checked="checked"><label for="tab--YZqBnA">npm</label><input type="radio" name="group-okwht" id="tab-s1u8R6O"><label for="tab-s1u8R6O">pnpm</label><input type="radio" name="group-okwht" id="tab-OSJb5zp"><label for="tab-OSJb5zp">yarn</label><input type="radio" name="group-okwht" id="tab-C3E57l3"><label for="tab-C3E57l3">bun</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div></div></div>`,79),l=[t];function p(h,o,k,d,r,c){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{u as __pageData,y as default};
