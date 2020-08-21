import React from 'react';
import Person from './Person/Person';
const persons = (props) =>
    props.persons.map((w, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={w.name}
            key={w.id}
            changed={(event) => props.changed(event, w.id)} />
    });
export default persons