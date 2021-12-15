(ns ^:figwheel-hooks weather.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]
   [ajax.core :refer [GET POST]]
   [reagent.dom :as rdom]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (r/atom {:title "WhichWeather"
                            :postalcode ""
                            :temperatures {
                                          :today {:label "Today"
                                                  :value nil}
                                          :tomorrow {:label "Tomorrow"
                                                     :value nil}}}))

(def api-key "f8e8ad51c3029604ffbaf0d0cae7eac2" )

(defn handle-response [resp]
  (let [today (get-in resp ["list" 0 "main" "temp"])
        tomorrow (get-in resp ["list" 8 "main" "temp"])]
    (swap! app-state
           update-in [:temperatures :today :value] (constantly today))
    (swap! app-state
           update-in [:temperatures :tomorrow :value] (constantly tomorrow))))

(defn get-forecast! []
  (let [postal-code (:postalcode @app-state)]             ;; <1>
    (GET "http://api.openweathermap.org/data/2.5/forecast"
              {:params {"q" postal-code
                        "appid" api-key
                        "units" "imperial"}
               :handler handle-response})))                     ;; <2>


(defn title []
  [:h1 (:title @app-state)])

(defn postal-code []
  [:div {:class "postal-code"}
   [:h3 "Enter your postal code"]
   [:input {:type :integer
            :placeholder "Postal Code"
            :on-change #(swap! app-state
                              assoc :postalcode (-> % .-target .-value))
            :value (:postalcode @app-state)}]
   [:input.button.is-primary {:value "Go"
                              :type :submit
                              :on-click #(get-forecast!)
                              }]])


(defn temperature [temp]
  [:div {:class "temperature"}
   [:div {:class "value"}
    (:value temp)]
   [:h2 (:label temp)]])

(defn app []
  [:div {:class "app"}
   [title] 
   [:div {:class "temperatures"}
    (for [temp (vals (:temperatures @app-state))]
      [temperature temp])]
   [postal-code]])

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(defn mount-element-app []
  (rdom/render
   [app] (gdom/getElement "app")))

(mount-element-app)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-element-app)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
