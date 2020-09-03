# Pariyatti Mobile App Spike

## What is this repository?

This repository still exists for experiments and high-level spikes (like testing new libraries or mobile frameworks). However, most of the production-quality content from this repo has been moved to the following repositories:

- https://github.com/pariyatti/agga - Pariyatti's documentation repo
- https://github.com/pariyatti/kosa - The editorial, library, and publishing service.

## Branch Policy

This repo has no branch policy. Because this is all throw-away code, please feel free to commit directly to `master`.

## Spiking and Resarching

### ToDo:

1. [ ] Neo4j + Clojure (in general)
  - [x] initial setup (so far, so good!)
  - [ ] try one of kosa's more awkward data models? "pali word" card with a list of N translations?
2. [ ] Neo4j + web file uploads (1. local disk => 2. S3 bucket?)
3. [ ] How hard is it to migrate Rails ERB templates?
4. [ ] Spike / research simple authentication mechanism (is this even necessary?)

### Done:

1. [x] Project kick-off / inception
2. [x] Legacy software discovery & replacement (ongoing)
3. [x] Create contact list
4. [x] Create glossary
5. [x] Capture open questions
6. [x] Answer those open questions with the team (waiting for Brihas)
7. [x] Spike front-end frameworks (ReactNative, Flutter, and maybe Cordova)
8. [x] Spike back-end API: do we need to aggregate CMS+ecommerce+feeds+etc to unify the API for the app?
9. [x] Create front-end and back-end repos in https://github.com/pariyatti and begin development
