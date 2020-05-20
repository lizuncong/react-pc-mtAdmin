import React from 'react';
import SearchForm from '../../../../components/search-form';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.formItems = [
      {
        title: '分类名称',
        dataIndex: 'categoryName',
        type: 'input',
      },
    ];
  }

  render() {
    const { searchCondition, onChange } = this.props;
    return (
      <SearchForm
        formItems={this.formItems}
        value={searchCondition}
        onValueChange={(value, formItem) => {
          onChange(value, formItem);
        }}
      />
    );
  }
}


export default Search;
