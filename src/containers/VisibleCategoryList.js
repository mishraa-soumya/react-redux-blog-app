import CategoryList from '../components/CategoryList'

const getVisibleCategoryList = (categories) => {
    return categories
}

export default class VisibleCategoryList extends Component {

    render () {
        let state = this.props.store.getState();
        <div>
            <CategoryList categories={ state.categories } />
        </div>
    }
}

