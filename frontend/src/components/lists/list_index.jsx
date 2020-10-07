import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newList = this.newList.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    newList(){
        this.props.openModal('newList');
    }

    // map in props from List index to list index item

    render() {
        return (
            <div className="list-index">
                <h1>Lists</h1>
                <ul>
                    {this.props.lists.map(list => {
                        return <li key={list._id} onClick={() => {this.props.editList(list)}}>
                            <ListIndexItem list={list} deleteList={this.props.deleteList}/>  </li>
                    })} 
                </ul>
                 <button onClick={this.newList}>Create List</button>
            </div>
        )
    }
}

export default ListIndex;