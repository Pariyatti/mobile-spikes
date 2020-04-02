# Open Questions

This is a large list of open questions (and a few answers) we hope to discuss with the larger Pariyatti team over the coming weeks and months while kicking off the project for the Pariyatti app. They largely pertain to the high-level operations of the technology team and its stakeholders.

## Administration

- What is the process for making decisions within the Pariyatti tech team?

- Does Pariyatti have a registred trademark on `Pariyatti`? (avoiding knockoffs) 
Yes, we do (Brihas)

- How do we manage / share secrets (passwords, keys)?
We use LastPass Enterprise (Brihas)

- How do we chat / communicate?
    - Email
    - Calls: GoToMeeting, Hangouts, WhatsApp, Telegram    
    - Group chat: For now, we have a single Telegram channel

- What Project Management tool do we want to use?
    - Asana

- GitHub vs. GitLab?
    - We have chosen to stick with GitHub for now. See [Contributing](https://github.com/pariyatti/agga/blob/master/CONTRIBUTING.md)

## Ops

- What does the current system topology look like?

- Are we replacing DotNetNuke + 3Dcart with Drupal + something-else?
    - Can Dhamma Servers help the Pariyatti staff with this project? - That would be great! (Brihas)    
    - Will Drupal shadow/forward the old URLs so they don't break? - We've had website transitions in the past, and sucessfully setup HTTP 301 re-directs to map old URLs to new URLs and it works well (Brihas)


## Development

- Is everyone cool with Architectural Decision Records (ADRs)?

- Do we need an abstract API layer between the CMS and the app?
    - DNN / Drupal API?
    - 3Dcart / replacement API?
    - 3x RSS feeds for "Daily Words of the Buddha" - source?
        - You can find all our RSS feeds at: https://www.pariyatti.org/Free-Resources/Daily-Words/RSS-Feeds (Brihas)
    - Basic UX:
        - "queue a book list into the `Today` stream": where is this persisted?
        - bookmarks peristence?

- What is the safest, long-term platform for server-side software?
    - Java, Ruby, and Python seem like good bets. Others?
