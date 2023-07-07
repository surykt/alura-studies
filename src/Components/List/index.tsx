import React from 'react'

export default function List() {
  const subjects = [{
    task: 'React',
    time: '02:00:00'
  },
  {
    task: 'Javascript',
    time: '01:00:00'
  },
  {
    task: 'Typescript',
    time: '03:00:00'
  }
]

  return(
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {subjects.map((subject) => (
          <li>
            <h3>{subject.task}</h3>
            <span>{subject.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
