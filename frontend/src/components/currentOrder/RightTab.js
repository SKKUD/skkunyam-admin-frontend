import OrderSummaryBox from "./OrderSummaryBox";
import PickupLists from "./PickupLists";
import { dummyOrders } from "../../dummyData/dummyOrders";

const RightTab = () => {
    return (
        <div style={{marginTop: '55px' }}>
            <OrderSummaryBox/>

            <PickupLists orders={dummyOrders}/>
        </div>
    );
}

export default RightTab;