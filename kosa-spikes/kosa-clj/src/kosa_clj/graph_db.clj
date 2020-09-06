(ns kosa-clj.graph-db
  (:require [mount.core :refer [defstate]]
            [kosa-clj.config :as config]
            [neo4j-clj.core :as neo4j])
  (:import [java.net URI]))

(defstate graph-db
  :start (neo4j/connect (URI. (get-in config/config [:neo4j :url]))
                        (get-in config/config [:neo4j :user])
                        (get-in config/config [:neo4j :password])))
