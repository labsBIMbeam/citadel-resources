:::vignette
!IMG:plate_02.png|

The workshop was on the third floor of a brick building that had once manufactured precision instruments, in the industrial district the city's optimization algorithms had classified as transitional — no budget for maintenance, no schedule for demolition. It existed in the gap between two spreadsheets, which made it, someone there said, the most honest neighborhood in the city.

The Builder had followed the number here. It had taken five weeks, two wrong turns, and one conversation in a stairwell that still might have been a coincidence.

Nobody asked for a name, and nobody offered one. That, evidently, was the house style. A space was cleared on the workbench without ceremony. Three objects sat under the cage lamp, and the Builder understood that this was the entire curriculum.

The first was a small computer, fanless, warm, a single amber LED pulsing at long intervals. "It keeps the ledger," said the one they called the operator — a title, not a name. "The whole ledger. Every unit that exists, every transfer ever made, back to the first block. It asks nobody's permission and it takes nobody's word. It checks."

The second was smaller still, an antenna trailing from it like a whisker. "It moves messages. Signed notes. It doesn't know what they mean and doesn't need to. If this one burns out, any other will do. The message doesn't live in the machine. It lives in the signature."

The third was a headset, scuffed, one strap repaired with wire. The Builder put it on, because the room seemed to expect it.

And stood inside the pump station. The same pump station — but finished, correct, the way it existed in the drawings that reality had never quite honored. A hand reached out; a valve that had been seized for years turned smoothly; the water moved. The numbers on the virtual gauge moved with it, and they matched, because in here there was nothing to adjust and nobody to adjust it for.

The Builder took the headset off. The workshop lamplight seemed very yellow.

"A ledger nobody edits. Messages nobody intercepts. A world everybody can enter."

"Tools," said the operator. "Just tools. The question is what you build."
:::

# Chapter 0 — Three Technologies: Bitcoin, Nostr, and Gaming Engines

Before this book can argue anything, it owes you a plain account of its three subjects: where they came from, how they work, and — because this edition insists on it — what state they are actually in as of mid-2026, in numbers, with the disappointments included.

## Bitcoin

In the autumn of 2008, in the middle of the global financial crisis, a pseudonymous author calling themself Satoshi Nakamoto posted a nine-page paper to a cryptography mailing list: *Bitcoin: A Peer-to-Peer Electronic Cash System*. The paper proposed something the cypherpunk community had circled for two decades without landing: digital cash that needed no issuer, no bank, and no trusted third party of any kind.

The components were not new. Adam Back's Hashcash (1997) had shown that computational work could be used as a stamp — costly to produce, trivial to verify. David Chaum had built digital cash in the 1980s, but with a central mint that could be shut down (and was). Wei Dai's b-money and Nick Szabo's bit gold sketched decentralized designs without solving the problem of agreement: who decides which ledger is the real one, if nobody is in charge?

Satoshi's synthesis solved it. Transactions are broadcast to an open network. Miners gather them into blocks and race to solve a proof-of-work puzzle; the winner appends the next block to a growing chain of blocks and collects newly issued bitcoin plus fees. Each block commits cryptographically to its predecessor, so rewriting history would require redoing the work — and outpacing the honest network while doing so. Every participant running a full node independently verifies every rule: no invalid signature, no double-spend, and never more than the fixed issuance schedule allows. Consensus emerges not from authority but from the most cumulative verifiable work. In early drafts and code comments, Satoshi had a name for this timestamped structure that has since been widely adopted by those who care about the original terminology: the **timechain**. This book uses that word — because what the structure actually provides is not "a chain of blocks" (a database detail) but ordered, unforgeable *time*: proof that a record existed, in sequence, beyond anyone's power to backdate or revise.

On 3 January 2009, Satoshi mined the first block. Embedded in it was a newspaper headline of that day — "Chancellor on brink of second bailout for banks" — part timestamp, part epitaph for the system Bitcoin was answering. Hal Finney, veteran cypherpunk and creator of the first reusable proof-of-work system, received the first transaction and famously tweeted "Running bitcoin." From those two computers, the network grew: cypherpunks first, then libertarians, tinkerers, economists, criminals (money is money), entrepreneurs, funds, and eventually governments.

The monetary design is the point, and it is austere. Supply is capped at 21 million bitcoin, each divisible into 100 million satoshis. New issuance halves roughly every four years: since the fourth halving on 20 April 2024, each block mints 3.125 BTC, roughly 450 BTC per day network-wide — an annual supply growth already below one percent and falling toward zero. No board meets to reconsider this. Changing it would require convincing tens of thousands of node operators to run software against their own interest — a governance model best described as *everyone can propose, nobody can impose*.

Where does that leave Bitcoin in mid-2026? Larger, more institutional, and — honesty first — bruised. The network's computing power stands near one zettahash per second, the highest sustained security budget of any system humanity operates, though the first quarter of 2026 saw the first quarterly hashrate decline in six years as some miners pivoted capacity to AI workloads. U.S. spot exchange-traded funds, approved in January 2024, accumulated over 50 billion dollars in net inflows before reversing into record outflows in 2026. The price reached an all-time high of 126,198 dollars on 6 October 2025, crashed within days when a 100-percent-tariff announcement triggered roughly 19 billion dollars of leveraged liquidations — the largest single-day deleveraging on record — and traded near 60,000 dollars in the summer of 2026. In March 2025 the United States established a Strategic Bitcoin Reserve holding six figures of seized coins. Volatility has not gone away, and this book will not pretend otherwise. What has gone away is the question of survival: seventeen years of uptime, every obituary unretracted.

> "If you have an apple and I have an apple and we exchange these apples then you and I will still each have one apple. But if you have an idea and I have an idea and we exchange these ideas, then each of us will have two ideas."
> — attributed to George Bernard Shaw

## Nostr

The second technology answers a different failure. The internet's original promise — anyone can publish, anyone can read — was quietly repossessed by platforms. A handful of companies came to own the world's conversations: the identities, the social graphs, the archives, the reach. What a platform giveth, a platform can taketh away — accounts, audiences, entire histories — by policy, by algorithm, or by acquisition.

Nostr — *Notes and Other Stuff Transmitted by Relays* — is a protocol, not a platform, released in 2020 by a pseudonymous Brazilian developer known as fiatjaf. It grew in the same free-software soil as tools like **LNbits**, the open-source Lightning account system built by **Ben Arc** — one of the ecosystem's most relentless FOSS builders, and proof that a single stubborn developer giving code away can end up carrying half an industry's plumbing. Nostr inherited exactly that culture: everything open, everything forkable, nobody's permission required. Its design is almost insultingly simple, and the simplicity is the strategy. An identity is a cryptographic keypair. A message — a "note," or any other stuff — is a small JSON document called an **event**, signed by its author's key. Events are published to **relays**: dumb servers that store and forward whatever they accept. Clients — apps — read from and write to many relays at once.

!IMG:nostrnet.png|A network with no headquarters: keys publish, relays carry, everyone verifies.

That is the whole protocol. Everything else is optional extensions, called NIPs (Nostr Implementation Possibilities), which clients and relays adopt à la carte. From these few moving parts, properties fall out that platforms cannot offer. Your identity is yours: no company issues your key, so no company can revoke it. Your words are portable: if one relay deletes or blocks them, publish to another; followers find you by key, not by server. Your record is verifiable: a signed event either verifies or it doesn't; nobody can put words in your key's mouth or quietly edit what you said. And the system has no headquarters: over 950 relays across roughly 50 countries were online in early 2026 (as read from public relay monitors), operated by companies, volunteers, and hobbyists, none of them essential.

Chapter 4 examines the ecosystem in detail — the payments layer, the encrypted messaging, the file hosting, the git collaboration, the machine-to-machine experiments — and gives the honest usage numbers, which are modest. Here it suffices to register what kind of thing Nostr is: not a Twitter competitor, but a *coordination substrate* — a way for keys (people, companies, or machines) to publish signed, timestamped statements that anyone can verify and that no single party can unilaterally suppress. Hold that thought until we reach the question of what a construction project actually is, legally speaking. The answer — a pile of signed, timestamped statements that everyone argues about later — is coming in Chapter 1.

> "The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window, or when you turn on your television. You can feel it when you go to work."
> — Morpheus, *The Matrix*

## Gaming Engines

The third technology was built for play, which is why it works. A game engine is a real-time simulation kernel: geometry, materials, light, physics, sound, input, networking — everything needed to render a persistent, interactive world at 60 frames per second and share it among many participants. The two dominant general-purpose engines, Epic Games' Unreal Engine and Unity, were hardened by the most demanding users imaginable: hundreds of millions of players who riot when the frame rate drops.

Architecture noticed early. The pipeline from building information model to engine — once a heroic act of file surgery — became a product: Epic's Datasmith importers translate Revit, Archicad, Rhino, and IFC geometry with materials and metadata intact, and Twinmotion, Epic's architectural visualization tool, ships bundled with Revit itself. Unreal Engine 5's rendering advances (virtualized geometry, real-time global illumination) mean a full-detail building model can be explored photorealistically without manual optimization. On the open side, projects like Speckle stream AEC model data to web browsers over open APIs, and NVIDIA's Omniverse bet on OpenUSD as a universal scene format for industrial digital twins — factories, data centers, districts.

The honest ledger requires the failure too: Unity, the second giant, launched its dedicated AEC product Unity Reflect in 2019 to considerable fanfare — and sunset it in 2023–2024, pointing customers to third-party tools. The lesson, to which this book returns repeatedly, is not that engines don't belong in construction. It is that *products* die and *protocols* survive, and an industry with fifty-year asset lifecycles should be careful about which one it marries.

Why do engines matter beyond pretty pictures? Because a walkable model changes who can participate. A drawing set is a document for the initiated; a first-person walkthrough is legible to the apprentice, the client's board, the facility manager, and the future tenant. Design review in a shared virtual space catches what paper hides: the valve you can't reach, the corridor that feels wrong, the maintenance access that exists only in the clash report's dreams. Training moves from classroom to simulation. And a generation raised in Minecraft and Fortnite — a generation the construction industry desperately needs to recruit — walks into these tools already fluent.

> "The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design."
> — Friedrich Hayek

Hayek's warning is the thread that ties the three technologies together. Each of them replaces a designed authority with a discovered order: Bitcoin replaces the monetary committee with a fixed rule and open competition; Nostr replaces the platform with a swarm of interchangeable relays; the engine replaces the privileged drawing with a world anyone can inspect. None of them requires the people using them to be wise, honest, or aligned — only to act, visibly, under rules that no participant can bend. That is not a technological preference. It is an epistemological one, and the next chapter shows why the construction industry — fragmented, adversarial, and drowning in unverifiable reports — needs it more than any industry on earth.
