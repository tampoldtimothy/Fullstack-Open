import React from 'react'
import CourseHeader from './CourseHeader'
import Content from './Content'

const Course = ({ courseData }) => (
  <div>
    <CourseHeader text={courseData.name} />
    <Content parts={courseData.parts} />
  </div>
)

export default Course
