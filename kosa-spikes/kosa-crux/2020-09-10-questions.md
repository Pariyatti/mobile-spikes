# Crux Sustainability

- MIT license forever?
- do they have any intention whatsoever of closing Crux? 
  - ...or making it "open core" or whatever?
- what's the longevity plan for Juxt?
  - Juxt in 10, 20, 30 years?
  - after everyone is dead?
- what's the sustainability & longevity plan for Crux?
  - developer community?

# Moving in, Moving out

- how easy is it to migrate away *today*? 
  (crux => neo4j, crux => datomic)
- how easy is it to migrate onto *today*? 
  (neo4j => crux)

# Domain

- explain the life cycle we're anticipating for the documents which need to live in pariyatti's library; ask they're honest opinion of Crux is a good fit
- is anyone at Juxt a regular Vipassana meditator?
- modeling:
  - derivative works? (say, translations / transcripts)
  - editions? is an edition a der. work or new valid-time?
  - how to model a document from 300 BCE?
  - tweaks? (ex. "monk changed one word in 1400")
  - when do you draw the line and model a relationship as a document?

# Tech

- how hard is it to integrate existing search providers (Lucene, Elastic, etc.) on top of Crux?
  - is there built-in search?
- distributed ACID all through Kafka? (future concern)
- graph specifics for specifically graph-shaped data?
  - just graph queries? or graph storage?
- bitemporal structure over huge historical timespans?
  - 600 BC - 2020 AD
  - is `200 BC` a valid-time? :/
  - vs. trading & finance systems (almost the opposite)
  - is this "backfill"? :)
  - "bitemporal range queries" ref: StrangeLoop Sept 2019
- was CAS removed in favour of `match`?



