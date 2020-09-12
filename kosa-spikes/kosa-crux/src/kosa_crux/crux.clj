(ns kosa-crux.crux
  (:require [mount.core :refer [defstate]]
            [crux.api :as crux]
            [crux.kv.rocksdb :as rocks]
            [kosa-crux.config :as config]
            [clojure.java.io :as io]))

(defstate crux-node
  :start   (crux/start-node
            {:crux/tx-log         {:kv-store
                                   {:crux/module `rocks/->kv-store,
                                    :db-dir      (io/file (get-in config/config [:crux :data-dir]) "tx-log")}}
             :crux/document-store {:kv-store
                                   {:crux/module `rocks/->kv-store,
                                    :db-dir      (io/file  (get-in config/config [:crux :data-dir]) "doc-store")}}
             :crux/indexer        {:kv-store
                                   {:crux/module `rocks/->kv-store
                                    :db-dir      (io/file  (get-in config/config [:crux :data-dir]) "indexes")}}
             :crux.node/topology  '[crux.standalone/topology crux.kv.rocksdb/kv-store]})
  :stop (.close crux-node))

(defn insert [datum]
  (crux/submit-tx crux-node [[:crux.tx/put datum]]))

(defn query [id]
  (crux/entity (crux/db crux-node) id))

(comment
  (insert {:crux.db/id :steve :name "Steven Deobald" :place "Jammu"})
  (query :steve))
