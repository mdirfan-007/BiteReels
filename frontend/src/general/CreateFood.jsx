import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateFood = ({ onCreate }) => {
  const navigate = useNavigate()
  const [videoFile, setVideoFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const fileInputRef = useRef(null)

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const removeVideo = () => {
    setVideoFile(null)
    setPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = null
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = new FormData()
    if (videoFile) form.append('video', videoFile)
    form.append('name', name)
    form.append('description', description)
         const response = await axios.post('http://localhost:3000/api/food/create',form,{
            withCredentials:true,
          })

          console.log(response.data);
          navigate('/Home');
          
  }

  return (
    <div className="p-4 min-h-screen flex items-start justify-center">
      <form className="auth-card w-full max-w-xl p-4 sm:p-6" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-3">Create Food</h2>

       <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Video</label>
          <label className="block border-2 border-dashed rounded-md p-3 text-center cursor-pointer">
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="hidden"
            />
            <div className="text-sm text-gray-600">Tap to select or drag a video (MP4, MOV)</div>
          </label>

       {preview && (
            <div className="mt-3">
              <video controls src={preview} className="reel-video rounded-md" />
              <div className="mt-2">
                <button type="button" onClick={removeVideo} className="btn-ghost">Remove video</button>
              </div>
            </div>
          )}
        </div>

       <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            className="input-field w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Food name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="input-field w-full min-h-[100px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <button type="submit" className="btn-primary w-full">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateFood