import menu1Image from '../images/menu1.jpeg';
import menu2Image from '../images/menu2.jpg';
import menu3Image from '../images/menu3.jpg';
import menu4Image from '../images/menu4.jpeg';

export const dummyMenus = [
    {
        id: 1,
        name: "아메리카노",
        isSeasonal: false,
        category: "COFFEE",
        options: ["샷 추가", "헤이즐넛 시럽 추가", "바닐라 시럽 추가"],
        price: "4,500",
        image: menu1Image,
    },
    {
        id: 2,
        name: "카페라떼",
        isSeasonal: false,
        category: "COFFEE",
        options: ["샷 추가", "저지방 우유", "무지방 우유"],
        price: "5,000",
        image: menu2Image,
    },
    {
        id: 3,
        name: "아이스티",
        isSeasonal: false,
        category: "TEA",
        options: ["샷 추가", "더 달게", "덜 달게"],
        price: "5,000",
        image: menu3Image,
    },
    {
        id: 4,
        name: "X-MAS 프라푸치노",
        isSeasonal: true,
        category: "SMOOTHIE",
        options: ["휘핑크림", "초콜릿시럽"],
        price: "6,000",
        image: menu4Image,
    }
];
