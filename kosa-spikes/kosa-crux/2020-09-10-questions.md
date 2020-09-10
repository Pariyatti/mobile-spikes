# Communication

- #crux on Clojurians Slack
- shared Slack channel w nilenso
  - [ ] Slack bridge
- official: zulip => #crux-dev
- contributions definitely welcome
- land grab: cloud doc storage adapters (azure, google cloud, etc.)

# Crux Sustainability

- MIT license forever?
- do they have any intention whatsoever of closing Crux? 
  - ...or making it "open core" or whatever?
  - bootstrapped, firmly in the black
  - "Open Time Store"
  - Crux+ for big banks -- service & support
    - might make hairy things (SAP integration) proprietary
  - modelled after RedHat / ElasticSearch world (free w/ $ support)
  - sunsetting plan: transfer to apache? not sure

- what's the longevity plan for Juxt?
  - Juxt in 10, 20, 30 years?
  - after everyone is dead?
  - worried about what happens when hakan dies
  - juxt: "make a difference" (idol: xerox parc)

- what's the sustainability & longevity plan for Crux?
  - developer community?

# Moving in, Moving out

- how easy is it to migrate away *today*? 
  (crux => neo4j, crux => datomic)

- how easy is it to migrate onto *today*? (neo4j => crux)
  - pros and cons of docs vs. tuples
    - [ ] research
  - crux has the txn log
  - moving off neo4j might be hard?
  - datomic => crux is possible but no big dbs transitioned yet

# Domain

- is anyone at Juxt a regular Vipassana meditator?
  - just Hakan so far

- explain the life cycle we're anticipating for the documents which need to live in pariyatti's library; ask they're honest opinion of Crux is a good fit
  - feels ok (see notebook)

- modeling:
  - derivative works? (say, translations / transcripts)
  - editions? is an edition a der. work or new valid-time?
  - how to model a document from 300 BCE?
  - tweaks? (ex. "monk changed one word in 1400")
    - "ship of theseus all the way down"
    - lean on relationship between identity and time
    - all identities are fiction / are models
    - `valid-time` is a bit of a hammer; harder to query
    - at a certain point, everything is single-character documents / CRDTs
    - conclusion: maybe don't change existing documents if possible?
  - when do you draw the line and model a relationship as a document?

- pain points:
  - inheritance (but attributes can be inherited)
  - sorting is a bit tricky with big data
  - RDF capabilities
  - Datomic's Composite Tuples - doesn't exist in Crux yet

- structure on a spectrum:
  1. tabular
  2. graph
  3. totally unstructured

...arguably, Publisher could be in tabular (pgsql) and Library in 2+3 (crux). But between-db consistency problems go away if we just use Crux rather than Crux+Postgres. Also less mental overhead in worrying about Datalog on one side and SQL on the other.

- schema migrations?
  - for a single doc: `clojure.spec`
  - can always put new schema version (data "migration") over old docs
  - there is a coming schema layer
  - schema layer even supports SQL

# Tech

- how hard is it to integrate existing search providers (Lucene, Elastic, etc.) on top of Crux?
  - is there built-in search?
  - WIP -- using Lucene node
- distributed ACID all through Kafka? (future concern)
  - yup, pretty much
- graph specifics for specifically graph-shaped data?
  - just graph queries? or graph storage?
  - could be "graph-looking" if need be, though inefficient
- bitemporal structure over huge historical timespans?
  - 600 BC - 2020 AD
  - is `200 BC` a valid-time? :/
      - maybe not
      - but no efficient way to do a time slice query on 3rd time 
      - efficiency doesn't matter too much, though so maybe just create 3rd time
      - if you wanted to move everything BACK to valid-time later, you could retrofit because it's mutable
  - vs. trading & finance systems (almost the opposite)
  - is this "backfill"? :)
  - "bitemporal range queries" ref: StrangeLoop Sept 2019
- was CAS removed in favour of`match`?
  - yes. because compare on entity A and swap on entity B pollutes entity A's timeline


