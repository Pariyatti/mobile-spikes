# kosa-clj

Kosa service backend written in clojure

## Setup

### Development Dependencies

- Clojure
Install `clojure` as described [here](https://www.clojure.org/guides/getting_started)

- Leinengen
Install `lein` as described [here](https://leiningen.org/#install)

- Docker
Install `docker` as described [here](https://www.docker.com/get-started) and `docker-compose` as described [here](https://docs.docker.com/compose/install/)

## Usage

### Running neo4j
The kosa-clj app needs an neo4j database instance. The `dev-docker.yaml` script sets that up. Use the following command to boot up neo4j using docker. `sudo` is optional on MacOS but required for Linux.

```
sudo docker-compose -f dev-docker.yaml up -d
```

You can stop Neo4j with:

```
sudo docker-compose -f dev-docker.yaml down
```

### Running the Clojure repl and code
To start the app with repl for interactive coding use
```
lein repl
```

For just running the app use
```
lein run
```

## Handy Links

- `docker-compose.yml` example: https://neo4j.com/docs/labs/neo4j-streams/current/docker/#_source_module

## License

Copyright © 2020 Pariyatti.org

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
