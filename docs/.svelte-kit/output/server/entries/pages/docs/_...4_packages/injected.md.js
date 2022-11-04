import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-8615df27.js";
import { C as CodeFence } from "../../../../chunks/CodeFence-7825ab22.js";
import "clsx";
import { C as CodeInline } from "../../../../chunks/CodeInline-cb589915.js";
import { L as Link } from "../../../../chunks/Link-6f161fc2.js";
/* empty css                                                                 */import { T as Tabs, a as TabPanel } from "../../../../chunks/Tabs-dd4460a7.js";
import "../../../../chunks/contexts-8ef4e4d1.js";
import "../../../../chunks/ssr-eca022de.js";
const Injected = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>@web3-onboard/injected-wallets</h1>
<p>This module lets web3-onboard automatically detect Browser Injected Wallets such as Metamask or Coinbase Wallet. We recommend you install this module to get the most out of your w3o implementation. This module supports ${validate_component(Link, "Link").$$render($$result, {
    href: "https://eips.ethereum.org/EIPS/eip-1193",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {}, {
    default: () => {
      return `EIP-1193`;
    }
  })} and ${validate_component(Link, "Link").$$render($$result, {
    href: "https://onboard.blocknative.com/docs/packages/injected#injected-wallets-supported-natively",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {}, {
    default: () => {
      return `recognizes many injected wallets natively`;
    }
  })}.</p>
<p>Note: Make sure to install the core module before installing other modules to w3o.</p>
<h2 id="${"install"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#install",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Install</h2>
${validate_component(Tabs, "Tabs").$$render($$result, { values: ["yarn", "npm"] }, {}, {
    default: () => {
      return `${validate_component(TabPanel, "TabPanel").$$render($$result, { value: "yarn" }, {}, {
        default: () => {
          return `${validate_component(CodeFence, "CodeFence").$$render($$result, {
            lang: "bash",
            ext: "sh",
            linesCount: 2,
            rawCode: "yarn add @web3-onboard/injected-wallets\n",
            showCopyCode: true,
            code: '<pre><code><span class="line"><span style="color: #A6ACCD">yarn add @web3-onboard/injected-wallets</span></span>\n<span class="line"></span></code></pre>'
          }, {}, {})}`;
        }
      })}
  ${validate_component(TabPanel, "TabPanel").$$render($$result, { value: "npm" }, {}, {
        default: () => {
          return `${validate_component(CodeFence, "CodeFence").$$render($$result, {
            lang: "bash",
            ext: "sh",
            linesCount: 2,
            rawCode: "npm install @web3-onboard/injected-wallets\n",
            showCopyCode: true,
            code: '<pre><code><span class="line"><span style="color: #A6ACCD">npm install @web3-onboard/injected-wallets</span></span>\n<span class="line"></span></code></pre>'
          }, {}, {})}`;
        }
      })}`;
    }
  })}
<h2 id="${"quickstart"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#quickstart",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Quickstart</h2>
<p>To allow all injected wallets that are supported, don&#39;t pass in any options:</p>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "javascript",
    ext: "js",
    linesCount: 28,
    code: '<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> Onboard </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/core</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> injectedModule </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/injected-wallets</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> MAINNET_RPC_URL </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://mainnet.infura.io/v3/&lt;INFURA_KEY&gt;</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> injected </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">injectedModule</span><span style="color: #A6ACCD">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onboard </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">Onboard</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">wallets</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [injected]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">chains</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">0x1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #F07178">token</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ETH</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Ethereum Mainnet</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #F07178">rpcUrl</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> MAINNET_RPC_URL</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">  ]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">appMetadata</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">My App</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">icon</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">&lt;SVG_ICON_STRING&gt;</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">description</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">My app using Onboard</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> connectedWallets </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #A6ACCD"> onboard</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">connectWallet</span><span style="color: #A6ACCD">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #A6ACCD">(connectedWallets)</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<h2 id="${"filtering-wallets"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#filtering-wallets",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Filtering Wallets</h2>
<p>Injected wallets that you do not want to support can be filtered based on the ${validate_component(CodeInline, "CodeInline").$$render($$result, { code: "Platform" }, {}, {})} the user is on. For example you may not want to support the &#39;Detected Wallet&#39; that is detected automatically and filter it via all platforms by passing ${validate_component(CodeInline, "CodeInline").$$render($$result, { code: "false" }, {}, {})}:</p>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "javascript",
    ext: "js",
    linesCount: 16,
    code: '<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> Onboard </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/core</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> injectedModule</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">ProviderLabel</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/injected-wallets</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> MAINNET_RPC_URL </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://mainnet.infura.io/v3/&lt;INFURA_KEY&gt;</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> injected </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">injectedModule</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">filter</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">[</span><span style="color: #A6ACCD">ProviderLabel</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">Detected</span><span style="color: #F07178">]</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onboard </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">Onboard</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">wallets</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [injected]</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">//... other options</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<p>Or you may want to only filter the &#39;Detected Wallet&#39; on a select few platforms:</p>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "javascript",
    ext: "js",
    linesCount: 17,
    code: '<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> Onboard </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/core</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> injectedModule</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">ProviderLabel</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/injected-wallets</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> MAINNET_RPC_URL </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://mainnet.infura.io/v3/&lt;INFURA_KEY&gt;</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> injected </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">injectedModule</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">filter</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #89DDFF">    </span><span style="color: #464B5D; font-style: italic">// allow only on non android mobile</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">[</span><span style="color: #A6ACCD">ProviderLabel</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">Detected</span><span style="color: #F07178">]</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Android</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">desktop</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onboard </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">Onboard</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">wallets</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [injected]</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">//... other options</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<p>The following platforms can be used to filter wallets:</p>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "typescript",
    ext: "ts",
    linesCount: 19,
    code: '<pre><code><span class="line"><span style="color: #C792EA">type</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Platform</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Windows Phone</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Windows</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">macOS</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">iOS</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Android</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Linux</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Chrome OS</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Android Browser</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Chrome</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Chromium</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Firefox</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Microsoft Edge</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Opera</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Safari</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">desktop</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">mobile</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">|</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">tablet</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<h2 id="${"adding-custom-injected-wallets"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#adding-custom-injected-wallets",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Adding Custom Injected Wallets</h2>
<p>If there is an injected wallet that you would like to support in your app, but is not yet included in this repo, you can add a custom wallet module in the ${validate_component(CodeInline, "CodeInline").$$render($$result, { code: "custom" }, {}, {})} field:</p>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "typescript",
    ext: "ts",
    linesCount: 33,
    code: '<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> equal </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// The label that will be displayed in the wallet selection modal</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Equal</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// The property on the window where the injected provider is defined</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// Example: window.ethereum</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">injectedNamespace</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ethereum</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// A function that returns a bool indicating whether or not the provider is</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// of a certain identity. In this case, a unique property on the provider</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// is used to identify the provider.</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// In most cases this is in the format: is&lt;provider-name&gt;.</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// You may also include custom logic here if checking for the property</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// isn&#39;t sufficient.</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #82AAFF">checkProviderIdentity</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> provider </span><span style="color: #89DDFF">})</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">!!</span><span style="color: #A6ACCD">provider </span><span style="color: #89DDFF">&amp;&amp;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">!!</span><span style="color: #A6ACCD">provider[ProviderIdentityFlag</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">MetaMask]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// A method that returns a string of the wallet icon which will be displayed</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #82AAFF">getIcon</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> (</span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">import</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">&lt;PATH_TO_ICON&gt;</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">))</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">default</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// Returns a valid EIP1193 provider. In some cases the provider will need to be patched to satisfy the EIP1193 Provider interface</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #82AAFF">getInterface</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> (</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">provider</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> window</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">ethereum</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// A list of platforms that this wallet supports</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">platforms</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">desktop</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>\n<span class="line"><span style="color: #89DDFF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> injected </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">injectedModule</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">custom</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [equal]</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onboard </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">Onboard</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">wallets</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [injected]</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">//... other options</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<h3 id="${"injected-wallets-supported-natively"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#injected-wallets-supported-natively",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Injected Wallets Supported Natively</h3>
<ul><li>Metamask - <em>Desktop &amp; Mobile</em> (Mobile relies on Wallet Connect and is detected inside MetaMask app browser)</li>
<li>Binance - <em>Desktop</em></li>
<li>Coinbase - <em>Desktop &amp; Mobile</em></li>
<li>Tally - <em>Desktop</em></li>
<li>Exodus - <em>Desktop &amp; Mobile</em></li>
<li>Trust - <em>Mobile</em></li>
<li>Opera - <em>Desktop &amp; Mobile</em></li>
<li>Status - <em>Mobile</em></li>
<li>Alphawallet - <em>Mobile</em></li>
<li>Atoken - <em>Mobile</em></li>
<li>Bitpie - <em>Mobile</em></li>
<li>Blockwallet - <em>Desktop</em></li>
<li>Brave - <em>Desktop &amp; Mobile</em></li>
<li>D&#39;Cent - <em>Mobile</em></li>
<li>Frame - <em>Desktop</em></li>
<li>Huobiwallet - <em>Mobile</em></li>
<li>Hyperpay - <em>Mobile</em></li>
<li>IMtoken - <em>Mobile</em></li>
<li>Liquality - <em>Desktop</em></li>
<li>Meetone - <em>Mobile</em></li>
<li>Mykey - <em>Mobile</em></li>
<li>Ownbit - <em>Mobile</em></li>
<li>Tokenpocket - <em>Desktop &amp; Mobile</em></li>
<li>TP - <em>Mobile</em></li>
<li>xDefi - <em>Desktop &amp; Mobile</em></li>
<li>1inch - <em>Mobile</em></li>
<li>Tokenary - <em>Mobile</em></li>
<li>GameStop - <em>Desktop</em></li>
<li>Rabby - <em>Desktop</em></li>
<li>MathWallet - <em>Desktop &amp; Mobile</em></li></ul>`;
});
export { Injected as default };