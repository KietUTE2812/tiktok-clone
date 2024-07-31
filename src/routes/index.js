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
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 1',
            views: 200000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
            src: 'https://res.cloudinary.com/drhf9fpvf/video/upload/v1721646322/o8se63wxekhmnopkghcj.mp4',
            title: 'Video 2',
            views: 500000,
        },
        {
            id: '2',
            image: 'https://res.cloudinary.com/drhf9fpvf/image/upload/v1722237541/judiihs5jckzynmilyg0.avif',
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