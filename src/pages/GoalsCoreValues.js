import React from 'react';
import { goals, coreValues } from '../components/PageDescription';

const GoalsCoreValues = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content goals-core-values">
          <h2>Goals</h2>
          <ol className='goals'>
            {goals.map((item) => {
              return (
                <li key={item.id}>
                  <p>{item.text}</p>
                </li>
              )
            })}
          </ol>
          <h2>Core Values</h2>
          <ol className='core-values'>
            {coreValues.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.text.map((text, index) => {
                      return (
                        <li key={index}>{text}</li>
                      )
                    })}
                  </ul>
                  <h4>Related Values:</h4>
                  <ol>
                    {item.values.map((value, index) => {
                      return (
                        <li key={index}>{value}</li>
                      )
                    })}
                  </ol>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default GoalsCoreValues;