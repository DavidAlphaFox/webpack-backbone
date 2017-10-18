import "./scss/index.scss"
import Backbone from "backbone"
import AppRouter from "./router"

window.router = new AppRouter()
Backbone.history.start()
