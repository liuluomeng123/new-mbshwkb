// 网站数据

// 最新消息数据
const newsData = [
    {
        id: 1,
        title: "梦笔笙花工作室官网正式上线",
        publisher: "梦笔笙花工作室管理层",
        date: "2025-1-23",
        content: `我们很高兴地宣布，梦笔笙花工作室于2025年1月20日正式完成官网内测，1月23日正式上线<br><br>
        官网基于html、css、js开发，耗时1个月完成制作<br><br>
        官网将持续更新工作室产品，并将发布最新内容消息，请认准梦笔笙花官方，警惕虚假信息，避免上当受骗<br><br>
        感谢所有大家的支持和贡献！`
    },
    {
        id: 2,
        title: "工作室新项目\"迷你彩码通\"正式开始研发",
        publisher: "梦笔笙花项目组",
        date: "2025-1-20",
        content: `梦笔笙花工作室今日正式开始"迷你彩码通"项目研发，该项目旨在为迷你世界玩家快速生成彩色文字代码功能<br><br>
        项目组将在未来15天内完成产品的设计、开发和测试工作，预计本公告发布后一周内正式发布。<br><br>
        请注意：在《迷你世界》新版本中，聊天栏彩字已不再受支持，本工具可用范围暂仅支持字牌等。<br><br>
        本工具仅为工作室研究学习使用，如有侵权请联系删除，温馨提示：本工具与《迷你世界》游戏官方无任何关联，仅为个人制作`
    },
    {
        id: 3,
        title: "迷你彩码通项目已完成内测并已公开",
        publisher: "梦笔笙花项目组",
        date: "2025-1-23",
        content: `目前，迷你彩码通经过多轮测试，已满足日常使用，现已上线，使用方式如下：<br><br>
        1. 已知原颜色代码（包括16进制、RGB颜色代码）的情况下可以通过输入输出功能进行转换<br><br>
        2. 无原色代码，可通过调色板功能进行选色，选择完成后自动转换<br><br>
        3. 取色器功能，通过上传图片点击进行取色（不稳定，暂不可用）<br><br>
        未完善内容将在后续版本逐渐完善，对此造成的不便我们深表歉意<br><br>
        如需使用请跳转至“产品展示”页进行使用。`
    },
    {
        id:4
        title: "文件通途2.0开始研发",
        publisher: "梦笔笙花项目组",
        date: "2025-5-1",
        content: `目前，文件通途1.0因各种因素问题，将停止更新维护，后期将上线文件通途2.0，预计版本号将由1.0.0-beta修改为2.0.1-beta，具体内容如下：<br><br>
        1. 新版本将支持深浅主题转换功能<br><br>
        2. 新版本将支持自定义备份目录、是否备份选项<br><br>
        3. 旧版本（即现行的文件通途1.0）仍可用，但不再更新维护，后期可能出现系统不兼容现象<br><br>
        2.0.1-beta内容将在后续逐渐完善，对此造成的不便我们深表歉意<br><br>
        如需使用文件通途1.0.0-beta请跳转至“产品展示”页进行使用。`
    }
];

// 官方公告数据
const announcementsData = [
    {
        id: 1,
        title: "关于工作室相关规定的公告",
        publisher: "梦笔笙花管理层",
        date: "2025-3-22",
        content: `各位工作室成员：<br><br>
        经过研究决定，我们将对目前工作室室规进行更新，具体更新如下：<br><br>
        1. 针对违规成员，我们将采取零容忍的处罚策略，根据其违规程度，采取通报批评到逐出工作室等不同等级的处罚，处罚将在工作室公众号、QQ外部群、QQ频道、官网进行公示；<br><br>
        2. 针对游戏内违规行为，成员确存在违规行为的，被举报后由游戏官方审核并处置，工作室采取通报批评处罚，严重者可处停职、驱逐的处罚；<br><br>
        3. 成员隶属问题，针对此问题，我们将逐步设立部门，统一分配成员至合适的部门进行工作，每个部门将分配2~3个部门级管理人员（xx部负责人、xx部副负责人）；<br><br>
        我们将根据需求和成员意愿，在日后逐渐完善工作室相关规定，使工作室更加正规，更加完善<br><br>
        在此感谢大家的支持`
    },
    {
        id: 2,
        title: "关于工作室官网更新换代的公告",
        publisher: "梦笔笙花管理层",
        date: "2025-03-22",
        content: `各位工作室成员及各位用户：<br><br>
        为了提升大家的体验，我们将对官网进行新一轮的更新换代，预期如下：<br><br>
        1. 3月：前端建造完成，逐渐完善各项内容；<br><br>
        2. 4月：逐步开启内测，并逐步上线；<br><br>
        新版官网将更加美观、实用，希望大家能够喜欢。`
    },
    {
        id: 3,
        title: "关于文件通途1.0项目废止的公告",
        publisher: "梦笔笙花管理层",
        date: "2025-05-01",
        content: `各位工作室成员及各位用户：<br><br>
        因文件通途1.0.0-beta（以下简称初代通途）编写时存在的问题过多，代码过度冗余，难以修改，现决定对其停止更新维护，重新研发文件通途系列，预期如下：<br><br>
        1. 新版本仍使用python语言编写，采取多文件设置<br><br>
        2. 添加更多所需功能，使其更加现代化的同时更加人性化<br><br>
        3.增加更多安全措施（现有的搬运失败自动回滚、内存不足预警等仍然保留）
        因此对大家造成的不便我们深表歉意，在此感谢大家的持续关注，后续进展我们会持续更新，欢迎大家关注我们的微信公众号，谨防上当受骗！`
    }
];

// 产品展示数据
const productsData = [
    {
        id: 1,
        name: "文理-快捷批量重命名工具",
        image: "images/产品展示/文理-快捷重命名/文理-快捷重命名工具.png",
        date: "2025-01-14",
        publisher: "项目组",
        brief: "一款为指定位置的多种指定格式文件进行批量重命名的工具。",
        description: `文理是一款能够快速将指定格式文件批量重命名为指定名称并进行排序的应用。<br><br>
        <strong>主要功能：</strong><br>
        - 快速批量重命名<br>
        - 快捷编号`,
        downloadLink: "exe/文理beta1.2-Setup.exe",
        tags: ["Windows", "工具类"]
    },
    {
        id: 2,
        name: "迷你彩码通",
        image: "images/产品展示/迷你彩码通/迷你彩码通首页.png",
        date: "2025-01-27",
        publisher: "项目组",
        brief: "一个快速生成迷你世界彩字代码的网站。",
        description: `快速生成迷你世界游戏的彩字代码。<br><br>
        <strong>主要功能：</strong><br>
        - 已有颜色代码快速转换<br>
        - 调色板实时选取颜色<br>
        - 快捷复制便于使用`,
        downloadLink: null,
        useLink: "https://miniworldcodego.pages.dev",
        tags: ["网页", "游戏工具"]
    },
    {
        id: 3,
        name: "文件通途-快速文件搬运器",
        image: "images/产品展示/文件通途/文件通途展示图.png",
        date: "2025-02-23",
        publisher: "项目组",
        brief: "一款快速将文件迁移至其他位置的程序。",
        description: `如果是缓存文件，可以勾选创建链接符，可以保证迁移后软件仍然可以访问文件。<br><br>
        <strong>主要功能：</strong><br>
        - 文件可拖入<br>
        - 移动后在原位置创建链接符，不占用内存的同时保证可访问性`,
        downloadLink: "exe/文件通途-beta1.0.exe",
        useLink: null,
        tags: ["Windows", "小工具"]
    }
];

// 人员名单数据
const membersData = [
    {
        id: 1,
        name: "Liu柳洛梦rs.",
        status: "正式成员",
        statusClass: "status-active",
        position: "工作室室长",
        level: "管理层",
        levelClass: "level-management",
        joinDate: "2021-11-29",
        joinMethod: "创始人",
        brief: "工作室创始人",
        detail: `柳洛梦，梦笔笙花工作室创始人。<br><br>
        主导开发了工作室的多个核心产品，包括智能日程管理系统和云端协作平台等。`
    },
    {
        id: 2,
        name: "Liu柳蓉笙lm.",
        status: "正式成员",
        statusClass: "status-active",
        position: "工作室副室长、美术部负责人",
        level: "管理层",
        levelClass: "level-management",
        joinDate: "2024-05-11",
        joinMethod: "主动加入",
        brief: "负责工作室产品的界面设计和美化。",
        detail: `拥有丰富的产品设计经验。<br><br>
        <strong>项目经历：</strong><br>
        负责工作室多个产品的UI设计美化、图标设计与制作。`
    },
    {
        id: 3,
        name: "『圣』天羽",
        status: "正式成员",
        statusClass: "status-active",
        position: "暂无部门",
        level: "普通成员",
        levelClass: "level-member",
        joinDate: "2023-08-23",
        joinMethod: "邀请加入",
        brief: "负责工作室技术开发与维护。",
        detail: `拥有丰富的开发经验，精通多种编程语言。<br><br>
        <strong>项目经历：</strong><br>
        主导开发了工作室的多个核心产品，包括文理重命名工具和文件通途等。`
    },
    {
        id: 4,
        name: "蕴允允",
        status: "正式成员",
        statusClass: "status-active",
        position: "暂无部门",
        level: "普通成员",
        levelClass: "level-member",
        joinDate: "2024-07-10",
        joinMethod: "主动加入",
        brief: "负责工作室配音、美化、测试等内容",
        detail: `暂无简介<br><br>
        <strong>项目经历：</strong><br>
        参与开发了工作室官网和迷你彩码通等项目。`
    },
    {
        id: 5,
        name: "桃一江",
        status: "正式成员",
        statusClass: "status-active",
        position: "暂无部门",
        level: "普通成员",
        levelClass: "level-member",
        joinDate: "2024-07-20",
        joinMethod: "邀请加入",
        brief: "负责工作室产品UI设计。",
        detail: `拥有良好的审美能力和设计技巧。<br><br>
        <strong>项目经历：</strong><br>
        参与设计了工作室多个产品的用户界面。`
    },
    {
        id: 6,
        name: "蜜桃",
        status: "正式成员",
        statusClass: "status-active",
        position: "技术部前端开发",
        level: "普通成员",
        levelClass: "level-member",
        joinDate: "2023-02-10",
        joinMethod: "主动加入",
        brief: "负责工作室前端设计。",
        detail: `熟悉前端开发技术，有丰富的数据库经验。<br><br>
        <strong>项目经历：</strong><br>
        参与开发了工作室多个产品的前端功能。`
    }]