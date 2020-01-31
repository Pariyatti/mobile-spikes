# Open Questions

This is a large list of open questions (and a few answers) we hope to discuss with the larger Pariyatti team over the coming weeks and months while kicking off the project for the Pariyatti app. They largely pertain to the high-level operations of the technology team and its stakeholders.

## Administration

- What is the process for making decisions within the Pariyatti tech team?

- Does Pariyatti have a registred trademark on `Pariyatti`? (avoiding knockoffs)

- How do we manage / share secrets (passwords, keys)?

- How do we chat / communicate?
    - Email? --- Steve says they are trying to reduce email traffic.
    - Calls? When and how? --- Google Hangouts Meet
    - Group chat for devs?
        - Google Hangouts Chat seems fundamentally broken for interaction between users within different Google zones; I can't figure out how to allow a Gmail user to join a room I've created in a G Suite organization... this feels like it makes Google Chat a non-starter even before getting to the problem of the required Google account.
        - Slack has message restrictions and ethics issues
        - RocketChat?

- What Project Management tool do we want to use?
    - Asana --- already used at Pariyatti
    - Trello?
    - GitHub boards?
    - Clubhouse? https://app.clubhouse.io/

- GitHub vs. GitLab?


## Ops

- What does the current system topology look like?

- Are we replacing DotNetNuke + 3Dcart with Drupal + something-else?
    - Can Dhamma Servers help the Pariyatti staff with this project?
    - Will Drupal shadow/forward the old URLs so they don't break?


## Development

- How do we write a solid `CONTRIBUTING.md` that hardens:
    - technology
    - decision process (how to design on a 5-10 year timescale)
    - how to become a contributor

- Is everyone cool with Architectural Decision Records (ADRs)?

- Should we build the app on ReactNative, Flutter, or Cordova?
    - If ReactNative, can we use TypeScript? (Assume ClojureScript is out?)
    - What are the pros/cons of each? (Language, Framework, Long-term stability, Dev community, Deprecation)
    - What does a spike of the "Today" infinite scroll look like on each?
    - Will all 3 work for Offline First?
    - i18n advantages?

- Does the editorial process require more knowledge management than a standard CMS offers?

- Do we need an abstract API layer between the CMS and the app?
    - DNN / Drupal API?
    - 3Dcart / replacement API?
    - 3x RSS feeds for "Daily Words of the Buddha" - source?
    - Basic UX:
        - "queue a book list into the `Today` stream": where is this persisted?
        - bookmarks peristence?

- What is the safest, long-term platform for server-side software?
    - Java and Python seem like good bets. Others?
