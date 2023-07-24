import React from 'react'
import { format, differenceInYears, addYears } from 'date-fns'

interface AgeCalculatorProps {
  dateOfBirth: string | undefined
}

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ dateOfBirth }) => {
  const calculateAgeAndNextBirthday = (dob: string | undefined) => {
    if (typeof dob === 'string') {
      const today = new Date()
      const [birthYear, birthMonth, birthDay] = dob.split('-').map(Number)
      const birthDate = new Date(birthYear, birthMonth - 1, birthDay)

      const age = differenceInYears(today, birthDate)
      const nextBirthday = format(addYears(birthDate, age + 1), 'yyyy-MM-dd')

      return { age, nextBirthday }
    } else {
      // Manejar el caso cuando dob es undefined o no es una cadena válida
      return { age: 0, nextBirthday: '' }
    }
  }

  const { age, nextBirthday } = calculateAgeAndNextBirthday(dateOfBirth)

  return (
    <div>
      <p className="card__subtitle">Edad: {age} años</p>
      <p className="card__subtitle">Próximo cumpleaños: {nextBirthday}</p>
    </div>
  )
}

export default AgeCalculator
