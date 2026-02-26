import Course from './Course'

const AllCourses = ({courses}) => {
    return(
        <>
            {courses.map(({id, name: courseName, parts}) => (
                    <Course key={id} name={courseName} parts={parts} />
                )
            )}
        </>
    )
}

export default AllCourses