import React from 'react'
import Button from '../Button'

export default function Form() {
  return(
    <form>
      <div>
        <label htmlFor='task'>
          Adicione um novo estudo
        </label>
        <input
          id='task'
          name='task'
          required
          placeholder='O que voçê quer estudar ?'
          type='text'
        />
      </div>
      <div>
        <label htmlFor='time'>
          Tempo
        </label>
        <input
          id='time'
          name='time'
          type='time'
          required
          min='00:00:00'
          max='01:30:00'
        />
      </div>
      <Button children='Button'/>
    </form>
  )
}
