import React from 'react';
import ListIndexItem from './list_index_item';

export default class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    // map in props from List index to list index item

    render() {
        if (!this.props.lists) {
            return null
        } else {
            return (
                <div className="list-index">
                    <h1>Lists</h1>
                    <ul>
                        {this.props.lists.map(list => {
                            return <ListIndexItem list={list} deleteList={this.props.deleteList} edit={this.props.editList}/>  
                        })} 
                    </ul>
                </div>
            )
        }
    }
}