import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchPhones} from '../../actions/index'

class Phones extends Component{
    componentDidMount() {
     this.props.fetchPhones();
    }

    render(){
        return(
            <div>
                Phones
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
};

export default connect(null, mapDispatchToProps)(Phones) // в connect берутся методы mapDispatchToProps и вызываются,
// в отличии от того, когда мы передаём функцию dispatch => ... как аргумент