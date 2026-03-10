import Contact from './Contact'

const Persons = ({shownContacts}) => {
    return(
        <>
            {shownContacts.map(person=>
                    <Contact key={person.id}
                    name={person.name}
                    number={person.number}/>
                )
            }
        </>
    )
}

export default Persons