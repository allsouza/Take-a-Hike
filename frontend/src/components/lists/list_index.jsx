import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newList = this.newList.bind(this);
        this.openList = this.openList.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    newList(){
        this.props.openModal('newList');
    }

    // map in props from List index to list index item

    openList(list){
        this.props.currentUser === list.author ? this.props.editList(list, false) : this.props.editList(list, true);
    }

    render() {
        return (
            <div className="list-index">
                
                <ul>
                    {this.props.lists.map(list => {
                        return <li key={list._id} onClick={() => this.openList(list)}>
                            <ListIndexItem 
                                list={list} 
                                deleteList={this.props.deleteList} 
                                editList={this.props.editList}
                                userId = {this.props.currentUser}
                                />  </li>
                    })} 
                </ul>
                 <button onClick={this.newList}>Create List</button>
            </div>
        )
    }
}

export default ListIndex;