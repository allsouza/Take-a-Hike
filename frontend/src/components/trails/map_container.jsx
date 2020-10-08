import {connect} from 'react-redux';
import {fetchApiTrails} from '../../actions/search_actions';
import Map from './map';

const mapStateToProps = (state) => {
    return {
        trails: state.entities.trails
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchApiTrails: bounds => dispatch(fetchApiTrails(bounds))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Map);
