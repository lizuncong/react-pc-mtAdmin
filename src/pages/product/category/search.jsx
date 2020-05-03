import React from 'react';
import SearchForm from '../../../components/search-form';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.formItems = [
      {
        title: '分类名称',
        dataIndex: 'name',
        type: 'input',
      },
    ];
    this.state = {
      searchCondition: {},
    };
  }

  render() {
    const { searchCondition } = this.state;
    return (
      <SearchForm
        formItems={this.formItems}
        value={searchCondition}
        onValueChange={(value) => {
          console.log('user search value.....', value);
          this.setState({
            searchCondition: value,
          });
        }}
      />
    );
  }
}


export default Search;
