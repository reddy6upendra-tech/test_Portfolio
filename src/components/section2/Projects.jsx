import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='bg-red-400 w-4/5 mx-auto p-8 rounded-2xl border-4 border-black shadow-[10px_10px_0px_black]'>
      <div className='flex justify-between'>
        <h2 className='text-4xl'>Projects</h2>
        <a className='bg-red-300 p-2 rounded-full border-2 hover:scale-105 transition' href="/Resume.pdf" target='_blank'>Resume</a>
      </div>
      <div className='bg-red-300 m-2 p-4 rounded-4xl border-2 hover:scale-102 transition'>
        <h3 className='text-2xl hover:underline transition'><a href="https://drop.xo.je/" target='_blank'>IoT Based Smart Leak Detection System</a></h3>
        <span className='text-xs'>Esp32, Sensors, C, HTML, CSS, JS, PHP, MySQL, Arduino IDE</span>
        <p className='text-lg'>Esp32 detects the leak in the pipeline using pressor sensors and programmed logic
            It sends sensor values and Leak Status to MySQL database using http request
            https://drop.xo.je is the web interface prototype for users and admin to check real time values of sensors, it
            also have a feedback portal, along with admin dashboard
        </p>

      </div>
      <div className='bg-red-300 m-2 p-4 rounded-4xl border-2 hover:scale-102 transition'>
        <h3 className='text-2xl hover:underline transition'><a href="https://github.com/reddy6upendra-tech/uProjects/tree/627641169ece6e2022b2003d9f6b964c83f53103/DigitalWatch" target='_blank'>Digital Watch</a></h3>
        <span className='text-xs'>8051 Microcontroller, Embedded C, Keil, Proteus</span>
        <p className='text-lg'>Developed a Digital Clock which runs on 8051 Microcontroller Timers, and Interrupts using Proteus and Keil
            Wrote C code in Keil software and debugged it
            Developed hardware using Proteus tool with AT89C51, 7 segment display
        </p>
      </div>
      <div className='bg-red-300 m-2 p-4 rounded-4xl border-2 hover:scale-102 transition'>
        <h3 className='text-2xl hover:underline transition'><a href="https://questronics.rf.gd/" target='_blank'>Questronics Event Portal</a></h3>
        <span className='text-xs'>HTML, CSS, JS, PHP, MySQL</span>
        <p className='text-lg'>Built an event portal allowing student teams to retrieve Questions using teamcode (Ex: team1, team2, team15)
            Conducted an event for students in college about C programming
        </p>
      </div>
    </div>
    </>
  )
}

export default Projects
