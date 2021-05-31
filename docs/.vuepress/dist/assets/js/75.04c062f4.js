(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{430:function(e,s,t){"use strict";t.r(s);var n=t(42),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"defi-readiness-network-upgrade-codename-ferenginar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defi-readiness-network-upgrade-codename-ferenginar"}},[e._v("#")]),e._v(" DeFi Readiness Network Upgrade (Codename: Ferenginar)")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# backup old version")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" secretd"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" secretd-v1.0.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# download new version")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -O secretd-v1.0.4 https://github.com/enigmampc/SecretNetwork/releases/download/v1.0.4/secretd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check integrity of new version")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"4ba817f2f5dba092359ec26e5aaedec7df41c370469a8879ef24898fbd38c8e7 secretd-v1.0.4"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" sha256sum --check\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# stop the node")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl stop secret-node\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# overwrite the old version with the new version while preserving the file permissions")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"cat secretd-v1.0.4 > '"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" secretd"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("'\"")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start the node")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start secret-node\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);