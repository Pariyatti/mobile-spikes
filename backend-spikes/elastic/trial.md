
I set up a sample ElasticSearch instance at: https://cloud.elastic.co/deployments/66dfa60352cb4d3ca34c41c76524b0f5

...honestly, ES is more finicky than I was expecting. It wants JSON documents pushed *into* its REST API and it doesn't seem to have any way of crawling or indexing automatically. Nor does it really have a blanket "search everything with a natural language string" type of search, like Google does.

I'm asking some folks who have experience with Elastic if there are simpler interfaces to it. The setup for Elastic Cloud was incredibly easy and this would be a nice way to go that relies on open source software we don't need to manage ourselves, rather than putting all our faith in Google.

+ Both WordPress and Drupal have built-in Elasticsearch support
