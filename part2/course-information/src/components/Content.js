import React from 'react'
import Part from './Part'
import TotalOfExercises from './TotalOfExercises'

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
    <TotalOfExercises
      total={parts.reduce((sum, part) => sum + part.exercises, 0)}
    />
  </div>
)

export default Content
