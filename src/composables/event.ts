export interface Events {
  event: string
  date: string
  time: string
}

export const loveEvents = useLocalStorage<Events[]>('LOVE-EVENT', [])
