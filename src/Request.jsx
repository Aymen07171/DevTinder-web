// src/Requests.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addRequests, removeRequest } from './Utils/requestSlice';
import { BASE_URL } from './Utils/constants';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);

    const reviewRequest = async (status, _id) => {
        try {
            // Fix: Added await keyword and proper error handling
            const res = await axios.post(
                `${BASE_URL}/request/review/${status}/${_id}`,
                {},
                { withCredentials: true }
            );
            
            // Only remove request if API call was successful
            dispatch(removeRequest(_id));
            console.log('Request reviewed successfully:', res.data);
        } catch (err) {
            console.error("Error reviewing request:", err);
            // Optionally show user-friendly error message
        }
    };

    const fetchRequests = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/requests/received`, {
                withCredentials: true,
            });

            // Fix: Handle different response structures
            const requestsData = res.data.data || res.data || [];
            dispatch(addRequests(requestsData));
            console.log('Fetched requests:', requestsData);
        } catch (err) {
            console.error("Error fetching requests:", err);
            // Set empty array on error to prevent crashes
            dispatch(addRequests([]));
        }
    };

    useEffect(() => {
        fetchRequests();
        reviewRequest()
    }, []); 

    // Fix: Proper loading and empty state handling
    if (!requests) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg"></div>
                    <p className="mt-4">Loading requests...</p>
                </div>
            </div>
        );
    }

    if (requests.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">No Requests Found</h1>
                    <p className="text-base-content/60">You don't have any pending requests.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Connection Requests</h1>
            
            <div className="max-w-4xl mx-auto space-y-6">
                {requests.map((request) => (
                    <div key={request._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center space-x-6">
                                {/* Profile Picture */}
                                <div className="avatar">
                                    <div className="w-20 h-20 rounded-full">
                                        <img 
                                            src={request.fromUserId?.photoUrl || '/default-avatar.png'} 
                                            alt={`${request.fromUserId?.firstName || 'User'} ${request.fromUserId?.lastName || ''}`}
                                            className="rounded-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/default-avatar.png';
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* User Info */}
                                <div className="flex-1">
                                    <h2 className="card-title text-2xl">
                                        {request.fromUserId?.firstName || 'Unknown'} {request.fromUserId?.lastName || 'User'}
                                    </h2>
                                    
                                    <div className="flex gap-4 mt-2">
                                        {request.fromUserId?.age && (
                                            <div className="badge badge-outline">
                                                Age: {request.fromUserId.age}
                                            </div>
                                        )}
                                        {request.fromUserId?.gender && (
                                            <div className="badge badge-outline">
                                                {request.fromUserId.gender}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Skills */}
                                    {request.fromUserId?.skills && request.fromUserId.skills.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold mb-2">Skills:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {request.fromUserId.skills.map((skill, index) => (
                                                    <div key={index} className="badge badge-primary badge-sm">
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col items-end">
                                    <button 
                                        onClick={() => reviewRequest('accepted', request._id)}
                                        className="btn btn-secondary mb-2"
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        onClick={() => reviewRequest('rejected', request._id)}
                                        className="btn btn-outline"
                                    >
                                        Reject
                                    </button>
                                </div>
                                
                            
                            </div>
            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Requests;