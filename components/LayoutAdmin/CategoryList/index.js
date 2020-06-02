import React from 'react';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

class CategoryList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="x-content">
                    <table className="table table-striped projects">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên chuyên mục</th>
                            {/* <th>Slug</th>
                            <th>Số tài liệu</th> */}
                            <th>Ngày tạo</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default CategoryList