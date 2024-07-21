import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import Messages from "~/pages/Messages"
import { HeaderOnly } from "~/components/Layout"
//Public Routes
const publicRoutes = [

    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/messages", component: Messages, layout: HeaderOnly }

]
const privateRoutes = [

]

export { publicRoutes, privateRoutes }