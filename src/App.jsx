import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const App = () => {
  const [time, setTime] = useState(300) // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formattedTime = `${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTime(300)
    setIsRunning(false)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-8 shadow-lg"
      >
        <div className="flex items-center justify-center text-6xl font-bold mb-4">
          <Clock className="mr-4" />
          {formattedTime}
        </div>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-rose-500 text-white px-6 py-3 rounded-lg"
            onClick={handleStart}
          >
            Start
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg"
            onClick={handlePause}
          >
            Pause
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-fuchsia-500 text-white px-6 py-3 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default App