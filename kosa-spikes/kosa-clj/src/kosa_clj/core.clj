(ns kosa-clj.core
  (:require [mount.core :as mount]
            [kosa-clj.config :as config]
            [kosa-clj.graph-db :as graph-db]
            [taoensso.timbre :as timbre]))

(defn start []
  (-> (mount/only #{#'config/config
                    #'graph-db/graph-db})
      (mount/start)))

(defn stop []
  (mount/stop))

(defn restart []
  (stop)
  (start))

(defn -main
  "I don't do a whole lot."
  [& _args]
  (timbre/info "Starting the app...")
  (start))
