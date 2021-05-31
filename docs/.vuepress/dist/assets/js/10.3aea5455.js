(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{319:function(e,t,o){e.exports=o.p+"assets/img/enclave.533f8c23.png"},400:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"network-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network-architecture"}},[e._v("#")]),e._v(" Network Architecture")]),e._v(" "),r("p",[e._v('The Secret Network facilitates the execution of code (Secret Contracts) with strong correctness and privacy guarantees. In Secret Contracts, data itself is concealed from the nodes that execute computations (also known as "private computation"). This allows developers to include sensitive data in their smart contracts without moving off-chain to centralized (and less secure) systems, thus allowing for truly private and scalable decentralized applications. Secret Network is a proof-of-stake blockchain built on top of the Cosmos SDK, using '),r("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint consensus"),r("OutboundLink")],1),e._v(". "),r("a",{attrs:{href:"https://github.com/enigmampc/cosmos-sdk/blob/master/x/gov/spec/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Governance"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/enigmampc/cosmos-sdk/blob/master/x/staking/spec/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("staking"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/enigmampc/cosmos-sdk/tree/master/x/bank/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("bank"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://github.com/enigmampc/SecretNetwork/tree/master/x/compute",target:"_blank",rel:"noopener noreferrer"}},[e._v("compute"),r("OutboundLink")],1),e._v(" modules are currently enabled.")]),e._v(" "),r("p",[e._v("A Secret Contract, written in Rust, is the fundamental innovation of the Secret Network. Secret Contracts are enabled by the "),r("code",[e._v("compute")]),e._v(" module, which is unique to the Secret Network. These contracts execute over data which is kept encrypted from nodes, developers, users, and everyone else, while the results of these computations are trusted and verifiable. For application developers, the Secret Contract is the most important feature of the network.")]),e._v(" "),r("p",[e._v("The following process describes, step by step, how a contract is submitted and a computation performed on the Secret Network:")]),e._v(" "),r("ol",[r("li",[e._v("Developers write and deploy Secret Contracts to the Secret Network")]),e._v(" "),r("li",[e._v("Validators run full nodes and execute Secret Contracts")]),e._v(" "),r("li",[e._v("Users submit transactions to Secret Contracts (on-chain), which can include encrypted data inputs.")]),e._v(" "),r("li",[e._v("Validators receive encrypted data from users, and execute the Secret Contract.")]),e._v(" "),r("li",[e._v("During Secret Contract execution:\n"),r("ul",[r("li",[e._v("Encrypted inputs are decrypted inside a Trusted Execution Environment.")]),e._v(" "),r("li",[e._v("Requested functions are executed inside a Trusted Execution Environment.")]),e._v(" "),r("li",[e._v("Read/Write state from Tendermint can be performed (state is always encrypted when at rest, and is only decrypted within the Trusted Execution Environment).")]),e._v(" "),r("li",[e._v("Outputs are encrypted.")]),e._v(" "),r("li",[e._v("In summary, at all times, data is carefully always encrypted when outside the Trusted Compute Base (TCB) of the TEE.")])])]),e._v(" "),r("li",[e._v("The Block-proposing validator proposes a block containing the encrypted outputs and updated encrypted state.")]),e._v(" "),r("li",[e._v("At least 2/3 participating validators achieve consensus on the encrypted output and state.")]),e._v(" "),r("li",[e._v("The encrypted output and state is committed on-chain.")])]),e._v(" "),r("p",[e._v("A Secret Contract’s code is always deployed publicly on-chain, so that users and developers know exactly what code will be executed on data that they submit. This is important: without knowing what that code does, users cannot trust it with their encrypted data. However, the data that is submitted is encrypted, so it cannot be read by a developer, anyone observing the chain, or anyone running a node. If the behavior of the code is also trusted (which is possible to achieve because it is recorded on chain), a user of Secret Contracts obtains strong privacy guarantees.")]),e._v(" "),r("p",[e._v("This encrypted data can only be accessed from within the “trusted execution environment”, or enclave, that the "),r("code",[e._v("compute")]),e._v(" module requires each validator to run. The computation indicated by the Secret Contract is then performed, within this trusted enclave, over the decrypted data. When the computation is completed, the output is encrypted and recorded on-chain. There are various types of outputs that can be expected. These include:")]),e._v(" "),r("ul",[r("li",[e._v("An updated contract state (i.e., the user’s data should update the state or be stored for future computations)")]),e._v(" "),r("li",[e._v("A computation result encrypted for the transaction sender (i.e., a result should be returned privately to the sender)")]),e._v(" "),r("li",[e._v("Callbacks to other contracts (i.e., a contract is called conditional on the outcome of a Secret Contract function)")]),e._v(" "),r("li",[e._v("Send Messages to other modules (i.e., for sending value transfer messages that depend on the outcome of a computation). See "),r("a",{attrs:{href:"https://github.com/enigmampc/SecretNetwork/blob/master/go-cosmwasm/types/msg.go#L63-L69",target:"_blank",rel:"noopener noreferrer"}},[e._v("from go-cosmwasm code"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("The Secret Network’s "),r("code",[e._v("compute")]),e._v(" module currently requires that validators run nodes with Intel SGX chips (enclaves). These enclaves contain signing keys that are generated within the enclave. For more details on how enclaves function and are verified, see "),r("RouterLink",{attrs:{to:"/protocol/sgx.html"}},[e._v("intel SGX")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(319),alt:"enclave"}})]),e._v(" "),r("p",[e._v("Diagram: Trusted and Untrusted aspects of Secret Network code. "),r("code",[e._v("compute")]),e._v(" enables go-cosmwasm with encryption to be executed within the trusted component of the enclave.")]),e._v(" "),r("p",[e._v("Nodes join the network through a remote attestation process that is outlined in the section about "),r("RouterLink",{attrs:{to:"/protocol/encryption-specs.html#new-node-registration"}},[e._v("new node registration")]),e._v(". In short, the network shares a true random seed accessed through this registration process. This seed is generated inside the Trusted Execution Environment of the bootstrap node, which is identical to other nodes, but is the first node that joins the network. All other keys are derived from this seed in a CSPRNG way. The nodes use asymmetric encryption for agreeing non-interactively on shared symmetric keys with the users, then, symmetric encryption is used for encrypting and decrypting input and output data from users, as well as the internal contract state. For more information on the cryptography used within Secret Network, review our "),r("RouterLink",{attrs:{to:"/protocol/encryption-specs.html"}},[e._v("encryption specs")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);