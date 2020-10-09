import {connect} from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import {fetchApiTrails} from '../../actions/search_actions';
import { fetchTrails } from '../../actions/trails_actions';
import { openModal } from '../../actions/modal_actions';
import Map from './map';

const mapStateToProps = (state) => {
    return {
        trails: state.entities.trails
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchApiTrails: bounds => dispatch(fetchApiTrails(bounds)),
        fetchTrails: () => dispatch(fetchTrails()),
        updateFilter: bounds => dispatch(updateFilter('bounds', bounds)),
        openModal: (type, info) => dispatch(openModal(type, info))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Map);
