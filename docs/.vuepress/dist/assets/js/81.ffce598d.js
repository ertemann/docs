(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{436:function(e,a,t){"use strict";t.r(a);var n=t(42),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrate-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate-a-validator"}},[e._v("#")]),e._v(" Migrate a Validator")]),e._v(" "),t("p",[e._v("⚠️ ⚠️ ⚠️")]),e._v(" "),t("p",[e._v("Please make sure you "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/backup-a-validator.html"}},[e._v("backup your validator")]),e._v(" before you migrate it.")],1),e._v(" "),t("h3",{attrs:{id:"_1-run-a-new-full-node-on-a-new-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-run-a-new-full-node-on-a-new-machine"}},[e._v("#")]),e._v(" 1. "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/run-full-node-mainnet.html"}},[e._v("Run a new full node")]),e._v(" on a new machine.")],1),e._v(" "),t("h3",{attrs:{id:"_2-confirm-you-have-the-recovery-seed-phrase-information-for-the-active-key-running-on-the-old-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-confirm-you-have-the-recovery-seed-phrase-information-for-the-active-key-running-on-the-old-machine"}},[e._v("#")]),e._v(" 2. Confirm you have the recovery seed phrase information for the active key running on the old machine")]),e._v(" "),t("p",[e._v("You can also back it up with:")]),e._v(" "),t("p",[e._v("On the validator node on the old machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("secretcli keys "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" mykey\n")])])]),t("p",[e._v("This prints the private key to "),t("code",[e._v("stderr")]),e._v(", you can then paste in into the file "),t("code",[e._v("mykey.backup")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"_3-recover-the-active-key-of-the-old-machine-on-the-new-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-recover-the-active-key-of-the-old-machine-on-the-new-machine"}},[e._v("#")]),e._v(" 3. Recover the active key of the old machine on the new machine")]),e._v(" "),t("p",[e._v("This can be done with the mnemonics:")]),e._v(" "),t("p",[e._v("On the full node on the new machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("secretcli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" mykey --recover\n")])])]),t("p",[e._v("Or with the backup file "),t("code",[e._v("mykey.backup")]),e._v(" from the previous step:")]),e._v(" "),t("p",[e._v("On the full node on the new machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("secretcli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" mykey mykey.backup\n")])])]),t("h3",{attrs:{id:"_4-wait-for-the-new-full-node-on-the-new-machine-to-finish-catching-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-wait-for-the-new-full-node-on-the-new-machine-to-finish-catching-up"}},[e._v("#")]),e._v(" 4. Wait for the new full node on the new machine to finish catching-up.")]),e._v(" "),t("p",[e._v("To check on the new full node if it finished catching-up:")]),e._v(" "),t("p",[e._v("On the full node on the new machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("secretcli status "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq .sync_info\n")])])]),t("p",[e._v("("),t("code",[e._v("catching_up")]),e._v(" should equal "),t("code",[e._v("false")]),e._v(")")]),e._v(" "),t("h3",{attrs:{id:"_5-after-the-new-node-have-caught-up-stop-the-validator-node-and-then-stop-the-new-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-after-the-new-node-have-caught-up-stop-the-validator-node-and-then-stop-the-new-full-node"}},[e._v("#")]),e._v(" 5. After the new node have caught-up, stop the validator node and then stop the new full node.")]),e._v(" "),t("p",[e._v("To prevent double signing, you should stop the validator node and only then stop the new full node.")]),e._v(" "),t("p",[e._v("Please read about "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/join-validator-mainnet.html#dangers-in-running-a-validator"}},[e._v("the dangers in running a validator")]),e._v(".")],1),e._v(" "),t("p",[e._v("On the validator node on the old machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl stop secret-node\n")])])]),t("p",[e._v("On the full node on the new machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl stop secret-node\n")])])]),t("h3",{attrs:{id:"_6-move-the-validator-s-private-key-from-the-old-machine-to-the-new-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-move-the-validator-s-private-key-from-the-old-machine-to-the-new-machine"}},[e._v("#")]),e._v(" 6. Move the validator's private key from the old machine to the new machine.")]),e._v(" "),t("p",[e._v("On the old machine the file is "),t("code",[e._v("~/.secretd/config/priv_validator_key.json")]),e._v(".")]),e._v(" "),t("p",[e._v("You can copy it manually or for example you can copy the file to the new machine using ssh:")]),e._v(" "),t("p",[e._v("On the validator node on the old machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" ~/.secretd/config/priv_validator_key.json ubuntu@new_machine_ip:~/.secretd/config/priv_validator_key.json\n")])])]),t("h3",{attrs:{id:"_7-on-the-new-server-start-the-new-full-node-which-is-now-your-validator-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-on-the-new-server-start-the-new-full-node-which-is-now-your-validator-node"}},[e._v("#")]),e._v(" 7. On the new server start the new full node which is now your validator node.")]),e._v(" "),t("p",[e._v("On the new machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start secret-node\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);