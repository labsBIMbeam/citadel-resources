:::vignette
!IMG:plate_03.webp|

The Builder spent Tuesday morning demolishing Monday's work.

Nobody's mistake, officially. The ventilation contractor had built from revision C of the coordination model. The structural contractor had built from revision D. Between C and D, a beam had grown 60 millimetres deeper, exactly where the main supply duct crossed it, and the two facts had traveled through two different portals, two different notification systems, and two different subcontract chains, arriving on site a comfortable nine days apart.

The duct came down. The scaffold went up. The forms went in — Form 16-C, Deviation Report, in triplicate, one copy for a database that no living person had ever queried.

At the site office the Builder checked the project dashboard, because checking the dashboard was what one did. Progress: 71 percent, green. Coordination status: green. RFI turnaround: within tolerance, green. Somewhere in the small print, the demolished duct had already been converted into a percentage and absorbed.

"Where does it go?" the Builder asked the site manager. "The cost. The two days. The steel."

The site manager was near retirement, and decent, and gave a decent answer. "Contingency. Same place it always goes. You'll learn where contingency lives." A nod at the wall of the site office, at the pinned drawings gone soft with humidity. "Every project pays a tax to the confusion. Always has. It's priced in, so nobody measures it."

That evening, on nobody's clock, the Builder measured it.

Rework, waiting, resubmittals, double handling, the retention money owed to the mechanical sub since spring — one month of one mid-sized project, a notebook, a pocket calculator, and the instrument-grade arithmetic a grandfather had once taught: write down what actually happened, then add it up.

The number that came out was not a percentage. It was money — enough money, in one month, on one project, to have paid the apprentice for a year. Multiplied across the city, across the country, across everything being built — the Builder stopped, looked at the figure, and understood that nobody had scratched 600 000 000 000 into that conduit as a mystery.

It was somebody's arithmetic. The tax to the confusion, added up.

We are culture, the Builder wrote under the total. And what we tolerate is also who we are.
:::

# Chapter 1 — The Construction Industry Today

Construction is the largest industry humanity operates, and by most honest measures the least improved. This chapter takes its readings: productivity, fragmentation, error, data, and money. The numbers are the load calculation for everything the rest of the book proposes — nothing that follows makes sense unless the scale of the dysfunction is first measured, dated, and sourced.

## The productivity flatline

The canonical measurement comes from the McKinsey Global Institute's 2017 study *Reinventing Construction*, and its vintage matters — the figures are pre-pandemic, but no comparable re-estimate has replaced them, and McKinsey's 2024 follow-up confirms the diagnosis stands. Global construction-related spending is on the order of 10 trillion dollars a year, around 13 percent of world GDP. Over the two decades before the study, construction labor productivity grew about **1 percent per year**, against 2.8 percent for the world economy and 3.6 percent for manufacturing. If construction merely caught up with the whole-economy average, the study estimated the sector's value added would rise by **1.6 trillion dollars per year** — the size of a G7 economy's construction market, currently paid annually as a tax to the confusion.

For the United States, the independent record is harsher. A 2025 Federal Reserve Bank of Richmond brief, drawing on the Bureau of Labor Statistics' official construction productivity series, finds that measured U.S. construction labor productivity **declined by more than 30 percent between 1970 and 2020**, a five-decade slide over the same period in which economy-wide productivity roughly doubled. Measurement caveats exist — quality, regulation, and project mix are hard to deflate — but no plausible correction turns a 30-percent decline into progress. Every other major industry learned to make more with an hour of human work. Construction learned to make less.

Why? The literature converges on structure rather than laziness. Construction is hyper-fragmented: the European Union counts over **3 million construction enterprises** employing over 12 million people, of which roughly **95 percent are micro or small firms** — the average European construction firm has about **three to four employees**. Every project assembles a temporary coalition of dozens of such firms under adversarial contracts, builds a one-off prototype in the rain, and disbands before the lessons can compound. Manufacturing improves because the factory persists. Construction re-founds the factory every Monday.

## The error budget

Fragmentation has a direct cost line: rework. The Construction Industry Institute's research puts **direct field rework at around 5 percent of construction cost** on average, with a range from 2 to well past 10 percent depending on project type and — critically — on how honestly it is measured; most published studies cluster between 4 and 12 percent. The UK's Get It Right Initiative, which set out to count indirect and latent error as well, estimates the **total cost of avoidable error at 10 to 25 percent of project cost**, with a central estimate around 21 percent once unrecorded process waste and latent defects are included. On a 10-trillion-dollar industry, even the conservative end of these ranges is a sum comparable to entire national economies, spent annually on building things twice.

And error is not merely expensive. The Builder's demolished duct — revision C versus revision D — is the canonical failure mode: not incompetence, but **information asymmetry between parties who share a physical reality and do not share a data reality**.

## Data that dies at every handover

The severity of that data problem has an official price tag, and its age is itself the indictment. In 2004, the U.S. National Institute of Standards and Technology (NIST) published study GCR 04-867 on the cost of inadequate interoperability in the U.S. capital facilities industry: **15.8 billion dollars per year** (in 2002 dollars), of which about two-thirds fell not on designers or contractors but on **owners and operators**, mostly during operations and maintenance — the phase that inherits whatever data survives the handover, which is to say, not much. No equally rigorous study has replicated the estimate since; the industry's information stack has been re-platformed twice in the interim, and the honest statement is that we are still spending an unmeasured multiple of that figure. (A 2021 Autodesk-commissioned FMI report put the global cost of "bad data" at 1.85 trillion dollars for 2020 and claimed 96 percent of captured project data goes unused — directionally useful numbers that should be read for what they are: a vendor's survey.)

!IMG:ch1_data_lifecycle.webp|Data that dies at every handover — the interoperability gap.

The pattern beneath both numbers is the same. Project information is produced in silos (architect's model, engineer's model, fabricator's model, contractor's schedule, owner's spreadsheet), exchanged as lossy exports, flattened into PDFs for legal comfort, and largely discarded at each phase boundary. The building lives for fifty years; its data rarely survives five.

## BIM: adoption accomplished, promise pending

The industry's answer for two decades has been Building Information Modeling — and credit where due, adoption has genuinely happened. The UK's 2016 mandate matured into the ISO 19650 series, an international standard for managing information across the asset lifecycle, with a common data environment (CDE) as the required single source of project truth; the UK's post-Grenfell Building Safety Act added a statutory "golden thread" of building information for higher-risk buildings. Germany has required BIM on federal infrastructure projects since the end of 2020. Italy mandates BIM on public works above 2 million euros as of January 2025. Spain runs a phased public-procurement BIM plan through 2030. The UK's NBS survey (2025) reports **71 percent of practices using BIM**. On the standards side, **IFC 4.3 became ISO 16739-1:2024**, extending the open data schema beyond buildings to roads, railways, bridges, and ports — the grammar for open exchange exists.

So the models exist. The promise — a shared, trustworthy, living dataset from design through demolition — largely does not. Four gaps explain the difference, and they will organize much of this book:

**The interoperability gap.** Round-tripping a model between authoring tools remains lossy; native formats rule daily work; the open format is used for milestone drops, not collaboration. In practice, the drawing — flattened, signed, static — remains the contractual document, because it is the only artifact everyone can verify.

**The trust gap.** A CDE is a database owned by one party under commercial terms. Its audit trail is a feature of software controlled by whoever administers it. When a dispute reaches arbitration, parties reconstruct history from emails precisely because a platform log, editable by its operator, convinces no one. The industry's core evidentiary need — *who issued what, to whom, when, unalterably* — is not met by any subscription product, as a matter of architecture rather than of vendor goodwill.

**The incentive gap.** The parties who bear the cost of better information (designers, subcontractors) are not the parties who capture its value (owners, operators, insurers). Fragmented procurement means nobody owns the whole-life data business case; each firm rationally under-invests, and the commons stays poor.

**The money gap.** Information and cash travel on unrelated rails. A certified progress payment references model states and site records only through human paperwork, which is why it takes so long — and how long it takes is the industry's quietest scandal, measured next.

## The slowest money in the economy

Construction's payment terms would be considered a crisis in any other industry; here they are custom. The most-cited recent figures come from Rabbet's annual U.S. surveys — a payments-software vendor, so label applied — and they are stark: slow payments cost the U.S. construction industry an estimated **280 billion dollars in 2024** and **299 billion in 2025**, a hidden tax the 2025 report puts at 14 percent of construction costs; **82 percent of subcontractors** reported waiting more than 30 days past due, up from 49 percent two years earlier. Independent surveys agree on the shape: typical end-to-end payment cycles average **57 days** from work performed to cash received, with late-payment cases stretching toward 90, and subcontractors routinely front material and labor costs in the interim — effectively acting as unsecured, uncompensated lenders to the projects they build. Contractors respond rationally by pricing the wait into bids (survey estimates put the markup near 8 percent), so the owner pays for the dysfunction whether or not anyone names it.

!IMG:ch1_slow_money.webp|The payment chain that bleeds the trades.

On top of the wait sits **retention**: 5 to 10 percent of every invoice held back, cascading down the subcontract chain, released months or years later, and — for a small firm — often the difference between solvency and not. Regulators have begun to notice: California capped private-project retention at 5 percent from January 2026; the EU has a proposed regulation to tighten B2B payment terms to 30 days working through its legislature; the UK launched a Fair Payment Code in December 2024. Notice the shape of these remedies: laws begging companies to send money faster, on rails where money simply does not move fast, across a chain of intermediaries who each earn float by holding it. And for the industry's large migrant workforce, one more toll waits at the end: sending wages home costs a **global average of 6.36 percent** per remittance (World Bank, Q3 2025) against a UN target of 3 — the most regressive fee schedule in finance, levied on the people who pour the concrete.

## Reading the instruments

Add up the chapter's gauges. Productivity: flat for decades where every peer industry compounded. Structure: millions of three-person firms in temporary, adversarial coalitions. Error: 5 percent direct, up to a fifth of project cost all-in, annually. Data: born in silos, dead at handover, cost last rigorously measured in 2004 and never smaller since. Money: 57-to-90-day cycles, double-digit hidden taxes, retention as a business model, and the workforce paying 6 percent to move its own wages.

None of these is a technology problem in the narrow sense — the industry has software in abundance. They are **coordination problems among parties who do not trust each other**, transacting in **money that moves slower than the work**, over **records that no one can independently verify**. That triple diagnosis is the book's hinge. Because coordination without trusted intermediaries, money that settles in minutes, and records that verify themselves are not utopian requests — they are, precisely and respectively, what Nostr, Bitcoin, and open model protocols were built to provide. The following chapters take each in turn — beginning with the money, because the money is the load path everything else hangs from.
