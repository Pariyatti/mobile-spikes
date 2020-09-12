(ns kosa-clj.graph-db
  (:require [mount.core :refer [defstate]]
            [kosa-clj.config :as config]
            [neo4j-clj.core :as neo4j]
            [clojure.string :as string])
  (:import [java.net URI]))

(defstate graph-db
  :start (neo4j/connect (URI. (get-in config/config [:neo4j :url]))
                        (get-in config/config [:neo4j :user])
                        (get-in config/config [:neo4j :password])))


(defn relationship-map []
  {:nodes [{:label "author" :tag "a" :properties {:name "George Orwell"}}
           {:label "book" :tag "b" :properties {:name "1984"}}]
   :relationship [{"a" "b" :label "wrote" :properties {:year "1949"}}]})

(defn single-node-map []
  {:nodes [{:label "author" :tag "a" :properties {:name "George Orwell"}}]})

(defn create-label-tag [label tag]
  (cond
    (and (nil? tag) (nil? label)) ""
    (nil? tag)                    label
    :else                         (str tag ":" label)))

(defn create-properties [properties]
  (->> properties
       (map (fn [[k v]]
              (str (name k) ":" "'" v "'")))
       (string/join " ")
       ((fn [ps] (if (string/blank? ps) "" (str "{" ps "}"))))))

(defn create-node [{label :label tag :tag properties :properties}]
  (let [label-tag  (create-label-tag label tag)
        properties (create-properties properties)]
    (if (string/blank? label-tag)
      (string/join " " ["CREATE" "(" properties ")"])
      (string/join " " ["CREATE" "(" label-tag properties ")"]))))

