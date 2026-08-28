# MINDEF Product Office Website
## Prototype content and information architecture

Use this document to build a responsive website prototype with an AI design or coding tool.

## Working assumptions

- Site name: MINDEF Product Office
- Short name: MPO
- Audience: MINDEF and DSTA personnel who want to understand MPO, learn about product development, seek support, explore products, or use product platforms and tools
- The Product Development page provides an overview and links to the standalone Defence Product Playbook
- The MPO website does not reproduce the full playbook
- Text in square brackets requires confirmation before publication

Reference: [Defence Product Playbook](https://defence-pp.vercel.app/#/home)

---

# 1. Overall sitemap

```text
MINDEF Product Office
│
├── Home
│   ├── What MPO does
│   ├── Who this website is for
│   ├── Explore the Product Playbook
│   ├── Seek funding or product support
│   ├── Featured products
│   └── Featured platforms and tools
│
├── About Us
│   ├── What We Do
│   ├── Our Scope and Domains
│   ├── Our Team
│   ├── Our Values
│   └── How We Work with MINDEF Teams
│
├── Product Development
│   ├── What the Playbook Is
│   ├── Who It Is For
│   ├── How to Use the Playbook
│   ├── Product Principles
│   ├── What It Covers
│   │   ├── Define the Users, Problem and Value
│   │   ├── Structure the Product Team and Delivery Model
│   │   ├── Plan, Test and Deliver
│   │   ├── Modernise Existing Products
│   │   └── Govern and Review Products
│   └── Open the Full Product Playbook [external]
│
├── Funding & Support
│   ├── Is Your Problem a Good Fit?
│   ├── How MPO Assesses Software Problems
│   ├── Prepare a Software Brief using 6W
│   ├── Assessment Criteria using the 4C Check
│   ├── Funding and Approval Process
│   ├── What Happens Next
│   └── Submit a Software Brief
│
├── Products
│   ├── Product portfolio introduction
│   ├── Product scorecards
│   ├── Product one-pagers
│   │   ├── URMS
│   │   ├── Qualify
│   │   └── [Additional products]
│   └── Product detail page
│
├── Platform & Tools
│   ├── ACE / Foundry
│   └── Spectrum
│       ├── PRIZM
│       ├── CLARA
│       ├── INSIGHT
│       └── BEACON
│
└── Contact Us
    ├── Contact details
    ├── Reason for contact
    └── Alternative routes
```

## Primary navigation

- About Us
- Product Development
- Funding & Support
- Products
- Platform & Tools
- Contact Us

The logo returns users to Home.

## Main call to action

Use **Submit a Software Brief** as the main header action if this is the primary way to engage MPO. If the submission service is not ready, use **Contact Us** until it is available.

---

# 2. Responsive layout requirements

The prototype must include desktop and mobile layouts. Tablet can use the mobile navigation with a two-column content grid where space allows.

## Breakpoints

- Mobile: below 768 px
- Tablet: 768 px to 1023 px
- Desktop: 1024 px and above

## Desktop

- Use a horizontal header with the full primary navigation
- Keep the main call to action visible in the header
- Use a maximum content width between 1200 px and 1440 px
- Use two to four columns for cards, depending on content density
- Use a two-column layout for sections with supporting visuals or side content
- Keep body text lines between 60 and 75 characters where practical
- Use breadcrumbs on all pages except Home

## Mobile

- Use a compact header with logo, menu button and one clear action
- Place navigation in a full-height drawer or overlay
- Use a single-column reading order
- Make cards full width
- Make primary buttons full width where this improves tap access
- Use at least 44 px by 44 px tap targets
- Convert tabular content into stacked cards or labelled rows
- Avoid horizontal scrolling
- Do not hide essential content behind hover interactions
- Keep section headings and actions visible without oversized empty space

## Shared component behaviour

| Component | Desktop | Mobile |
|---|---|---|
| Header | Full navigation and primary action | Logo, menu button and compact action |
| Hero | Text and optional visual in two columns | Text first, visual below |
| Card grid | Two to four columns | One column |
| Process steps | Horizontal when space allows | Vertical sequence |
| Tables | Standard table | Stacked labelled rows |
| Page navigation | Breadcrumbs and optional local navigation | Breadcrumbs and collapsible local navigation |
| Buttons | Inline where related | Full width for primary actions |
| Footer | Multi-column | Stacked groups or accordions |

---

# 3. Content and writing rules

## Voice

- Direct
- Practical
- Clear to readers who are new to product work
- Specific about what users can do next
- Careful not to promise services, funding or outcomes that have not been confirmed

## Writing rules

- Do not use em dashes
- Lead with the problem, user or outcome
- Keep headings short and descriptive
- Prefer active verbs such as define, test, measure, submit and explore
- Explain product terms when they first appear
- Avoid slogans that do not add information
- Avoid claims such as seamless, world-class, cutting-edge, revolutionary or game-changing
- Do not use filler phrases such as in today's fast-paced landscape, unlock the power of, embark on a journey or leverage synergies
- Do not describe a list of features as an outcome
- Use sentence case for headings and buttons

## Preferred terms

| Avoid | Use |
|---|---|
| End user | User, operator or the specific user group |
| Why product | Why product ways of working |
| Structure the team right | Structure the product team and delivery model |
| Iterate until OK | Iterate based on evidence |
| Modernise legacy | Modernise existing products |
| Features delivered | User or operational outcomes improved |
| Funding the product | Funding & Support |
| Products we build | Products |
| Product tools | Platform & Tools |

---

# 4. Home

## Page purpose

Explain what MPO does and help users choose the right next step.

## Hero

### Heading

> Build digital products around real user needs.

### Body copy

> MPO helps MINDEF teams define software problems, test possible solutions and develop products with clear outcomes.

### Actions

- Primary: **Seek product support**
- Secondary: **Explore product development**

### Responsive behaviour

- Desktop: Use a two-column hero. Place copy and actions on the left and a useful process visual on the right.
- Mobile: Use one column. Stack the actions and place the visual below or remove it if it adds no information.

## What MPO does

### Copy

> MPO works with teams on software problems that need user research, product direction or a different delivery approach. We help teams clarify the problem, identify how success will be measured and decide what to test or build next.

### Support areas

#### Define the problem

> Identify who is affected, what is getting in their way and why it matters.

#### Test the approach

> Check key assumptions with users before committing to a full build.

#### Measure the outcome

> Track whether the product is improving the user or operational outcome.

## Who this website is for

Use four cards.

### Organisation leaders

> Understand how product teams are set up, supported and reviewed.

Action: **Learn about MPO**

### Ops Managers

> Learn how to frame a problem, define success and guide product decisions.

Action: **Explore product development**

### Product, design and engineering teams

> Find guidance, platforms and tools for product work.

Action: **Browse platforms and tools**

### Teams seeking support

> Check whether your software problem is suitable for MPO support or funding.

Action: **Check your problem**

Desktop: Display four cards in one row or two rows.  
Mobile: Stack the cards in the same priority order.

## Explore the Product Playbook

### Heading

> A practical guide to product development

### Copy

> The Defence Product Playbook explains how to define the right problem, structure a product team, test assumptions and review whether a product is delivering value.

### Actions

- **View the playbook overview**
- **Open the full playbook** [external]

## Seek funding or product support

### Heading

> Have a software problem?

### Copy

> You do not need a complete solution before speaking with MPO. Start with the users affected, the problem they face and the evidence you have.

Action: **Check whether your problem is a good fit**

## Featured products

Show two product cards in the first prototype.

- URMS
- Qualify

Each card should contain:

- Product name
- User group
- One-sentence problem statement
- Intended or demonstrated outcome
- Link to the product one-pager

Do not invent product outcomes. Use approved product scorecards and one-pagers as the source.

## Featured platforms and tools

Show three or four cards selected from:

- ACE / Foundry
- PRIZM
- CLARA
- INSIGHT
- BEACON

Each card should explain what the platform or tool helps a team do. Keep the copy to two short sentences.

## Closing action

### Heading

> Not sure where to start?

### Copy

> Tell us about the problem and the people affected. MPO can help identify an appropriate next step.

Action: **Contact MPO**

---

# 5. About Us

## Page purpose

Explain MPO's role, scope, team, values and working relationship with MINDEF teams.

## Hero

### Heading

> About the MINDEF Product Office

### Body copy

> MPO helps MINDEF teams work on software problems with a clear focus on users, evidence and measurable outcomes.

## What We Do

### Suggested copy

> We support teams from problem framing through product review. The level of support depends on the problem, the team's needs and the stage of the product.

### Responsibilities

- Frame and validate software problems
- Plan and conduct user research
- Advise on product strategy and team structure
- Support concept testing and early product development
- Provide product platforms, standards and tools
- Help teams define and review product outcomes

Only publish services that MPO has confirmed.

## Our Scope and Domains

### Suggested copy

> MPO works across selected MINDEF software problems and product domains. This page helps teams understand where MPO can contribute and where another office may be better placed to help.

### Content fields

- Supported domains: [confirm list]
- Types of software problems supported: [confirm list]
- Work outside MPO's scope: [confirm list]
- Partner organisations: [confirm list]

Use domain cards on desktop and a stacked list on mobile.

## Our Team

### Suggested copy

> MPO brings together product, design, engineering and operational experience. Contact the office through the shared channel so your request can be directed to the right person.

### Team-card content

- Name
- Role
- Area of responsibility
- Products or domains supported
- Optional short biography

Desktop: Use a three-column card grid.  
Mobile: Use one card per row.

## Our Values

### Speed and agility

> Work in small steps, learn early and change direction when the evidence supports it.

### Value for money

> Compare the outcome a product delivers with the cost of building and running it.

### Control and resilience

> Move quickly within clear security, reliability and operational guardrails.

## How We Work with MINDEF Teams

Present this as a five-step process.

1. **Share the problem**  
   Tell us who is affected, what happens today and why it matters.
2. **Review the evidence**  
   We look at available research, data and previous attempts.
3. **Agree on the next step**  
   This may be further discovery, a short test, product advice or a funding assessment.
4. **Work with users**  
   The team tests assumptions with the people who experience the problem.
5. **Review the outcome**  
   The team tracks whether the problem is improving and adjusts the approach.

Desktop: Show the process horizontally if each step remains readable.  
Mobile: Show a numbered vertical sequence.

Do not show this as a guaranteed service process until MPO confirms it.

---

# 6. Product Development

## Page purpose

Give users a clear overview of product development and route them to the relevant section of the standalone Defence Product Playbook.

This is an overview page. Do not reproduce the playbook's full chapters, frameworks, calculators or exercises on the MPO website.

## Hero

### Heading

> Develop products around users, problems and outcomes.

### Body copy

> The Defence Product Playbook helps teams define the problem worth solving, set up the right delivery model, test assumptions and review whether the product is creating value.

### Actions

- Primary: **Open the full Product Playbook** [external]
- Secondary: **Find your starting point** [page anchor]

## What the Playbook Is

### Copy

> The playbook is a practical guide to product ways of working in defence. It brings together principles, frameworks and examples for teams developing or improving software products.

## Who It Is For

### Organisation leaders

> Learn how to sponsor, support and review product teams.

### Ops Managers

> Learn how to own the problem, define success and make decisions with the product team.

### Product, design and engineering teams

> Learn how to research user needs, test assumptions and deliver improvements in small steps.

Desktop: Display three audience cards in one row.  
Mobile: Stack the cards in the same order.

## How to Use the Playbook

### Copy

> Read the playbook from the start if product work is new to you. If you have a specific need, use the section summaries below to go directly to the relevant chapter.

### Guidance

- Start with the foundations if you are new to product ways of working
- Use the problem and value section before committing to a solution
- Use the team section when setting up ownership and delivery roles
- Use the delivery section when planning and testing a product change
- Use the modernisation section for an existing product that may no longer be fit for purpose
- Use the governance section when reviewing product performance or investment

## Product Principles

### Define a real problem

> Be clear about who experiences the problem, why it happens and how you will know it has improved.

### Establish clear accountability

> Give one owner responsibility for the outcome and provide the team with the authority needed to act.

### Test before scaling

> Test the riskiest assumptions with real users before committing to a full build.

## What It Covers

### 1. Define the Users, Problem and Value

#### Overview copy

> Understand who is affected, frame the problem clearly and define the outcome that matters.

#### Topics

- User research and user journeys
- Qualitative and quantitative discovery
- Problem statements using 6W
- Problem validation using the 4C check
- Problem prioritisation using Severity, Frequency and Reach
- Value metrics, outcome metrics and Value-Cost Ratio

Action: **Define the problem and value**  
External target: `https://defence-pp.vercel.app/#/problems`

### 2. Structure the Product Team and Delivery Model

#### Overview copy

> Set clear ownership, bring together the skills needed and agree how internal and vendor teams will work together.

#### Topics

- Product squad composition
- Ops Manager and Product Lead partnership
- Product, design and engineering responsibilities
- Decision-making and accountability
- RACI across the product lifecycle
- Vendor operating model

Action: **Structure the product team**  
External target: `https://defence-pp.vercel.app/#/team`

Note: Detailed vendor operating model guidance is proposed content. Mark it **Coming soon** until it is published.

### 3. Plan, Test and Deliver

#### Overview copy

> Set a product direction, test possible solutions and deliver improvements that users can try.

#### Topics

- Outcome-led product roadmapping
- Solution prioritisation using impact and effort
- Concept testing and prototyping
- User stories and acceptance criteria
- Sprint delivery, UAT and release
- Qualitative and quantitative solution validation
- Iteration based on evidence

Action: **Plan, test and deliver**  
External target for current testing guidance: `https://defence-pp.vercel.app/#/test`

Note: Roadmapping, user stories, sprint delivery, UAT and release are proposed additions. Mark them **Coming soon** or link to an approved guide until the content is published.

### 4. Modernise Existing Products

#### Overview copy

> Assess whether an existing product remains fit for purpose, then modernise it in stages so operations can continue.

#### Topics

- Business, user, data, resilience and cost fitness
- Mission criticality
- IMPACT modernisation framework
- Modernisation roadmap
- Progressive replacement
- Change management and adoption

Action: **Modernise an existing product**  
External target: `https://defence-pp.vercel.app/#/modernise`

### 5. Govern and Review Products

#### Overview copy

> Review evidence, clear blockers and decide whether to continue, change, scale, maintain or stop a product.

#### Topics

- Value and outcome metric tracking
- Review cadence based on criticality
- Product review questions
- User research and validation findings
- Portfolio signals
- Investment and lifecycle decisions

Action: **Govern and review products**  
External target: `https://defence-pp.vercel.app/#/govern`

### Responsive behaviour for the five sections

- Desktop: Use a vertical timeline or alternating two-column sections. Keep each section summary and action visible without expansion.
- Mobile: Use five stacked cards. Keep topics in a short list and place the action at the bottom of each card.

## Find Your Starting Point

| User need | Recommended destination |
|---|---|
| I am new to product work | Why product ways of working |
| I need to define a software problem | Define the Users, Problem and Value |
| I am setting up a team | Structure the Product Team and Delivery Model |
| I am testing a possible solution | Plan, Test and Deliver |
| I am modernising an existing product | Modernise Existing Products |
| I review or oversee products | Govern and Review Products |

On mobile, render each row as a selectable card rather than a table.

## Closing action

### Heading

> Read the full guidance

### Copy

> Open the Defence Product Playbook for the full frameworks, examples and interactive exercises.

Action: **Open the full Product Playbook** [external]

## External link behaviour

- Open the playbook in a new tab
- Use a consistent external-link icon
- Include accessible text that states the link opens in a new tab
- Link directly to the relevant chapter where possible

---

# 7. Funding & Support

## Page purpose

Help teams decide whether to approach MPO, prepare the right information and understand the assessment process.

## Hero

### Heading

> Start with the software problem.

### Body copy

> Tell us who is affected, what happens today and why it matters. You do not need a completed solution before approaching MPO.

Action: **Check whether your problem is a good fit**

## Is Your Problem a Good Fit?

Use a short self-check.

- A specific group of users experiences the problem
- The problem has a meaningful operational or organisational consequence
- The problem occurs often enough or affects enough users to justify attention
- The root cause or best solution is not fully understood
- Software could improve the outcome
- The team can provide access to users and relevant evidence
- An accountable owner can make or escalate decisions

### Result copy

> A clear problem and access to users are enough to begin a discussion. MPO can help determine whether further discovery, product support or funding assessment is appropriate.

This result must not imply that the problem has been accepted or approved for funding.

## How MPO Assesses Software Problems

### Suggested copy

> MPO reviews the problem, available evidence, expected value and the team's ability to act. The assessment focuses on the need before considering a specific solution.

### Assessment areas

- User need
- Severity, frequency and reach
- Operational or organisational consequence
- Evidence supporting the problem
- Potential for a software intervention
- Access to users
- Accountable ownership
- Dependencies, security and delivery constraints

## Prepare a Software Brief using 6W

### Suggested copy

> The software brief gives MPO enough context to understand the problem and decide what to explore next. Keep it focused on the current situation rather than a preferred solution.

### Fields

- **What:** What is going wrong?
- **Where:** Where does it happen?
- **When:** When and how often does it happen?
- **Who:** Who is affected?
- **Why it happens:** What may be causing it?
- **Why it matters:** What is the consequence if it continues?

Also include:

- Available evidence
- Existing systems
- Previous attempts
- Known constraints
- Accountable owner

Action: **Open the software brief template**

## Assessment Criteria using the 4C Check

### Clarity

> The problem identifies a specific user group, task and source of friction.

### Consequence

> The brief explains the cost or operational effect of leaving the problem unresolved.

### Cause

> The team has a reasonable view of what may be causing the problem.

### Confirmation

> Research, data or observed behaviour supports the problem and its likely cause.

Desktop: Show the four checks as cards.  
Mobile: Use a stacked checklist.

## Funding and Approval Process

The sitemap includes this section, but the process must be confirmed before publication.

Use this placeholder sequence in the prototype:

1. Submit a software brief
2. Initial review by MPO
3. Clarification with the requesting team
4. Problem and evidence assessment
5. Funding or support recommendation
6. Decision and next steps

For each step, confirm:

- Owner
- Required information
- Decision point
- Expected time
- Possible outcomes

Do not publish response times or approval commitments until they are confirmed.

## What Happens Next

### Suggested copy

> After reviewing the brief, MPO will contact the team to clarify the problem and available evidence. The next step may be further discovery, a short test, product advice, referral to another office or a funding assessment.

Possible outcomes:

- More information required
- Discovery support
- Product consultation
- Referred to another team
- Proceed to funding assessment
- Not suitable for MPO support

## Submit a Software Brief

### Suggested copy

> Submit the brief when you can describe the users, the problem and why it matters. It is acceptable for the cause or solution to remain uncertain.

Primary action: **Submit a software brief**  
Secondary action: **Contact MPO**

Mobile: Keep the submit action visible after the self-check and at the end of the page.

---

# 8. Products

## Page purpose

Present MPO's product portfolio through product scorecards and concise one-pagers.

## Hero

### Heading

> Products supported by MPO

### Body copy

> Explore the user problems these products address, who they serve and how their outcomes are tracked.

## Portfolio introduction

### Suggested copy

> Each product page starts with the problem and the user. Product scorecards show whether the intended outcome is improving over time.

## Product listing

Initial products:

- URMS
- Qualify
- [Additional products]

### Product-card content

- Product name
- User group
- Problem statement
- Product status
- Latest outcome summary, if approved
- Actions: **View one-pager** and **View scorecard**

Desktop: Use a two or three-column card grid.  
Mobile: Use one card per row and place the main action first.

## Product scorecards

### Suggested copy

> Product scorecards track whether a product is improving the outcome it was created to address. They should show the baseline, current result, target and reporting period.

### Scorecard fields

- Product name
- Problem statement
- Primary user group
- Value metric
- Outcome metric
- Baseline
- Current result
- Target
- Trend
- Reporting period
- Annual product cost, if appropriate
- Value-Cost Ratio, if appropriate
- Key learning or decision

Do not use a single overall score without showing what it is based on.

### Responsive scorecard behaviour

- Desktop: Use a compact scorecard summary at the top, a simple trend chart and a clear metric table.
- Mobile: Stack each metric as a labelled row. Place the value before supporting detail. Use a simplified responsive chart and avoid horizontal scrolling.

## Product one-pagers

Each product one-pager should contain:

1. Product name and status
2. One-sentence summary
3. User problem
4. Primary users
5. How the product helps
6. Value and outcome metrics
7. Evidence or progress
8. Current focus
9. Product owner or contact
10. Related tools or playbook guidance

### Copy pattern

> [Product] helps [specific user group] complete [important task] with less [delay, uncertainty or manual work]. The team tracks [value metric] to determine whether the problem is improving.

Do not publish unsupported outcome claims.

## URMS

Use the product one-pager structure above. Source the problem statement, user group and metrics from the approved URMS scorecard.

## Qualify

Use the product one-pager structure above. Source the problem statement, user group and metrics from the approved Qualify scorecard.

---

# 9. Platform & Tools

## Page purpose

Explain the platforms and tools available to product teams and help users identify when each one is useful.

## Hero

### Heading

> Platforms and tools for product teams

### Body copy

> Find the systems, design resources and product tools that support research, design, delivery and measurement.

## Browse by need

Use four anchor links or simple filters:

- Research and synthesis
- Design and prototyping
- Build and delivery
- Measurement and insight

If the number of tools remains small, use anchor links rather than a complex filter.

## ACE / Foundry

### Suggested copy

> [Add an approved description of the platform, its intended users and the work it supports.]

### Required content

- What it is
- Who it is for
- What it helps users do
- When to use it
- Access requirements
- Support contact
- Primary action

Do not infer the platform's purpose from its name.

## Spectrum

### Suggested copy

> Spectrum brings together product tools used across research, design and measurement. Choose a tool based on the task you need to complete.

Confirm this description and whether Spectrum is the approved name for the tool group.

## PRIZM

### Suggested copy

> PRIZM is a design system for building consistent digital interfaces. It provides approved components, patterns and design guidance for product teams.

### Content

- Intended users
- Available components and guidance
- When teams should use PRIZM
- Access link
- Support contact

Action: **Explore PRIZM**

## CLARA

### Suggested copy

> CLARA helps product teams work with programme knowledge and create structured research outputs with supporting references.

### Content

- Intended users
- Supported research tasks
- Required inputs
- Output types
- Access link
- Support contact

Action: **Explore CLARA**

## INSIGHT

### Suggested copy

> [Add an approved description of INSIGHT, including the user need it addresses and the work it supports.]

### Required content

- What it is
- Who it is for
- What it helps users do
- When to use it
- Access link
- Support contact

## BEACON

### Suggested copy

> [Add an approved description of BEACON, including the user need it addresses and the work it supports.]

### Required content

- What it is
- Who it is for
- What it helps users do
- When to use it
- Access link
- Support contact

## Tool-card design

Each card should contain:

- Tool name
- Category
- One-sentence purpose
- Intended user
- Availability or access status
- Primary action

Desktop: Use a two-column card grid with a category filter if needed.  
Mobile: Stack cards and use anchor links or a compact filter drawer.

---

# 10. Contact Us

## Page purpose

Give users a clear route to MPO and direct common requests to the right page.

## Hero

### Heading

> Contact MPO

### Body copy

> Contact us about a software problem, product support, an MPO product or access to a platform or tool.

## Contact options

### Software problem or funding request

> Use the software brief so we have enough information to review the problem.

Action: **Submit a software brief**

### Product question

> Contact the product owner listed on the relevant product page.

Action: **View products**

### Platform or tool access

> Check the relevant platform or tool page for access instructions and support contacts.

Action: **View platforms and tools**

### General enquiry

> Use the MPO shared contact for questions that do not fit the routes above.

Contact: [shared mailbox, form or approved channel]

## Contact form fields

If a general contact form is required, keep it short:

- Name
- Organisation or unit
- Work email
- Reason for contact
- Message
- Relevant product, platform or tool, if applicable

Do not ask users to enter classified or sensitive operational information in a general web form. Add the appropriate handling notice.

### Responsive behaviour

- Desktop: Use a two-column layout with contact routes on the left and general contact details on the right. Keep the software brief route prominent.
- Mobile: Stack routes in priority order. Put the software brief route first and use large tap targets.

---

# 11. Reusable components

- Global header
- Mobile navigation drawer
- Global footer
- Breadcrumbs
- Hero with one primary and one secondary action
- Audience card
- Task card
- Product card
- Product scorecard
- Platform or tool card
- Process step
- Checklist
- Status tag
- External-link treatment
- Call-to-action banner
- Accordion for supporting detail
- Responsive chart container

Each page should end with one clear next step.

---

# 12. Status labels

- Available
- Pilot
- Coming soon
- External resource
- Internal access required
- Template

Do not use colour as the only way to communicate status.

---

# 13. Accessibility requirements

- Use semantic heading levels
- Provide visible keyboard focus states
- Maintain sufficient colour contrast
- Use descriptive link and button labels
- Provide text alternatives for informative images
- Do not rely on hover to reveal essential content
- Label external links clearly
- Ensure forms have visible labels and useful error messages
- Keep touch targets at least 44 px by 44 px
- Support text zoom without clipping or overlap
- Respect reduced motion settings

---

# 14. Content inventory

## Available from the current Product Playbook

- Why product ways of working
- Product principles
- Ops-Tech Integration
- 6W problem framing
- 4C problem validation
- Severity, Frequency and Reach prioritisation
- Value and outcome metrics
- Value-Cost Ratio
- Product team structures and roles
- Two-in-a-box model
- RACI
- Theory of change
- TEST framework
- Product fitness assessment
- IMPACT modernisation framework
- Governance and product review
- ProductOps flywheel
- PRIZM and CLARA descriptions

## Content requiring confirmation or development

- MPO scope and supported domains
- MPO team details
- MPO engagement process
- Funding and approval process
- Submission destination and response times
- URMS one-pager and scorecard
- Qualify one-pager and scorecard
- Additional product one-pagers
- ACE / Foundry description
- Spectrum description and naming
- INSIGHT description
- BEACON description
- Access and support links for every platform and tool
- Roadmapping guidance
- Vendor operating model guidance
- User stories and acceptance criteria
- Sprint, UAT and release guidance
- Contact details and information-handling notice

---

# 15. AI prototyping prompt

> Build a responsive website prototype for the MINDEF Product Office using this specification. Follow the sitemap exactly: Home, About Us, Product Development, Funding & Support, Products, Platform & Tools, and Contact Us. Keep Product Development as an overview page that links to the standalone Defence Product Playbook. Use the provided copy. Do not invent organisational details, product outcomes, funding commitments, platform descriptions or URLs where the document contains placeholders. Create desktop and mobile layouts. Use a horizontal navigation and multi-column card grids on desktop. Use a menu drawer, single-column cards, stacked process steps and mobile-friendly scorecards on small screens. Apply accessible headings, visible focus states, sufficient contrast, 44 px tap targets and clear external-link labels. Keep the visual style restrained, practical and suitable for an internal defence organisation. Do not use em dashes or promotional filler copy.

---

# 16. Items to confirm before production

- Final site name and brand treatment
- Approved primary header action
- MPO scope, domains and services
- Team details and contact channel
- Funding and approval process
- Software brief destination
- Product scorecards and one-pagers
- Platform and tool descriptions
- Access requirements and approved links
- Security classification and information-handling notice
- Analytics, privacy and accessibility requirements
- Ownership and review date for each page

