import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('persons.js getderivedstatefromprops');
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('persons.js shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons  ||
    //          nextProps.changed!==this.props.changed ||
    //          nextProps.clicked !==this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('presons.js getSnapshotBeforeUpdate');
        return { message: 'snapshot' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('presons.js componentDidUpdate');
        console.log(snapshot)
    }
    componentWillUnmount() {
        console.log('person.js  componenet unmount ');
    }
    render() {
        console.log('persons.js rendering....');
        return this.props.persons.map((w, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={w.name}
                key={w.id}
                changed={(event) => this.props.changed(event, w.id)}
                isAuth={this.props.isAuthenticated} />
        });
    }
}
export default Persons