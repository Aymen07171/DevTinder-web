import axios from "axios";
import { BASE_URL } from './Utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { removeUserFeed, addFeed } from "./Utils/feedSlice";
import { useState, useEffect } from "react";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const feed = useSelector(state => state.feed);

  const fetchNewFeed = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true
      });
      
      if (response.data) {
        const newFeedData = response.data.feed || response.data.data || response.data;
        // Use addFeed to completely replace the feed data
        dispatch(addFeed(newFeedData));
      }
    } catch (err) {
      console.error('Error fetching new feed:', err);
      setError('Failed to load new profiles');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch new feed when feed array is empty or has only one item
    if (feed && feed.length <= 1) {
      fetchNewFeed();
    }
  }, [feed]);

  const handleRequest = async (status, id) => {
    try {
      if (!id || !status) {
        throw new Error('Invalid request parameters');
      }

      setIsLoading(true);
      setError(null);
      
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${id}`,
        {}, 
        { withCredentials: true }
      );

      if (res.status === 200 || res.status === 201) {
        dispatch(removeUserFeed(id));
        // Feed length check and fetch will be handled by useEffect
      }

    } catch (err) {
      console.error('Error handling request:', err);
      setError(err.response?.data?.message || 'An error occurred while processing your request');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen shadow-lg p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <figure className="w-full h-[30rem] overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
          <img
            src={user.photoUrl || '/default-avatar.png'}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/default-avatar.png';
            }}
          />
        </figure>

        <div className="p-4 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            {user.skills?.length > 0 ? user.skills.join(' - ') : 'No skills listed'}
          </p>

          {error && (
            <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded-md">
              {error}
            </p>
          )}

          <div className="mt-4 flex gap-4">
            <button 
              onClick={() => handleRequest('rejected', user._id)}
              disabled={isLoading}
              className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50 transition-all duration-300 hover:bg-opacity-90"
            >
              {isLoading ? 'Processing...' : 'Pass'}
            </button>
            <button 
              onClick={() => handleRequest('accepted', user._id)}
              disabled={isLoading}
              className="px-4 py-2 bg-secondary text-white rounded-md disabled:opacity-50 transition-all duration-300 hover:bg-opacity-90"
            >
              {isLoading ? 'Processing...' : 'Interested'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;