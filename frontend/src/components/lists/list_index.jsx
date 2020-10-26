import React from 'react';
// import { openModal } from '../../actions/modal_actions';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newList = this.newList.bind(this)
        this.openList = this.openList.bind(this);
        this.state = {ready: false}
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    componentDidUpdate(){
        if(Object.values(this.props.allUsers).length > 0 && !this.state.ready){
            this.setState({ready: true})
        }
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
                {this.state.ready ? 
                <ul>
                    {this.props.lists.map(list => {
                        return <li key={list._id} onClick={() => this.openList(list)}>
                            <ListIndexItem 
                                list={list} 
                                deleteList={this.props.deleteList} 
                                editList={this.props.editList}
                                userId = {this.props.currentUser}
                                allUsers = {this.props.allUsers}
                                />  </li>
                    })} 
                </ul> : null}
                 <button onClick={this.newList}>Create List</button>
            </div>
        )
    }
}

export default ListIndex;