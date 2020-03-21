

Here is an API example:

https://www.wikidata.org/w/api.php?action=wbgetentities&sites=enwiki&titles=Berlin&props=descriptions&languages=en&format=json


Here is a search API example:

± curl https://www.wikidata.org/w/api.php\?action\=query\&list\=search\&srsearch\=vipassana\&format\=json

{"batchcomplete":"","continue":{"sroffset":10,"continue":"-||"},"query":{"searchinfo":{"totalhits":40},"search":[{"ns":0,"title":"Q676262","pageid":637031,"size":null,"wordcount":0,"snippet":"Meditation practice described in Buddhism","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q768339","pageid":721756,"size":null,"wordcount":0,"snippet":"Pagoda in Mumbai, India","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q1707114","pageid":1640379,"size":null,"wordcount":0,"snippet":"American <span class=\"searchmatch\">vipassana</span> teacher","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q539048","pageid":507661,"size":null,"wordcount":0,"snippet":"A lay teacher of <span class=\"searchmatch\">Vipassan\u0101</span> meditation and a student of Sayagyi U Ba Khin","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q88189561","pageid":87433448,"size":null,"wordcount":0,"snippet":"an introduction to vipassana meditation with a practical focus","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q18208219","pageid":19737752,"size":null,"wordcount":0,"snippet":"organization","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q10904531","pageid":12176233,"size":null,"wordcount":0,"snippet":"","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q17009402","pageid":18614423,"size":null,"wordcount":0,"snippet":"1997 film by Ayelet Menahemi","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q16973636","pageid":18577525,"size":null,"wordcount":0,"snippet":"organization","timestamp":"2020-03-21T14:17:31Z"},{"ns":0,"title":"Q37670113","pageid":39043043,"size":null,"wordcount":0,"snippet":"scientific article published on January 2010","timestamp":"2020-03-21T14:17:31Z"}]}}

...if we extract the entry in the above results for "S.N. Goenka":

{"ns":0,"title":"Q539048","pageid":507661,"size":null,"wordcount":0,"snippet":"A lay teacher of <span class=\"searchmatch\">Vipassan\u0101</span> meditation and a student of Sayagyi U Ba Khin","timestamp":"2020-03-21T14:17:31Z"}

...curiously, it doesn't actually contain the title "S.N. Goenka"? I'm not sure why yet.

If we do the same search for "S.N. Goenka" directly, we get similar results (but his entry is first):

± curl https://www.wikidata.org/w/api.php\?action\=query\&list\=search\&srsearch\=S.N.%20Goenka\&format\=json
{"batchcomplete":"","continue":{"sroffset":10,"continue":"-||"},"query":{"searchinfo":{"totalhits":17},"search":[{"ns":0,"title":"Q539048","pageid":507661,"size":null,"wordcount":0,"snippet":"A lay teacher of Vipassan\u0101 meditation and a student of Sayagyi U Ba Khin","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q60813122","pageid":60668337,"size":null,"wordcount":0,"snippet":"Wikimedia category","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q39703405","pageid":41054158,"size":null,"wordcount":0,"snippet":"scientific article","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q82882531","pageid":82219694,"size":null,"wordcount":0,"snippet":"scientific article published on 01 July 2010","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q71679178","pageid":71337069,"size":null,"wordcount":0,"snippet":"scientific article published on 01 October 1995","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q39700057","pageid":41050870,"size":null,"wordcount":0,"snippet":"scientific article","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q50764909","pageid":51705258,"size":null,"wordcount":0,"snippet":"scientific article published on 8 November 2013","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q61798824","pageid":61634174,"size":null,"wordcount":0,"snippet":"","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q61801614","pageid":61636831,"size":null,"wordcount":0,"snippet":"","timestamp":"2020-03-21T14:24:26Z"},{"ns":0,"title":"Q38807999","pageid":40168933,"size":null,"wordcount":0,"snippet":"scientific article published on 14 April 2016","timestamp":"2020-03-21T14:24:26Z"}]}}%

...perhaps WikiBase expects us to do N+1 queries over each returned item to see their titles in multiple languages.
