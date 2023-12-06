import OrderSummaryBox from "./OrderSummaryBox";
import PickupLists from "./PickupLists";

const RightTab = () => {
    return (
        <div style={{marginTop: '55px'}}>
            <OrderSummaryBox />

            <PickupLists />
        </div>
    );
}

export default RightTab;