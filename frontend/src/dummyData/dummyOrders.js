export const dummyOrders = [
    {
      time: "19:29",
      menus: [
        {
          name: "피치 아메리카노",
          temp: "ice",
          options: ["샷추가"],
        },
        {
          name: "치아바타 샌드위치",
          options: [],
        },
      ],
      orderId: 123456789,
      orderer: "꾸냠이",
      price: "12,000",
      status: "new", // 'new', 'in-progress', 'completed'
    },
    {
      time: "19:30",
      menus: [
        {
          name: "아메리카노",
          temp: "hot",
          options: ["샷추가", "시럽"],
        },
      ],
      orderId: 123456788,
      orderer: "박진아",
      price: "4,000",
      status: "new", // 'new', 'in-progress', 'completed'
    },
    {
      time: "19:31",
      menus: [
        {
          name: "아메리카노",
          temp: "hot",
          options: ["샷추가", "시럽"],
        },
        {
          name: "아이스티",
          temp: "ice",
          options: ["샷추가"],
        },
      ],
      orderId: 123456787,
      orderer: "박진아",
      price: "4,000",
      status: "new", // 'new', 'in-progress', 'completed'
    },
  ];
