(ns kosa-clj.core
  (:require[neo4j-clj.core :as neo4j])
  (:import (java.net URI)))

(defn -main
  "I don't do a whole lot."
  [& args]
  (println "Hello, World!"))

(neo4j/defquery create-book
  "CREATE (u:book $book)")

(neo4j/defquery get-all-books
  "Match (u:book) RETURN u as book")

(def db
  (neo4j/connect (URI. "bolt://localhost:7687")
                 "neo4j"
                 "mangalho"))

(defn create-book-fn [book]
  (with-open [session (neo4j/get-session db)]
    (create-book session book)))

(create-book-fn {:book {:name "alice in wonderland" :author "lewis carroll"}})

(defn get-book-fn []
  (neo4j/with-transaction db txn
    (prn (get-all-books txn))))

;; Writing works with session and txn both
(neo4j/with-transaction db txn
  (create-book txn {:book {:name "alice in wonderland" :author "lewis carroll" :txn true}}))

;; Querying doesn't work with session?
(with-open [session (neo4j/get-session db)]
  (get-all-books session))

(get-book-fn)
