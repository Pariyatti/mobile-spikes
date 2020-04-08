Both Drupal 7 and Drupal 8 are projected to reach end of life around September 2021.

I feel it is much better to go with Drupal 8.8 which is the most recent version. According to the official announcements it is going to be an easier migration to Drupal 9.

I cannot help but compare Drupal 7 to Express.js or Sinatra and Drupal 8 to Rails or Django.

## Questions

I know we are leaning towards Drupal 7. Hence a few questions:

* What happens at Drupal 7 end-of-life?
* What are the specific Drupal 7 modules we need that Drupal 8 does not support?

## Answers from Ankur

Yes, it is a tricky situation.

The reason I am thinking of Drupal 7 is because I want to get us on Drupal as smoothly as possible without having to spend much time on it. The Commerce Kickstart module, Stamps, Quickbooks integration modules etc. are all ready for Drupal 7 with extensive development done over the years. But, unfortunately many of them have not yet started development for Drupal 8. We will probably start getting some alternatives in 2021 or later. Besides the modules, the theming is very tricky with 8 & quite time consuming.

Even after EOL, I think we will still be able to get by easily for at least a year. Drupal 7 has fairly robust security, so it shouldn't be a problem. I have a lot of experience on Drupal 7, so there is nothing to worry about.

Drupal 8 was developed after a lot of Java developers joined the team & thus it is too object oriented. Drupal 7 is completely procedural. So, in many ways 7 is much much better than 8. But, unfortunately it is going in the object oriented direction & we'll have to adjust.

The alternative is to wait for Drupal 8 modules to be developed to fit our needs & then migrate. Drupal 9 is also going to be released soon, I think. So, it is a little bit of a mess. But, 7 is our best bet to get things moving, given the current situation.

## Drupal 7

* Released in 2011
* Reaching end of life in 2021
* Security updates will stop coming in the future
* Quiet barebones, needs a lot of modules to be installed to get started
* Lightweight, cached pages get served faster for anonymous users
* Needs lot of modules to even get to basic functionality
* Has a lot of powerful modules in the ecosystem
* Content editing cannot be done directly from UI (without modules)
* Basic things like Views, Revisions, Alternative URL paths require modules
* WYSIWYG Editor not present by default, Inline editing not enabled

## Drupal 8

* Released in 2015
* Reaching end of life in 2021
* Depends on Sympony framework for backend
* Depends on Twig framework for Themes
* Easy migration to Drupal 9 if deprecated APIs are not used
* Admin Panel has more features and a much better UX
* **WYSIWYG Editor** for new pages and posts
* Inline content editing is directly enabled
* Views are core components - can be easily customized
* Responsive support ( but drops support for IE 6, 7, 8)
* Multilingual features - language, content, interface and translation
* Core is quite functional by default - Views, Revisions, Alternative URL Path
* Picture is one of the included modules
* REST APIs
* Creates proper metadata, schema.org markup and links e.g. 'mailto:' and 'tel:'
* Theme language provided by Twig for CSS and preprocessor funtions
* Out of the box, Drupal 8 installs the following modules: Automated Cron, Bartik, Block, Breakpoint, CKEditor, Classy, Color, Comment, Configuration Manager, Contact, Contextual Links, Custom Block, Custom Menu Links, Database Logging, Datetime, Field, Field UI, File, Filter, Help, History, Image, Internal Dynamic Page Cache, Internal Page Cache, Link, Menu UI, Node, Options, Path, Quick Edit, RDF, Search, Seven, Shortcut, Stable, Standard, System, Taxonomy, Text, Text Editor, Toolbar, Tour, Update Manager, User, Views, and Views UI.

----

Reference Links:

* [Drupal 7 End of Life on November 2021](https://www.drupal.org/psa-2019-02-25)
* [Roadmap for Drupal 7, 8, 9](https://www.drupal.org/blog/drupal-7-8-and-9)
* [Drupal 8.9 will become LTS and receive security updates](https://www.drupal.org/docs/9/drupal-9-release-date-and-what-it-means/what-happens-to-drupal-8-after-drupal-9-is-released#s-drupal-8-long-term-support)
* **2017** article on [Drupal 7 vs Drupal 8](https://www.ostraining.com/blog/drupal/7-vs-8/)


