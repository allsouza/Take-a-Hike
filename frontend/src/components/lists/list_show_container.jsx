import { connect } from "react-redux"
import ListShow from "./list_show"

const { closeModal } = require("../../actions/modal_actions")

const mSTP = (state, ownProps) => {
    return({
        list: ownProps.info
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal) 
})

export default connect(mSTP, mDTP)(ListShow)