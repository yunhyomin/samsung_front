import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/api/getArticleList",
        response: ({ body }) => {
            console.log(body);
                return {
                    code: 0,
                    data: {
                        count: 100,
                        list: [
                            {
                            year: "2022",
                            title: 'title',
                            desc: 'desc',
                            _id: '1',
                            img_url: 'https://pbs.twimg.com/media/BKCCeWSCMAAakI8.jpg',
                            list: [
                                {
                                    create_time: '2022.05.05',
                                    title: "Title",
                                    _id: "_1"
                                }
                            ],
                                meta: {
                                    views: 100,
                                    comments: 200,
                                    likes: 300
                                }
                            }
                        ],
                    },
                    message: ""
                };
        }
    },
    {
        url: "/api/getTagList",
        response: ({ body }) => {
            console.log(body);
            return {
                code: 0,
                data: {
                    count: 100,
                    list: [
                        {
                            name: "Tag1",
                            id: "tag1",
                        },
                        {
                            name: "Tag2",
                            id: "tag2",
                        }
                    ],
                },
                message: ""
            };
        }
    },
] as MockMethod[];
