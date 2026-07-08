:::vignette
!IMG:plate_05.png|

The inspector arrived without warning. That was, the Builder would later understand, the point.

The inspector came from the Regional Infrastructure Review Office and wore the particular expression of someone whose job is to look at things professionally, and looked at everything: the log books, the maintenance records, the procurement files, the duty rosters, three years deep. It was all in order. It had always been in order.

"And your private readings?" the inspector asked, at the end, pleasantly. "Colleagues mention a notebook."

The room did not change temperature, but the Builder felt the question the way you feel a draft from a door you didn't know existed. "For my own learning. Handwriting helps me think."

"Of course." A smile; a note. "It's a new emphasis from the Office. Informal records create... divergent narratives. You understand. Transparency is trust."

Afterwards the Builder sat in the pump station for a long time.

At the workshop that night the story came out, and the Builder expected outrage. Instead, the older voice put down its soldering iron and asked the strangest question the Builder had ever been asked professionally.

"When you write your tender estimates — before submission — who sees the draft?"

"Nobody. Obviously. If the other bidders saw my numbers—"

"—they'd shade theirs a hair under yours. The market would stop discovering the real price and start discovering you. Yes. And when you last thought about leaving a job — who did you discuss it with, before deciding?"

The Builder stared. "How did you—"

"Everyone thinks about it. That's the point. Deliberation is private by nature. You cannot try out a thought while someone grades the draft. A negotiation isn't a negotiation if one side reads the other's cards. A bid isn't a bid. A price isn't a price." The iron came back up. "They call the notebook a divergent narrative. I call it the last instrument in the building. Transparency for the powerful, privacy for the weak — that's the honest version of the slogan. What's offered is the reverse."

"So what do I do?"

"What builders have always done with load-bearing things," said the one who ran the supply lines, setting down two canvas bags of components that had never seen an official invoice. "You don't argue with the load. You reroute it. Selective disclosure. Show what you choose. Keep the rest."

We are culture, the Builder thought. And culture needs a backstage, or it's only theater.
:::

# Chapter 3 — The Praxeology of Privacy

In May 2026, Max Hillebrand — free-software entrepreneur, self-described praxeologist and cypherpunk, former CEO of the company behind the Wasabi wallet — published *The Praxeology of Privacy*, releasing it into the public domain. The book does something this industry-focused volume badly needs: it takes privacy out of the realm of vibes and civil-liberties slogans and *derives* it, step by deductive step, from the same Austrian economics this book has been using since Chapter 2. This chapter summarizes that argument, then does what Hillebrand leaves to his readers: applies it to a specific industry — ours — where, it turns out, privacy is not a suspect's privilege but the load path of every functioning market mechanism from the sealed bid to the wage packet. Along the way it reports, with case numbers and dates, what happened to the people who built privacy tools in the years this book covers — because that record is part of the engineering reality now.

## Privacy defined by an engineer

Hillebrand's first move is definitional, borrowed from Eric Hughes' 1993 *Cypherpunk's Manifesto*: **"Privacy is the power to selectively reveal oneself to the world."** The load-bearing word is *selectively*. Privacy is not secrecy (revealing nothing), not anonymity (revealing acts without identity — sometimes a tool of privacy, not the thing itself), and above all not concealment of wrongdoing. A patient confiding in a doctor is *exercising* privacy: total disclosure inside a chosen boundary, none beyond it. So is a company sharing its costing model with an auditor under NDA while withholding it from competitors. Privacy is disclosure *control* — an active capability, not an absence.

## The three axioms

The book's architecture rests on three foundations, each an "axiom" in the praxeological sense: a proposition whose denial presupposes its truth.

**Action (Mises).** Humans act: they select ends and apply means. But deliberation — the weighing of ends before acting — is inherently unobservable and *must be*: a preference still forming cannot be simultaneously exposed and free. There is a built-in asymmetry between actor and observer; the actor's interior is the one workshop no surveillance can enter without changing what is made there. Privacy is therefore not a preference some people have. It is structural to purposive action itself.

**Argumentation (Hoppe).** Anyone who argues — including against privacy — presupposes self-ownership: the exclusive control of one's body and mind that makes proposing and disputing possible at all. From self-ownership and legitimately acquired property, the privacy conclusion follows without needing any new "right": *"Self-ownership means that what one thinks and what one does are private by default. Intrusion requires justification, and withholding does not."* Note what this argument deliberately does not claim: that you *own* information about yourself. Information is non-scarce — my knowing a fact does not diminish your knowing it — so it fails the test for property (Stephan Kinsella's criterion, which Hillebrand adopts). There is no freestanding "data ownership." There is your skull, your house, your hardware, your contracts — and privacy is what results when those are respected. This matters practically: it grounds privacy in things that can actually be defended (walls, ciphers, agreements) rather than in unenforceable claims over the contents of other people's minds.

**Resistance (Voskuil).** From Eric Voskuil's *Cryptoeconomics*: systems can be engineered so that external control costs more than it yields. Privacy in practice is not granted; it is *priced in* — the result of raising the cost of observation above the observer's willingness to pay. This is the cypherpunk half of the synthesis: strong cryptography is, in economic terms, the cheapest defense curve humanity has ever possessed. Encrypting a message costs microjoules; breaking it costs more energy than stars produce. Defense is cheaper than attack by dozens of orders of magnitude, *if* the defense is used. Whether privacy exists is therefore, in the end, an engineering decision made by the people who build systems — people like this book's readers.

!IMG:ch3_axioms.png|The three axioms — property, identity, disclosure.

## The economic theorems

From those foundations, Hillebrand derives the propositions that make this a chapter of an economics of construction rather than a digression:

**Surveillance re-imports the calculation problem.** Mises proved that central planning fails because it destroys the price signals that carry dispersed, private knowledge. Hillebrand's sharpest observation is that *surveillance does the same thing retail*: when every actor knows their reservation price, cost structure, and alternatives are visible, they stop revealing them honestly. Prices stop carrying private information. "Transparent negotiation collapses into advantage for the more desperate party." The socialist calculation problem reappears *inside every transaction*. A market of glass traders is not a freer market; it is a slowly failing one.

**Privacy is capital.** A costing model, a supplier relationship, a wage structure, an unpatented method — these are capital goods precisely to the degree they are selectively disclosed. Firms understand this instinctively (it is why NDAs exist); Hillebrand gives it theory: the boundary of disclosure is part of the structure of production. Strip it and you have not made the economy more honest; you have expropriated its information capital.

**Financial surveillance is triangular intervention.** When the state compels banks — and now platforms, wallets, and payment processors — to watch customers wholesale, it intervenes in every exchange between two other parties. The observed pair trades differently, or not at all: marginal trades are chilled first, and the chill is invisible in any statistic because deterred transactions leave no record. And the terminus of the logic is programmable state money — CBDCs — where the buffer between observation and control goes to zero. Hillebrand's summary is the bluntest sentence in the book's orbit: **the state cannot steal what it cannot see, and cannot control what it cannot observe** — which is precisely why observation is the precondition of predation, and why every regime that intended predation built the observation layer first.

**Sound money carries privacy as a fourth function.** To the classical triad — medium of exchange, unit of account, store of value — add: *store of privacy*. Cash bore this function for centuries; every payment rail that replaced it shed the function by design. Fiat in its digital form fails all four. Bitcoin, natively, delivers three — its ledger is public, so privacy must be *built* on top. Which brings the argument to the tools, and to what happened to their builders.

## The toolset, mid-2026

Hillebrand's Part V catalogs the working stack; readers of this book have met several layers already. On Bitcoin: **CoinJoin** (many participants compose one transaction, breaking the chain-analyst's input-output heuristics), **PayJoin** (payer and payee co-sign, poisoning the analytics quietly), **Lightning** (payments that never touch the public ledger), emerging off-chain designs (**Ark, ecash/Chaumian mints** — bearer tokens against a mint, auditably blind), each trading trust for privacy at a different point on the curve. For communication: **Tor** and, stronger, **mixnets**; end-to-end encryption everywhere; and — the newest layer, co-founded by Hillebrand himself — **Marmot/White Noise**, running the IETF's Messaging Layer Security (MLS) group-encryption standard over Nostr identities and relays, so that even the *metadata rail* has no owner. Chapter 4 returns to that one, because a construction project is, among other things, a very large encrypted group chat waiting to happen. And beneath all tools, the practice: threat modeling, compartmentalization, operational discipline — privacy as a *verb*.

!IMG:ch3_toolset.png|The privacy stack — layers of defense, mid-2026.

## The record: what happened to the builders

This book promised failures with dates. Here are the ones that define the field's legal terrain.

In April 2024, U.S. authorities arrested the founders of **Samourai Wallet**, charging that their CoinJoin coordination service constituted unlicensed money transmission. Both pleaded guilty in July 2025; in November 2025 they were sentenced to five and four years respectively. The same week as the arrests, **zkSNACKs** — the company Hillebrand led — blocked U.S. users and then shut down its own Wasabi CoinJoin coordinator entirely, effective 1 June 2024, citing regulatory uncertainty; the wallet survives as pure self-custodial software with independent coordinators. **Roman Storm**, co-author of the Ethereum-based mixer Tornado Cash, was convicted in August 2025 on a single unlicensed-money-transmission conspiracy count (the jury hung on the heavier charges), with retrial maneuvering continuing into late 2026. Meanwhile — the same story from the other branch of government — the Fifth Circuit ruled in *Van Loon* (November 2024) that immutable smart contracts cannot be sanctioned as "property," and OFAC **delisted Tornado Cash in March 2025**. And in the EU, the AML Regulation taking effect from **July 2027** will ban anonymous accounts and privacy-preserving assets at regulated service providers and impose identity verification above 1,000 euros — while the "Chat Control" scanning mandate for private messages was fought to a standstill, its interim legal basis expiring in April 2026 with the permanent regulation still in trilogue as this book went to press.

Read the pattern like an engineer reads a crack map. Punishment concentrates on *services* — identifiable operators taking custody or coordinating flows. Pure software, self-custody, and self-hosted tools have (so far, in most of the West) held legal ground, and sanctions against mere code were rolled back in court. The regulatory bet, in other words, penalizes intermediation and spares — grudgingly — the sovereign user. The engineering consequence for everything Chapter 8 builds: **architectures should minimize the regulable surface — non-custodial, self-hosted, peer-to-peer — not to evade law, but because the law itself keeps ruling that this is the defensible side of the line.** It is also, not coincidentally, the side with no honeypot to breach and no operator to subpoena, extort, or acquire.

## The builder's application

Now collect the argument and walk it onto the site.

A **sealed tender** is privacy infrastructure — the textbook case of selective disclosure creating honest prices; a procurement platform that can peek at draft bids, or a data trail that leaks them, breaks the mechanism at its heart. A **negotiation** — with a client, a supplier, a union — presupposes cards held close; Hillebrand's collapse theorem names exactly what dies when one side's dashboard reads the other's hand. **Costing models, BIM object libraries, fabrication details, site logistics plans** — Chapter 1 called them the firm's uncounted capital; this chapter supplies the theory: they are capital *because* selectively disclosed, and every "upload everything to the platform" workflow is an uncompensated transfer of that capital to whoever owns the platform. **Wages** paid on transparent rails expose workers — disproportionately the migrant workforce — to targeting at both ends of the remittance. **Site security** is privacy in high-visibility clothing: theft of equipment and materials from European sites is a nine-figure annual loss, and delivery schedules, inventory data, and camera layouts are its reconnaissance. Even **safety** has a privacy load path: near-miss reporting collapses where workers believe reports are individually traceable — selective disclosure (the report without the reporter) is precisely what aviation's safety culture runs on, and construction's should.

Note what none of these examples involve: hiding wrongdoing. They involve the ordinary confidentiality that markets, negotiations, and professional trust are *made of* — and that the default architecture of the industry's digital tools quietly deleted. The standards world has even begun to admit it: ISO 19650-5 exists precisely because security-minded information management had to be bolted back onto BIM after the fact.

One caveat belongs here because the rest of this book will rely heavily on signed records: **a signature proves origin, not truth.** It proves who signed what, when — it does not prove that a measurement was accurate, a calculation correct, or an approval justified. Authenticity is not correctness. The signed record is tamper-evident, not infallible; it still requires calibration, peer review, four-eyes checks, and the professional liability that makes carelessness expensive. What the signature *does* eliminate is the older, worse failure mode: the unsigned record that nobody can attribute, the revision that nobody can trace, the approval that nobody remembers giving. That baseline — accountable authorship — is what Chapter 8 builds on.

> "'Nothing to hide' inverts the burden of proof… the question is not 'why do you need privacy?' but 'by what right do you demand access?'"
> — Max Hillebrand, *The Praxeology of Privacy* (2026)

## Sphere separation: architecture, not policy

The preceding sections derived a principle; this one names the design pattern it produces — and it is the pattern every subsequent chapter of this book implements without always naming it.

Modern life is not one sphere; it is two. The **coercive sphere** is the domain of the state and of legal obligation: real names, tax identification, property registers, licensed professions, court-enforceable contracts. It exists because coercion exists, and its instruments — central registries, eID, compliance infrastructure, audit trails — are the correct tools for that domain: where compulsion is in play, accountability must be legible. The **voluntary sphere** is everything else: social life, private commerce, informal collaboration, creative work, speech, worship, thought — every human interaction that runs on consent rather than compulsion. Its instruments are different because its logic is different: pseudonymous identities, decentralized protocols, local key control, selective disclosure, exit rather than enforcement. The two spheres have always existed; what is new is that the voluntary sphere can now be *built* — with keys, relays, and protocol-level privacy — instead of merely hoped for.

Between the spheres, a bridge may exist, but its traffic is one-way by design. A builder may *choose* to link a pseudonymous professional reputation to a legal identity — for a tender, a license, a tax filing. That is selective disclosure in action: the actor decides, the system executes. The reverse — a system correlating pseudonym to real name, metadata to dossier, voluntary act to coercive file — is the precise attack the architecture must prevent. Not by policy, not by promise, but by structure: protocols that do not carry the linkage, keys that do not embed the name, relays that do not log the IP. **Architecture over policy** is the engineering restatement of the resistance axiom: make the wrong correlation not illegal but *expensive* — cryptographically, structurally, by design.

The deepest threat is not that one sphere fails but that one **colonizes** the other. When the coercive sphere's identity logic migrates into voluntary communication — platforms demanding real names for social interaction, analytics correlating shopping and speech, compliance regimes treating every unmonitored channel as a suspect channel — the voluntary sphere ceases to be voluntary. When it works in the other direction — pseudonymous actors evading obligations they legitimately owe, privacy tools laundering the proceeds of coercion itself — the coercive sphere loses the accountability that justifies its existence. Both colonizations destroy the sphere they invade, and both are active today. The regulatory trajectory of Chapter 3's case law is, in structural terms, a fight over where the border runs.

And here the book's own motto sharpens: *we don't confront the system — we outbuild it* is not a call to secede from the coercive sphere. It is a call to build the voluntary one. No builder can opt out of building permits, tax codes, or professional liability — nor should one pretend to. What a builder can do is ensure that the tools of voluntary collaboration — the guild's internal coordination, the knowledge commons, the value-for-value payments between peers, the reputation that travels with a key — exist on rails the coercive sphere does not own, cannot silently surveil, and need not regulate because no custodian stands in the middle to regulate. The two spheres do not compete. They coexist — the way a building's structure coexists with its services: distinct systems, distinct load paths, connected at defined interfaces, never merged. Every chapter that follows is an exercise in drawing that interface correctly.

The Builder's inspector called the notebook a divergent narrative. Hillebrand's answer, and this chapter's: divergence from the dashboard is not a threat to trust — it is where trust comes from. Verification requires an independent reading, and independent readings require a place the harmonizers cannot reach. Privacy is that place, formalized.

The next chapter is about the network where selective disclosure is not a policy but a property of the wire — where identity is a key, publication is a signature, and the backstage is built in.
