import React, { useState, useEffect } from 'react'

function App() {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setMemberData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof memberData.members === "undefined") ? (
        <p>Loading...</p>
      ) : (
        memberData.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App