import { Calendar } from '@/src/Components/Calendar'
import { Container, TimePicker } from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container>
      <Calendar />

      {isDateSelected && <TimePicker />}
    </Container>
  )
}
