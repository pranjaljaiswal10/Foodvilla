import { RAZORPAY_KEY } from "../utils/constant";
import {useNavigate} from "react-router-dom"
const usePayment=(totalPayment)=>{
    const navigate=useNavigate()
    const handlePayment=()=>{
       navigate("/")
    }
    const launchRazorPay=()=>{
        let options={
            key:RAZORPAY_KEY,
            amount:Math.round(totalPayment) *100,
            currency:"INR",
            name:"Food-villa",
            description:"Order food online",
            handler:handlePayment,
            theme:{color:"#c4242d"}
        };
        const razorPayment=new window.Razorpay(options)
        razorPayment.open()
    };
    return launchRazorPay;
}
export default usePayment;