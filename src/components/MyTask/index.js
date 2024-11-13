import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  FormContainer,
  InputContainer,
  Select,
  SelectContainer,
  Button,
} from './styledComponent'
import TaskList from '../TaskList'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const MyTask = () => {
  const [inputText, setInput] = useState('')
  const [selected, changeSelected] = useState(tagsList[0].optionId)
  const [taskList, addTask] = useState([])

  const addToList = event => {
    event.preventDefault()
    const obj = {
      id: uuidv4(),
      inputText,
      selected,
    }
    addTask(prev => [...prev, obj])
    setInput('')
    changeSelected(tagsList[0].optionId)
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={addToList}>
        <h1>Create a task!</h1>
        <InputContainer>
          <label htmlFor="input">Task</label>
          <br />
          <input
            type="text"
            placeholder="Enter the Task Here"
            id="input"
            onChange={event => setInput(event.target.value)}
            value={inputText}
            required
          />
        </InputContainer>
        <SelectContainer>
          <label htmlFor="select">Tags</label>
          <br />
          <Select
            onChange={event => {
              changeSelected(event.target.value)
            }}
            id="select"
            value={selected}
          >
            {tagsList.map(each => (
              <option
                key={each.optionId}
                id={each.optionId}
                value={each.optionId}
              >
                {each.displayText}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <Button type="submit">Add Task</Button>
      </FormContainer>
      <TaskList task={taskList} />
    </MainContainer>
  )
}

export default MyTask
