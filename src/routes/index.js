import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import Messages from "~/pages/Messages"
import Profile from "~/pages/Profile"
import { HeaderOnly } from "~/components/Layout"
//Public Routes
const publicRoutes = [

    {
        path: "/", component: Home, videos: [{
            id: '1',
            own: {
                name: 'Nguyen Van A',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png'
            },
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 1',
            views: 200000,
        },
        {
            id: '2',
            own: {
                name: 'Nguyen Van A',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png'
            },
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 1',
            views: 200000,
        },

        ]
    },
    { path: "/following", component: Following },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/messages", component: Messages, layout: HeaderOnly },
    {
        path: "/profile", component: Profile, props: { id: "daotankiet", name: "Nguyen Van A", following: 100, follower: 200, like: 300, description: "Hello, I'm Nguyen Van A" },
        videos: [{
            id: '1',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 1',
            views: 200000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/okLfDfQTDBrmF3CEaQERCMIZaBQQkAsg0cR2IA~tplv-photomode-zoomcover:480:480.avif?lk3s=81f88b70&nonce=82494&refresh_token=b9cf6a7685ac0c0b0b6a7ff11fe5d73c&x-expires=1721804400&x-signature=2WK4R%2FWm5agBYlYlNEvhAa1fFik%3D&shp=81f88b70&shcp=-',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        }
        ]
    },


]
const privateRoutes = [

]

export { publicRoutes, privateRoutes }