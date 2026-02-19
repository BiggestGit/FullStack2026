
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 0,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 1,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 2,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    const Header = (props) => {
    return <h1>{props.course}</h1>
  }
  
  const Content = (props) => {

    return (
      props.parts.map(part => 
      <PrintPart key={part.id} part ={part} />
      )

    )
  }

  const Total = (props) => {
    let total = 0
    props.parts.forEach(part => {total += part.exercises})
    return (
      <p>
        Number of exercises {total}
      </p>
    )
  }
  const PrintPart = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App