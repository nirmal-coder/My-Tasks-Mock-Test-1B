import {useState} from 'react'
import {
  Container,
  Tags,
  TasksList,
  TaskButton,
  TagButton,
} from './styledComponent'

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

const TaskList = props => {
  const [selectedTag, changeTag] = useState('')
  const {task} = props
  const filterByTag = task.filter(each => each.selected.includes(selectedTag))

  const changeTags = event => {
    const {value} = event.target
    console.log(value)
    changeTag(value)
  }

  return (
    <Container>
      <h1>Tags</h1>
      <Tags>
        {tagsList.map(each => (
          <li key={each.optionId}>
            <TagButton
              type="button"
              onClick={changeTags}
              isSelect={each.optionId === selectedTag}
              value={each.optionId}
            >
              {each.displayText}
            </TagButton>
          </li>
        ))}
      </Tags>
      <h1>Tasks</h1>
      {filterByTag.length === 0 ? (
        <p>No Tasks Added Yet</p>
      ) : (
        <TasksList>
          {filterByTag.map(each => (
            <li key={each.id}>
              <p>{each.inputText}</p>
              <TaskButton type="button">{each.selected}</TaskButton>
            </li>
          ))}
        </TasksList>
      )}
    </Container>
  )
}

export default TaskList
