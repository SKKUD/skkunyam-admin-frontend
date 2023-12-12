import OrderSummaryBox from "./OrderSummaryBox";
import PickupLists from "./PickupLists";
import { dummyOrders } from "../../dummyData/dummyOrders";

const RightTab = () => {
    return (
        <div style={{marginTop: '40px' }}>
            <OrderSummaryBox/>

            <div style={{height: "40vh", margin: '20px 0', backgroundColor: "rgba(234, 234, 234, 1)", padding: '7px', borderRadius: '4px' }}> 
                <PickupLists orders={dummyOrders}/>
            </div>
        </div>
    );
}

export default RightTab;