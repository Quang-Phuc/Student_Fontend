import React, {Component} from 'react';
import Link from "next/link";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}


class CategoryItem extends Component {
    onDelete = (id) => {
        if(confirm('Bạn có chắc muốn xóa>')) {
            this.props.onDelete(id)
        }
    }

    render() {
        var { category, index } = this.props;
        return (
            <React.Fragment>
                <tr>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    {/* <td>{category.slug}</td>
                    <td>{category.document_count}</td> */}
                    <td>{new Date(category.createdDate).toString()}</td>
                    <td>
                        <a href={`/admin/category/${category.id}`} className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                        <a href={`/admin/category/${category.id}`} className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                        <button onClick={() => this.onDelete(category.id)}  className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}


export default CategoryItem