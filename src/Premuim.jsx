import axios from "axios";
import { BASE_URL } from "../src/Utils/constants"; // Ensure you have the correct path to your constants file
import { useEffect, useState } from "react";

const Premium = () => {
const [isUserPremium, setIsUserPremium] = useState(false);

// Check if the user is a premium user when the component mounts
useEffect(() => {
verifyPremiumUser();
}, []);

const verifyPremiumUser = async () => {
const res = await axios.get(BASE_URL + "/premium/verify", {
    withCredentials: true,
});

if (res.data.isPremium) {
    setIsUserPremium(true);
}
};

const handleBuyClick = async (type) => {
const order = await axios.post(
    BASE_URL + "/payment/create",
    {
    membershipType: type,
    },
    { withCredentials: true }
);

const { amount, keyId, currency, notes, orderId } = order.data;

const options = {
    key: keyId,
    amount,
    currency,
    name: "Dev Tinder",
    description: "Connect to other developers",
    order_id: orderId,
    prefill: {
    name: notes.firstName + " " + notes.lastName,
    email: notes.emailId,
    contact: "9999999999",
    },
    theme: {
    color: "#F37254",
    },
    handler: verifyPremiumUser,
};

const rzp = new window.Razorpay(options);
rzp.open();
};

return isUserPremium ? (
<div className="m-10 text-center">
    <h1 className="text-2xl font-bold text-green-600">
    You're already a premium user! 🎉
    </h1>
</div>
) : (
<div className="m-10">
    <div className="flex w-full gap-6">
    {/* Silver Membership */}
    <div className="card bg-base-300 rounded-box grid h-96 flex-grow place-items-center p-6">
        <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl text-gray-800">Silver Membership</h1>
        
        {/* Price */}
        <div className="text-4xl font-bold text-green-600">
            FREE
            <span className="text-lg text-gray-500 font-normal">/ 3 months</span>
        </div>
        
        {/* Features */}
        <ul className="text-left space-y-2 my-6">
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Chat with other people
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            100 connection requests per day
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Blue Tick verification
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            3 months duration
            </li>
        </ul>
        
        <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-secondary w-full mt-4"
        >
            Get Silver Free
        </button>
        </div>
    </div>

    <div className="divider divider-horizontal">OR</div>

    {/* Gold Membership */}
    <div className="card bg-base-300 rounded-box grid h-96 flex-grow place-items-center p-6 relative">
        {/* Popular badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
            POPULAR
        </span>
        </div>
        
        <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl text-gray-800">Gold Membership</h1>
        
        {/* Price */}
        <div className="text-4xl font-bold text-yellow-600">
            $10
            <span className="text-lg text-gray-500 font-normal">/ 6 months</span>
        </div>
        
        {/* Features */}
        <ul className="text-left space-y-2 my-6">
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Chat with other people
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <strong>Unlimited</strong> connection requests per day
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <strong>Gold</strong> Tick verification
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            6 months duration
            </li>
            <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Priority matching
            </li>
        </ul>
        
        <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-primary w-full mt-4"
        >
            Buy Gold - $10
        </button>
        </div>
    </div>
    </div>
    
    {/* Additional info */}
    <div className="text-center mt-8 text-gray-600">
    <p className="text-sm">
        All memberships include secure payment processing and instant activation.
    </p>
    <p className="text-xs mt-2">
        No recurring charges. One-time payment for the full duration.
    </p>
    </div>
</div>
);
};

export default Premium;