:::vignette
!IMG:plate_11.png|

The contact disappeared on a Tuesday.

Not dramatically. A phone that stopped answering. Work records showing a voluntary transfer to another district. Clean. Orderly. Processed. The one who ran the supply lines spent two days reconstructing the chain — the debt, the leverage, the favor asked and granted, the access that had briefly, quietly, belonged to someone else. The network had held; compartmentalization was that person's religion, and it had earned its tithes. But the workshop's mood that week was the mood of a site after a near-miss: nobody hurt, everybody changed.

"So we stop?" asked the apprentice, who was young enough to ask the real questions out loud.

"We inventory," said the supplier. "Fear is data. What exactly are we afraid of? Name them."

They named them, and the economist wrote the list on the whiteboard, and the Builder recognized it — the same list, in different words, sat in the notebook from the night before asking four firms to trust an architecture.

The keys. An apprentice loses twelve words; a company is twelve words; a widow inherits a wall she cannot open.

The law. The Review Office, and offices above it, and the summer the new rules arrive, tightening like a torque pattern.

The volatility. The unit that holds over decades and lurches over quarters; the fitter who cheered his nine-second payment in October and counted it twice in February.

The people. The supervisor who was not evil, only tired — who had said these things drift to a calibrated instrument because the sentence was cheaper than the implications. Every tired defender on every project, each one a rational actor in a system that priced honesty as a career risk.

"That's the whole list?" the apprentice said. "Keys, law, price, people?"

"That's the whole list," said the economist. "It has been the same list for every tool worth having since fire. You don't wait for the list to be empty. You engineer against it, line by line, and you write the residual risk on the drawing, where everyone can see it, and then you decide whether the building is worth it."

Outside, far off, a siren rose and faded, attending to someone else's emergency. The Builder picked up the marker and started with the keys.
:::

# Chapter 9 — Overcoming Barriers: The Honest Bill

Advocacy books end with a vision. Engineering books end with a punch list. This chapter is the punch list: every material barrier between the reference architecture of Chapter 8 and its adoption, with current mitigations and residual risk stated. The list is short but heavy — keys, law, volatility, and people — plus the industry-specific frictions (procurement, liability, data protection) that any AEC deployment meets in the first month. None is a reason to wait. Each is a reason to start small, deliberately, and in the right order.

## Keys: custody as an organizational discipline

The unforgiving fact from Chapter 4 stands: self-sovereign keys mean self-borne loss, and an industry of four-employee firms cannot staff a cryptography department. The mitigations have matured into a practical stack — hardware signers for individuals; audited remote signers with rate limits and tamper-evident logs for firms; threshold schemes (k-of-n across officers or devices) so no laptop, death, or resignation *is* the company; timelocked inheritance and recovery paths for the long tail of human events. But tools are the minor half. The major half is *procedure*: key ceremonies, succession planning, revocation drills — the same organizational muscle the industry already exercises for site safety and for the company stamp. The correct mental model, offered seriously: **treat keys like calibrated instruments** — inventoried, checked on schedule, with named custodians and documented chains. Firms that manage torque wrenches can manage nsecs. Residual risk: real, permanent, and smaller every year — and asymmetric in the right direction, because the alternative (platform custody) concentrates the same risk in someone else's basement with someone else's incentives.

## Law: compliance as terrain, not weather

Chapter 7 drew the map; the adoption consequences compress to four lines. Self-custody and non-custodial rails are lawful across the developed world and are the *demonstrated* safe side of five years of enforcement. The fiat edges — exchanges, custody services — are licensed territory: use regulated providers there and the compliance burden becomes their product. The EU's AMLR (from July 2027) adds identity friction at those edges and belongs in affected firms' compliance calendars *now*. And public procurement cannot require exotic rails — so the architecture enters public work as what it is at Layer 1: signed records and neutral archives, procurement-neutral, offering the *client* better evidence rather than asking the client for anything. One further legal texture is AEC-specific: **GDPR versus permanent records.** The rule of thumb that resolves it: personal data never enters events — events carry hashes, pseudonymous keys, and pointers; the personal layer stays in conventional, erasable stores. Immutability for evidence, erasability for persons. The two regimes compose cleanly if designed for from day one — and catastrophically if retrofitted.

## Volatility: the treasury discipline, restated

The February fitter counts his October sats twice: that is the adoption barrier as experienced. The discipline from Chapter 2 answers it without ideology. Operations price in euros; rails carry value; nobody holds quote-risk involuntarily or unknowingly. Firms hold bitcoin, if at all, as long-horizon treasury — sized so that a 50-percent drawdown (which happened, again, within this edition's writing) is an accounting event, not a payroll event. Escrow and retention structures denominate obligations contractually and hedge the bridge. And workers choose their split at payday, with the default conservative. The barrier dissolves not when volatility ends (it will not, for years) but when exposure becomes *elective at every node* — which the architecture, correctly built, makes it.

## People: the “these things drift” problem

The heaviest line item has no software patch. Chapter 1's dysfunctions are, for their incumbents, *equilibria*: float earns interest; opacity wins claims; the dashboard's fiction is somebody's KPI. The “these things drift” problem — decent people rationally defending indefensible systems because the sentence is cheaper than the implications — yields to exactly one force, and it is not argument. It is **demonstration at the margin**: the fitter paid before his van leaves the yard; the four-minute dispute; the subcontractor whose evidence survives access revocation. Diffusion in this industry has always run trade-to-trade, site-to-site, *Stammtisch*-to-*Stammtisch* — which is why Chapter 8's minimum deployment is two firms and a transmittal, and why Chapter 6's guild is not a nostalgic ornament but the adoption vehicle itself: institutions of practitioners, spreading practice, at the speed of vouching. Education rides the same rail — the engine-native generation (Chapter 5) learns CDE discipline inside game worlds (Chapter 6's case study runs ISO 19650 states as play), and every apprentice so trained is a future site where the architecture is the *familiar* option. Time horizon for the people problem: a career, not a quarter. Time preference, as ever, is the variable under everything.

## The order of operations

Punch lists end with sequence. For a firm: start at Layer 1 (signed transmittals between two willing partners — cost: an afternoon), add content-addressed deliverables on the next project, pilot one milestone escrow with a client who has been burned before (they will not need persuading), and only then touch payroll, treasury, or vending machines. For a guild or professional body: stand up the neutral relay and the attestation registry — the infrastructure of trust is your historical mandate wearing new clothes. For the individual reader: twelve words, an afternoon, one signed site diary — the pilot project is you. What must not be done: big-bang platform replacement (the architecture's entire advantage is that it never requires one), custody improvisation (use the stack), or evangelism ahead of demonstration (the tired defenders outnumber you; show, don't tell).

!IMG:ch9_sequence.png|The adoption sequence — what to deploy first.

The list was named, line by line, and none of the lines said *impossible*. They said *discipline, sequence, patience* — which are, it will not have escaped the reader, the industry's own oldest virtues, the ones the cathedral crews had before the tools arrived to deserve them again. What remains is to look up from the punch list, once, and describe the building this has all been for.
