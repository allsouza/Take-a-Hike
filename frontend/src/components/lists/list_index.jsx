import React from 'react';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    // mapp in props from List index to list index item

    render() {
        if (!this.props.lists) {
            return null
        } else {
            return (
                <div>
                    <h1>List Index</h1>
                    {
                        this.props.lists.map(list => {
                            return <ListIndexItem />  
                        })
                    }
                </div>
            )
        }
    }
}