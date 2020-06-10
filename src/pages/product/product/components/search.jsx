import React from 'react';
import SearchForm from '../../../../components/search-form';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.formItems = [
      {
        title: '商品名称',
        dataIndex: 'productName',
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
