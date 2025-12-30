import{useState,useEffect}from"react";
import React from 'react'
import axios from 'axios'
import {useParams}from"react-router-dom";


const FoodProfile = () => {
  const{id}=useParams();

  const [videos, setVideos] = useState([])
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/foodDash/${id}`, {
          withCredentials: true,
        })
        setFoods(response.data.foodPartner)
        setVideos(response.data.foodPartner.foodItems)
      } catch (error) {
        console.error('Error fetching foods:', error)
      }
    }

    fetchFoods()
  }, [id])

  return (
    <div className="p-4 w-full max-w-4xl mx-auto">
      {/* Profile card (transparent background) */}
      <div className="p-4 border rounded bg-transparent shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Avatar */}
          <div className=" w-24 h-24 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} >
            <img className="w-24 h-24 object-fill rounded-full" src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg" alt="" />
          </div>
                  
          {/* Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex flex-col gap-2">
                  <span className="inline-block btn-primary text-sm">{foods.businessName}</span>
                  <span className="inline-block btn-ghost text-sm">Address</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 border rounded text-center" style={{ background: 'transparent' }}>
                <div style={{ color: 'var(--muted)' }} className="text-xs">total meals</div>
                <div className="mt-1 text-xl font-bold">{foods.totalMeals}</div>
              </div>
              <div className="p-3 border rounded text-center" style={{ background: 'transparent' }}>
                <div style={{ color: 'var(--muted)' }} className="text-xs">customer serve</div>
                <div className="mt-1 text-xl font-bold">{foods.customerServe}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reels / videos grid: fixed height + scroll, 2 cols on small screens, 3 on md+ */}
      <div className="mt-4 h-[56vh] overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {videos.map((v) => (
            <div key={v._id} className="rounded overflow-hidden aspect-video flex items-center justify-center border" style={{ background: 'transparent' }}>
              <div className="px-2 py-1 text-sm" style={{ color: 'var(--muted)', border: '1px solid rgba(15,23,42,0.06)', borderRadius: 6 }}>
                <video
      src={v.video}
      controls
      className="w-full h-full object-cover"
    />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodProfile