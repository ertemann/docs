(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{423:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bootstrap-validator-for-secret-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-validator-for-secret-2"}},[t._v("#")]),t._v(" Bootstrap Validator for "),s("code",[t._v("secret-2")])]),t._v(" "),s("ul",[s("li",[t._v("The bootstrap validator must be running "),s("a",{attrs:{href:"https://github.com/enigmampc/SecretNetwork/releases/tag/v0.2.2",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("v0.2.2")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("This document pairs with the instructions for all other validators: "),s("RouterLink",{attrs:{to:"/upgrade-secret-1-to-secret-2.html"}},[t._v("Network Upgrade Instructions from "),s("code",[t._v("secret-1")]),t._v(" to "),s("code",[t._v("secret-2")])]),t._v(".")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Export state on the old machine")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HALT_HEIGHT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1246400")]),t._v("\n\nperl -i -pe "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/^halt-height =.*/halt-height = '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HALT_HEIGHT")]),t._v('/"')]),t._v(" ~/.secretd/config/app.toml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart secret-node.service\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Wait for $HALT_HEIGHT...")]),t._v("\n\nsecretd "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" --height "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HALT_HEIGHT")]),t._v(" --for-zero-height --jail-whitelist secretvaloper13l72vhjngmg55ykajxdnlalktwglyqjqaz0tdu "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    jq -Sc -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.chain_id = \"secret-2\" |'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.genesis_time = (now | todate) |'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.consensus_params.block.max_gas = \"10000000\" |'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.app_state.distribution.params.secret_foundation_tax = \"0.15\" |'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.app_state.distribution.params.secret_foundation_address = \"secret1c7rjffp9clkvrzul20yy60yhy6arnv7sde0kjj\" |'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'.app_state.register = { "reg_info": null, "node_exch_cert": null, "io_exch_cert": null } |\'')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'.app_state.compute = { "codes": null, "contracts": null }\'')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" genesis_base.json\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Install "),s("code",[t._v("secretnetwork_1.0.0_amd64.deb")]),t._v(" on the new SGX machine")])]),t._v(" "),s("li",[s("p",[t._v("Copy "),s("code",[t._v("~/.secretd/config/priv_validator_key.json")]),t._v(" to the new SGX machine")])]),t._v(" "),s("li",[s("p",[t._v("Export the self-delegator wallet from the old machine and import to the new SGX machine (Note that if you're recovering using "),s("code",[t._v("secretcli keys add $NAME --recover")]),t._v(" you should also add "),s("code",[t._v("--hd-path \"44'/118'/0'/0/0\"")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("Copy "),s("code",[t._v("genesis_base.json")]),t._v(" from the old to "),s("code",[t._v("~/.secretd/config/genesis.json")]),t._v(" on the new machine")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("secretd validate-genesis")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("secretd init-bootstrap")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("secretd validate-genesis")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("secretd start --bootstrap")])])]),t._v(" "),s("li",[s("p",[t._v("Publish "),s("code",[t._v("~/.secretd/config/genesis.json")]),t._v(" (now contains initialized "),s("code",[t._v("register")]),t._v(" state)")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);